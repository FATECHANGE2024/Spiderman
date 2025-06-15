import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { fullName, email, phone, course, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL, 
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Message: ${message}
      `,
    });

    console.log('Email sent to:', process.env.RESEND_TO_EMAIL);
    console.log('Form Data:', req.body);

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
