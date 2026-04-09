'use client'

import { useRef, useState } from 'react'
import { useScrollReveal } from '@/lib/utils/gsapAnimations'
import Toast, { type ToastState } from './Toast'
import Clarity from '@microsoft/clarity'

interface FormState {
  name: string
  email: string
  message: string
}

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastState>({
    title: '',
    message: '',
    type: 'ok',
    visible: false,
  })

  const showToast = (title: string, message: string, type: 'ok' | 'err' = 'ok') => {
    setToast({ title, message, type, visible: true })
  }

  const validate = (): boolean => {
    const newErrors: FieldErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim() || !isValidEmail(form.email)) newErrors.email = 'Valid email required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        if (data.demo) {
          showToast(
            'Message Received!',
            'Demo mode — add BREVO_API_KEY to .env.local to send real emails.'
          )
        } else {
          showToast('Message Sent!', "I'll reply within 24 hours.")
        }
        setForm({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        showToast('Send Failed', data.error ?? 'Please try again or email directly.', 'err')
      }
    } catch {
      showToast('Network Error', 'Could not reach the server. Please try again.', 'err')
    } finally {
      Clarity?.event('contact_submit')
      setLoading(false)
    }
  }

  const fieldClass = (key: keyof FieldErrors) =>
    `ff w-full rounded-xl px-4 py-3 text-sm${errors[key] ? ' err' : ''}`

  return (
    <>
      <Toast state={toast} />

      <section id="contact" className="py-24 px-6" ref={sectionRef}>
        <div className="max-w-2xl mx-auto">
          <div className="rv text-center mb-12">
            <div className="sl mb-3">Get In Touch</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ letterSpacing: '-.02em' }}
            >
              Let&apos;s Build Together
            </h2>
            <div className="ab mx-auto mb-4" />
            <p className="text-sm" style={{ color: 'rgba(237,224,240,.42)' }}>
              Have a project in mind? Reach out directly.
            </p>
          </div>

          <div className="rv glass gb rounded-3xl p-8 md:p-10">
            {/*
              CONTACT FORM — API route at /api/contact/route.ts
              To enable real email sending:
                1. Sign up at app.brevo.com
                2. Add BREVO_API_KEY, RECIPIENT_EMAIL, BREVO_SENDER_EMAIL to .env.local
                3. Restart the dev server
            */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    className="text-xs font-semibold block mb-2"
                    style={{ color: 'rgba(237,224,240,.5)' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1 ml-1" style={{ color: '#C72C41' }}>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="text-xs font-semibold block mb-2"
                    style={{ color: 'rgba(237,224,240,.5)' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p className="text-xs mt-1 ml-1" style={{ color: '#C72C41' }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="text-xs font-semibold block mb-2"
                  style={{ color: 'rgba(237,224,240,.5)' }}
                >
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project…"
                  className={`${fieldClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="text-xs mt-1 ml-1" style={{ color: '#C72C41' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-p w-full py-4 rounded-2xl font-semibold text-sm"
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>

              {/* <p className="text-xs text-center mt-3" style={{ color: 'rgba(237,224,240,.28)' }}>
                🔒 Demo mode — add Brevo keys to .env.local to send real emails
              </p> */}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
