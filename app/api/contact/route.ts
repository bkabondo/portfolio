import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'Email service not configured' }, { status: 503 })
    const resend = new Resend(apiKey)
    const body = await req.json()
    const { firstName, lastName, email, phone, service, message } = Object.fromEntries(
      ['firstName', 'lastName', 'email', 'phone', 'service', 'message'].map(k => [k, esc(String(body[k] ?? ''))])
    )

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kabondobenjamin1@gmail.com'],
      replyTo: email,
      subject: `Portfolio Inquiry — ${service || 'General'} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:12px;">
          <h2 style="color:#111;margin-top:0;">New Portfolio Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#7c6af7;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#666;">Phone</td><td style="padding:8px 0;color:#111;">${phone}</td></tr>` : ''}
            ${service ? `<tr><td style="padding:8px 0;color:#666;">Service</td><td style="padding:8px 0;color:#111;">${service}</td></tr>` : ''}
          </table>
          <div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;border-left:4px solid #7c6af7;">
            <p style="margin:0;color:#333;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:16px;font-size:12px;color:#999;">Reply to this email to respond directly to ${firstName}.</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
