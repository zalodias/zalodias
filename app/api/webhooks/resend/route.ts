import NewsletterConfirmation from '@/emails/newsletter-confirmation';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();

    const event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get('svix-id') ?? '',
        timestamp: request.headers.get('svix-timestamp') ?? '',
        signature: request.headers.get('svix-signature') ?? '',
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET!,
    });

    if (event.type === 'contact.created') {
      const { email } = event.data;

      const [{ error: notificationError }, { error: confirmationError }] =
        await Promise.all([
          resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: process.env.RESEND_TO_EMAIL!,
            subject: `New subscriber: ${email}`,
            text: `${email} just subscribed to your newsletter!`,
          }),
          resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: email,
            subject: "You're subscribed — thanks for joining!",
            react: NewsletterConfirmation(),
          }),
        ]);

      if (notificationError) {
        console.error('Failed to send notification email:', notificationError);
      }

      if (confirmationError) {
        console.error('Failed to send confirmation email:', confirmationError);
      }

      if (notificationError || confirmationError) {
        return new NextResponse('Failed to send emails', { status: 500 });
      }
    }

    return new NextResponse('OK', { status: 200 });
  } catch {
    return new NextResponse('Invalid webhook', { status: 400 });
  }
}
