import { neon } from '@neondatabase/serverless';

export function getDb() {
  return neon(import.meta.env.NEON_DATABASE_URL);
}
