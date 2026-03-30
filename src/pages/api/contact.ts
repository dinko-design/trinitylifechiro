import type { APIRoute } from 'astro';
import { getDb } from '@/lib/db';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      name, email, phone, message, service,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      gclid, msclkid, fbclid,
      page_url, referrer,
    } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name and email are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const sql = getDb();
    await sql`
      INSERT INTO leads (name, email, phone, message, service,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        gclid, msclkid, fbclid, page_url, referrer)
      VALUES (${name}, ${email}, ${phone || null}, ${message || null}, ${service || null},
        ${utm_source || null}, ${utm_medium || null}, ${utm_campaign || null}, ${utm_content || null}, ${utm_term || null},
        ${gclid || null}, ${msclkid || null}, ${fbclid || null}, ${page_url || null}, ${referrer || null})
    `;

    await Promise.allSettled([
      sendNotificationEmail({ name, email, phone, message, service, utm_source, utm_campaign }),
      sendConfirmationEmail(email, name),
    ]);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
