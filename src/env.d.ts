/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NEON_DATABASE_URL: string;
  readonly RESEND_API_KEY: string;
  readonly RESEND_FROM_EMAIL: string;
  readonly RESEND_NOTIFICATION_EMAILS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
