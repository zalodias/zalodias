import { escapeMarkup } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json(
      { error: 'Newsletter is not configured.' },
      { status: 500 },
    );
  }

  const { data: contacts, error: listError } = await resend.contacts.list({
    audienceId,
  });

  if (listError) {
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 },
    );
  }

  const existing = contacts?.data?.find(
    (c) => c.email.toLowerCase() === email.toLowerCase(),
  );

  if (existing && !existing.unsubscribed) {
    return NextResponse.json(
      { error: 'This email is already subscribed.' },
      { status: 409 },
    );
  }

  const { error } = await resend.contacts.create({
    email,
    audienceId,
    unsubscribed: false,
  });

  if (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 },
    );
  }

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_EMAIL!,
    subject: 'New subscriber',
    html: `<p><strong>${escapeMarkup(email)}</strong> has joined your newsletter.</p>`,
  });

  return NextResponse.json({ success: true });
}
