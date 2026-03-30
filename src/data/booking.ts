export const JANE_APP_URL = 'https://trinitylifechiro.janeapp.com';

export function getBookingUrl(source: string = 'website', campaign: string = 'booking') {
  return `${JANE_APP_URL}?utm_source=${source}&utm_medium=cta&utm_campaign=${campaign}`;
}
