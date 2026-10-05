import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const { name, email, phone, subject, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
    }

    const smtpUser = process.env.SMTP_USER || 'pranalinikam1000@gmail.com';
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || smtpUser;

    if (!smtpPass) {
      return res.status(500).json({
        success: false,
        message: 'SMTP credentials not configured. Please add SMTP_PASS in Vercel Environment Variables.'
      });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465,
      secure: process.env.SMTP_SECURE === 'false' ? false : true, // 465 SSL default
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailSubject = subject ? `Portfolio Contact: ${subject}` : `New Portfolio Inquiry from ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b1924; color: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #139bfd;">
        <h2 style="color: #139bfd; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-top: 0;">New Contact Form Message</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #8da0b3; width: 120px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8da0b3;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #139bfd; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8da0b3;"><strong>Phone:</strong></td>
            <td style="padding: 8px 0; color: #ffffff;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8da0b3;"><strong>Subject:</strong></td>
            <td style="padding: 8px 0; color: #ffffff;">${subject || 'No Subject'}</td>
          </tr>
        </table>
        <div style="background-color: rgba(255,255,255,0.05); padding: 18px; border-radius: 8px; border-left: 4px solid #139bfd;">
          <strong style="color: #8da0b3; display: block; margin-bottom: 8px;">Message:</strong>
          <p style="color: #ffffff; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: toEmail,
      subject: mailSubject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'No Subject'}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('SMTP Mail Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email. Please try again later.'
    });
  }
}
