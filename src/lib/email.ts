import { Resend } from 'resend';

let resendInstance: Resend | null = null;

function getResend() {
  if (!resendInstance) {
    resendInstance = new Resend(import.meta.env.RESEND_API_KEY);
  }
  return resendInstance;
}

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\r?\n/g, ' ');
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

  const name = esc(lead.name);
  const email = esc(lead.email);
  const phone = lead.phone ? esc(lead.phone) : '';
  const service = lead.service ? esc(lead.service) : '';
  const message = lead.message ? esc(lead.message) : '';
  const source = lead.utm_source ? esc(lead.utm_source) : '';
  const campaign = lead.utm_campaign ? esc(lead.utm_campaign) : '';

  await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL,
    to: recipients,
    subject: `New Lead: ${name}${service ? ` — ${service}` : ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #564972; margin-bottom: 16px;">New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="border-bottom: 1px solid #e8e4dc;">
            <td style="padding: 10px; font-weight: bold; color: #564972; width: 140px;">Name</td>
            <td style="padding: 10px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e8e4dc;">
            <td style="padding: 10px; font-weight: bold; color: #564972;">Email</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Phone</td><td style="padding: 10px;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
          ${service ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Service Interest</td><td style="padding: 10px;">${service}</td></tr>` : ''}
          ${message ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Message</td><td style="padding: 10px;">${message}</td></tr>` : ''}
          ${source ? `<tr style="border-bottom: 1px solid #e8e4dc;"><td style="padding: 10px; font-weight: bold; color: #564972;">Campaign Source</td><td style="padding: 10px;">${source}${campaign ? ` / ${campaign}` : ''}</td></tr>` : ''}
        </table>
        <p style="margin-top: 20px; color: #888; font-size: 13px;">This lead was submitted via trinitylifechiro.com</p>
      </div>
    `,
  });
}

export async function sendConfirmationEmail(to: string, name: string) {
  const resend = getResend();
  const safeName = esc(name);

  await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL,
    to,
    subject: "We received your message — Trinity Life Chiropractic",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #564972;">Thank you, ${safeName}!</h2>
        <p style="color: #444; line-height: 1.6;">We have received your message and will get back to you within 1 business day.</p>
        <p style="color: #444; line-height: 1.6;">If your matter is urgent, please call us directly at <a href="tel:2145097744" style="color: #a68d60; font-weight: bold;">(214) 509-7744</a>.</p>
        <hr style="border: none; border-top: 1px solid #e8e4dc; margin: 24px 0;" />
        <p style="color: #a68d60; font-weight: bold; margin-bottom: 4px;">Trinity Life Chiropractic</p>
        <p style="color: #888; font-size: 14px; margin: 0;">301 N Allen Dr, Allen, TX 75013</p>
      </div>
    `,
  });
}
