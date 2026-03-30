import type { APIRoute } from 'astro';
import { getDb } from '@/lib/db';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';

export const prerender = false;

const ALLOWED_SERVICES = [
  'Pregnancy Chiropractic (Webster)',
  'Postpartum Recovery',
  'Pediatric Care (Infants)',
  'Kids & Teens',
  'Family Chiropractic',
  'Wellness Care',
  'Nervous System / INSiGHT Scans',
  'ADHD & Sensory Processing',
  'Colic & Reflux Relief',
  'Ear Infections & Immunity',
  'General Inquiry',
];

function truncate(val: unknown, max: number): string | null {
  if (typeof val !== 'string' || !val) return null;
  return val.slice(0, max);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // CSRF: check origin
    const origin = request.headers.get('origin') || '';
    const allowedOrigins = ['https://www.trinitylifechiro.com', 'https://trinitylifechiro.com', 'https://trinitylifechiro.netlify.app', 'http://localhost:4321', 'http://127.0.0.1:4321'];
    if (!allowedOrigins.some(o => origin.startsWith(o))) {
      return new Response(
        JSON.stringify({ success: false, error: 'Forbidden.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const body = await request.json();

    // Honeypot: if the hidden "website" field is filled, it's a bot
    if (body.website) {
      // Return success to fool the bot, but do nothing
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const name = truncate(body.name, 100);
    const email = truncate(body.email, 254);
    const phone = truncate(body.phone, 20);
    const message = truncate(body.message, 2000);
    const service = truncate(body.service, 100);

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

    // Validate service against allowlist
    if (service && !ALLOWED_SERVICES.includes(service)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid service selection.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // Truncate tracking params
    const utm_source = truncate(body.utm_source, 200);
    const utm_medium = truncate(body.utm_medium, 200);
    const utm_campaign = truncate(body.utm_campaign, 200);
    const utm_content = truncate(body.utm_content, 200);
    const utm_term = truncate(body.utm_term, 200);
    const gclid = truncate(body.gclid, 500);
    const msclkid = truncate(body.msclkid, 500);
    const fbclid = truncate(body.fbclid, 500);
    const page_url = truncate(body.page_url, 500);
    const referrer = truncate(body.referrer, 500);

    const sql = getDb();
    await sql`
      INSERT INTO leads (name, email, phone, message, service,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        gclid, msclkid, fbclid, page_url, referrer)
      VALUES (${name}, ${email}, ${phone}, ${message}, ${service},
        ${utm_source}, ${utm_medium}, ${utm_campaign}, ${utm_content}, ${utm_term},
        ${gclid}, ${msclkid}, ${fbclid}, ${page_url}, ${referrer})
    `;

    await Promise.allSettled([
      sendNotificationEmail({ name, email, phone: phone || undefined, message: message || undefined, service: service || undefined, utm_source: utm_source || undefined, utm_campaign: utm_campaign || undefined }),
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
