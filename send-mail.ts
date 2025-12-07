'use server';

import nodemailer from 'nodemailer';

// Gmail SMTP env variables
const SMTP_HOST = process.env.SMTP_HOST; // smtp.gmail.com
const SMTP_USER = process.env.SMTP_USER; // your@gmail.com
const SMTP_PASS = process.env.SMTP_PASS; // your 16-char App Password
const FROM_EMAIL = process.env.FROM_EMAIL; // usually same as SMTP_USER
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER; // where form submissions go

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 587,
  secure: false, // Gmail uses TLS on port 587 (NOT SSL)
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error("SMTP Verify Failed:", { SMTP_USER, SMTP_PASS, error });
    return;
  }

  const info = await transporter.sendMail({
    from: FROM_EMAIL, // Gmail requires "from" to match the authenticated account
    replyTo: email,   // Use the user's email as reply-to instead
    to: sendTo || SITE_MAIL_RECEIVER,
    subject,
    text,
    html: html || "",
  });

  console.log("Message Sent", info.messageId);
  return info;
}
