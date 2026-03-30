import { Resend } from 'resend';

let resendInstance: Resend | null = null;

function getResend() {
  if (!resendInstance) {
    resendInstance = new Resend(import.meta.env.RESEND_API_KEY);
  }
  return resendInstance;
}

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service?: string;
  utm_source?: string;
  utm_campaign?: string;
}

export async function sendNotificationEmail(lead: LeadData) {
  const resend = getResend();
  const recipients = import.meta.env.RESEND_NOTIFICATION_EMAILS.split(',').map((e: string) => e.trim());

  await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL,
    to: recipients,
    subject: `New Lead: ${lead.name}${lead.service ? ` — ${lead.service}` : ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #564972; margin-bottom: 16px;">New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="border-bottom: 1px solid #e8e4dc;">
            <td style="padding: 10px; font-weight: bold; color: #564972; width: 140px;">Name</td>
            <td style="padding: 10px;">${lead.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e8e4dc;">
            <td style="padding: 10px; font-weight: bold; color: #564972;">Email</td>
            <td style="padding: 10px;"><a href="mailto:${lead.email}">${lead.email}</a></td>
          </tr>
          ${lead.phone ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Phone</td><td style="padding: 10px;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>` : ''}
          ${lead.service ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Service Interest</td><td style="padding: 10px;">${lead.service}</td></tr>` : ''}
          ${lead.message ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Message</td><td style="padding: 10px;">${lead.message}</td></tr>` : ''}
          ${lead.utm_source ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Campaign Source</td><td style="padding: 10px;">${lead.utm_source}${lead.utm_campaign ? ` / ${lead.utm_campaign}` : ''}</td></tr>` : ''}
        </table>
        <p style="margin-top: 20px; color: #888; font-size: 13px;">This lead was submitted via trinitylifechiro.com</p>
      </div>
    `,
  });
}

export async function sendConfirmationEmail(to: string, name: string) {
  const resend = getResend();

  await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL,
    to,
    subject: "We received your message — Trinity Life Chiropractic",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #564972;">Thank you, ${name}!</h2>
        <p style="color: #444; line-height: 1.6;">We have received your message and will get back to you within 1 business day.</p>
        <p style="color: #444; line-height: 1.6;">If your matter is urgent, please call us directly at <a href="tel:2145097744" style="color: #a68d60; font-weight: bold;">(214) 509-7744</a>.</p>
        <hr style="border: none; border-top: 1px solid #e8e4dc; margin: 24px 0;" />
        <p style="color: #a68d60; font-weight: bold; margin-bottom: 4px;">Trinity Life Chiropractic</p>
        <p style="color: #888; font-size: 14px; margin: 0;">301 N Allen Dr, Allen, TX 75013</p>
      </div>
    `,
  });
}
