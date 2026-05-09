import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactBody = {
  name?: string;
  email?: string;
  business?: string;
  message?: string;
  honeypot?: string;
};

const rateLimits = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, business, message, honeypot } = body;

  if (honeypot && honeypot.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (typeof message !== 'string' || message.trim().length < 10) {
    return NextResponse.json({ error: 'Message too short' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';
  const now = Date.now();
  const last = rateLimits.get(ip);
  if (last && now - last < RATE_LIMIT_MS) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  rateLimits.set(ip, now);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'noreply@gkiafis.gr',
      to: 'alex@gkiafis.gr',
      replyTo: email,
      subject: `New contact: ${name}${business ? ` (${business})` : ''}`,
      text: [
        `From: ${name} <${email}>`,
        business ? `Business: ${business}` : null,
        '',
        message
      ]
        .filter(Boolean)
        .join('\n')
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }
}
