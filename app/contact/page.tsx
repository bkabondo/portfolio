'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ChatAgent from '@/components/ChatAgent'
import { CONTACT } from '@/lib/data'

const SERVICES = [
  'Full-Stack Web App',
  'AI Integration',
  'API Development',
  'Frontend Development',
  'Consulting / Code Review',
  'Other',
]

const INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT.phone,
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: CONTACT.address,
    href: null,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry — ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Contact</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>
              Let&apos;s Connect!
            </h1>
            <p className="text-lg max-w-xl" style={{ color: 'var(--muted)' }}>
              Have a project in mind or a position to fill? I&apos;m open to exciting collaborations and opportunities.
              Fill out the form and I&apos;ll respond promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10">

            {/* ── FORM ── */}
            <form onSubmit={handleSubmit} className="rounded-2xl border p-8 space-y-5"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required
                    placeholder="Benjamin"
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors"
                    style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: 'var(--text)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border2)')} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} required
                    placeholder="Kabondo"
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors"
                    style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: 'var(--text)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border2)')} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="you@example.com"
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors"
                    style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: 'var(--text)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border2)')} />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors"
                    style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: 'var(--text)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border2)')} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Select a Service</label>
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors appearance-none"
                  style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: form.service ? 'var(--text)' : 'var(--muted)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border2)')}>
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border transition-colors resize-none"
                  style={{ background: 'var(--bg2)', borderColor: 'var(--border2)', color: 'var(--text)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border2)')} />
              </div>

              <button type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: sent ? '#22c55e' : 'var(--accent)' }}>
                {sent ? 'Opening your email client…' : (<><Send className="h-4 w-4" /> Send Message</>)}
              </button>
            </form>

            {/* ── INFO CARDS ── */}
            <div className="space-y-4">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="rounded-2xl border p-5 flex items-start gap-4 transition-all"
                  style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(124,106,247,0.12)' }}>
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent2)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--muted)' }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:underline" style={{ color: 'var(--text)' }}>{value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border p-5 mt-6" style={{ background: 'rgba(124,106,247,0.06)', borderColor: 'rgba(124,106,247,0.2)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>Response Time</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  I typically respond within <strong style={{ color: 'var(--text)' }}>24 hours</strong>. For urgent matters, email directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ChatAgent />
    </>
  )
}
