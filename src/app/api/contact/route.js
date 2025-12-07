import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
 
export async function POST(request) {
 
  const body = await request.json();
  const { name, email, message } = body;
 
  // Check that all required parameters are parsed
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }
 
  try {
    // Initializing the SMTP connection
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
 
   // Define email content
   const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: 'recipient@example.com', // Enter recipient email this will be the clients home email
    subject: `New message from ${name}`,
    html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
 }
 
    // Function to send the email
    await transporter.sendMail(mailOptions);
 
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}