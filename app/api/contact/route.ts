import { NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json()
    const { name, email, message } = body

    // Server-side validation
    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }
    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const apiKey = process.env.BREVO_API_KEY
    const recipientEmail = process.env.RECIPIENT_EMAIL ?? 'tanveer@example.com'
    const senderEmail = process.env.BREVO_SENDER_EMAIL ?? 'noreply@example.com'
    const senderName = process.env.BREVO_SENDER_NAME ?? 'Tanveer Portfolio'

    // If no real API key, return demo success
    if (!apiKey || apiKey.startsWith('xkeysib-REPLACE')) {
      console.log('[Demo] Contact form submission:', { name, email, message })
      return NextResponse.json({
        success: true,
        demo: true,
        message: 'Demo mode — add BREVO_API_KEY to .env.local to enable real sending.',
      })
    }

    // Send via Brevo transactional email API
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: recipientEmail, name: 'Tanveer H.' }],
        replyTo: { email, name },
        subject: `Portfolio enquiry from ${name}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px">
            <h2 style="color:#EE4540">New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background:#f5f5f5;padding:12px;border-radius:6px;white-space:pre-wrap">${message}</p>
          </div>
        `,
      }),
    })

    if (brevoRes.ok || brevoRes.status === 201) {
      return NextResponse.json({ success: true })
    }

    const errData = await brevoRes.json().catch(() => ({}))
    return NextResponse.json(
      { error: (errData as { message?: string }).message ?? 'Failed to send email' },
      { status: 500 }
    )
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
