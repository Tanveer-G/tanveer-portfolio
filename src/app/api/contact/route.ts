import { NextRequest, NextResponse } from 'next/server';
// import { trackServerEvent } from '@/lib/server-analytics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    const errors: Record<string, string> = {};
    if (!name || name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email';
    if (!subject || subject.trim().length < 2) errors.subject = 'Subject required';
    if (!message || message.trim().length < 10) errors.message = 'Message must be at least 10 characters';

    if (Object.keys(errors).length > 0) {
    //   await trackServerEvent('contact_form_error', { reason: 'validation', fields: Object.keys(errors) });
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Call Brevo API securely
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!brevoApiKey) {
      console.error('Missing BREVO_API_KEY');
    //   await trackServerEvent('contact_form_error', { reason: 'server_config' });
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: "Tanveer's Portfolio",
          email: "e.service.center1@gmail.com", // Must be verified in Brevo
        },
        to: [{
          email: "e.service.center1@gmail.com",
          name: "Tanveer",
        }],
        subject: `Portfolio Contact: ${subject}`,
        htmlContent: `
          <h3>New Message from Portfolio</h3>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
    //   await trackServerEvent('contact_form_error', { reason: 'brevo_api', status: response.status });
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Success
    // await trackServerEvent('contact_form_success', {});
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    // await trackServerEvent('contact_form_error', { reason: 'server_exception' });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}