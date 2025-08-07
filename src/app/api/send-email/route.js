// app/api/send-email/route.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Your Name <your@domain.com>',
      to: [email],
      subject: subject,
      html: `<p>${message}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
