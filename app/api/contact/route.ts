import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = 'kabondobenjamin1@gmail.com'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

async function sendViaResend(apiKey: string, f: Record<string, string>) {
  const resend = new Resend(apiKey)
  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: [TO_EMAIL],
    replyTo: f.email,
    subject: `Portfolio Inquiry — ${f.service || 'General'} from ${f.firstName} ${f.lastName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:12px;">
        <h2 style="color:#111;margin-top:0;">New Portfolio Inquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#666;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111;">${esc(f.firstName)} ${esc(f.lastName)}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${esc(f.email)}" style="color:#7c6af7;">${esc(f.email)}</a></td></tr>
          ${f.phone ? `<tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;color:#111;">${esc(f.phone)}</td></tr>` : ''}
          ${f.service ? `<tr><td style="padding:8px 0;color:#666;">Service</td><td style="padding:8px 0;color:#111;">${esc(f.service)}</td></tr>` : ''}
        </table>
        <div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;border-left:4px solid #7c6af7;">
          <p style="margin:0;color:#333;white-space:pre-wrap;">${esc(f.message)}</p>
        </div>
        <p style="margin-top:16px;font-size:12px;color:#999;">Reply to this email to respond directly to ${esc(f.firstName)}.</p>
      </div>
    `,
  })
}

// Keyless relay — delivers to the inbox after a one-time email activation at formsubmit.co
async function sendViaFormSubmit(f: Record<string, string>) {
  const res = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: 'https://bkabondo.vercel.app',
      Referer: 'https://bkabondo.vercel.app/contact',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    },
    body: JSON.stringify({
      name: `${f.firstName} ${f.lastName}`,
      email: f.email,
      phone: f.phone || '—',
      service: f.service || 'General',
      message: f.message,
      _subject: `Portfolio Inquiry — ${f.service || 'General'} from ${f.firstName} ${f.lastName}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: f.email,
    }),
  })
  const data = await res.json().catch(() => null)
  if (!res.ok || String(data?.success) === 'false') {
    throw new Error(data?.message || `FormSubmit ${res.status}`)
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const f = Object.fromEntries(
      ['firstName', 'lastName', 'email', 'phone', 'service', 'message'].map(k => [k, String(body[k] ?? '').trim()])
    ) as Record<string, string>

    if (!f.firstName || !f.email || !f.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      try {
        await sendViaResend(apiKey, f)
        return NextResponse.json({ ok: true })
      } catch { /* fall through to FormSubmit */ }
    }

    await sendViaFormSubmit(f)
    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
