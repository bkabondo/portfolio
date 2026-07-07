'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ChatAgent from '@/components/ChatAgent'
import { CONTACT } from '@/lib/data'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

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
    color: 'var(--accent2)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: 'var(--accent2)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Fort Worth, TX · USA',
    href: null,
    color: 'var(--accent2)',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'benjaminkabondo',
    href: CONTACT.linkedin,
    color: '#0077b5',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@kabondob',
    href: CONTACT.instagram,
    color: '#e1306c',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'bkabondo',
    href: CONTACT.github,
    color: 'var(--text)',
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
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true); setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSent(true)
      setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setSent(false), 6000)
    } catch {
      // Email service unavailable — fall back to the visitor's own mail client so the message still arrives
      const subject = encodeURIComponent(`Portfolio Inquiry — ${form.service || 'General'} from ${form.firstName} ${form.lastName}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.firstName} ${form.lastName}\n${form.email}${form.phone ? `\n${form.phone}` : ''}`)
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
      setError(`I've opened your email app with this message pre-filled — just hit send. You can also reach me directly at ${CONTACT.email}.`)
    }
    setSending(false)
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

              {error && (
                <p className="text-sm text-center px-3 py-2 rounded-lg" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
                  {error}
                </p>
              )}

              <button type="submit" disabled={sending || sent}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: sent ? '#22c55e' : 'var(--accent)' }}>
                {sent ? '✓ Message sent!' : sending ? 'Sending…' : (<><Send className="h-4 w-4" /> Send Message</>)}
              </button>
            </form>

            {/* ── INFO CARDS ── */}
            <div className="space-y-4">
              {INFO.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="rounded-2xl border p-4 flex items-start gap-4 transition-all"
                  style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}55`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--muted)' }}>{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline" style={{ color: 'var(--text)' }}>{value}</a>
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
