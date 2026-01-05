import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => ({}))
  const name = typeof payload?.name === 'string' ? payload.name.trim() : ''
  const email = typeof payload?.email === 'string' ? payload.email.trim() : ''
  const message = typeof payload?.message === 'string' ? payload.message.trim() : ''

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, message: 'Missing fields' }, { status: 400 })
  }

  // TODO: integrate email provider (e.g. Resend) using CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL
  return NextResponse.json({ ok: true })
}
