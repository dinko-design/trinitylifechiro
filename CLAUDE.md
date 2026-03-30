# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trinity Life Chiropractic website — a lead-generation site for a family chiropractic clinic in Allen, TX (Dallas-Fort Worth area). Built with Astro 5 + React 18 + TypeScript. Features a Keystatic CMS, contact form with Neon Postgres database, and Resend email notifications.

## Commands

- **Dev server:** `npm run dev` (runs on port 4321)
- **Production build:** `npm run build`
- No test or lint scripts are configured.

## Tech Stack

- **Framework:** Astro 5 with React integration, MDX, Sitemap
- **CMS:** Keystatic (`/keystatic` admin route, auto-injected by `@keystatic/astro`)
- **Database:** Neon Postgres via `@neondatabase/serverless` (leads table)
- **Email:** Resend (notification + confirmation emails on form submit)
- **Deployment:** Netlify with `@astrojs/netlify` adapter (v6)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), utility-first with inline classes
- **UI Components:** Radix UI primitives wrapped via shadcn/ui (in `src/app/components/ui/`)
- **Animations:** Motion library (scroll-triggered, page transitions, AnimatePresence)
- **Icons:** Lucide React
- **Booking integration:** Jane App (`trinitylifechiro.janeapp.com`)
- **Image optimization:** Astro `<Image>` component + sharp (auto WebP conversion)

## Architecture

### Path alias
`@` maps to `./src` (configured in astro.config.mjs and tsconfig).

### Source structure
- `src/layouts/BaseLayout.astro` — root HTML layout with Header/Footer, ad platform tag slots
- `src/pages/` — Astro page routes (file-based routing)
- `src/pages/api/contact.ts` — contact form API endpoint (server-rendered)
- `src/app/components/` — shared React components (Header, Hero, About, Services, Contact, ContactForm, etc.)
- `src/app/components/ui/` — shadcn/ui components (25+ Radix-based primitives)
- `src/app/pages/` — React page components (ServiceTemplate, LocationTemplate, BlogPost, etc.)
- `src/components/` — Astro components (Footer.astro, Breadcrumbs.astro, ResponsiveImage.astro)
- `src/content/` — Astro content collections (services, locations, blog)
- `src/lib/db.ts` — Neon database helper
- `src/lib/email.ts` — Resend email helpers
- `src/styles/` — global CSS: `index.css` (imports), `tailwind.css` (directives), `theme.css` (design tokens)
- `src/assets/` — logos (PNG)
- `src/assets/images/` — optimized content images (WebP, SEO-named, max 1920px)
- `public/assets/images/` — same WebP images for content collection string references
- `keystatic.config.ts` — Keystatic CMS configuration (project root)

### Routing
File-based routing via Astro `src/pages/`. Key patterns:
- `/` — home page (Hero, About, Services, Process, Testimonials, Contact+ContactForm)
- `/services` — services hub; `[slug].astro` — dynamic service detail pages from content collection
- `/chiropractor-{city}-tx` — 9 location pages via `[location].astro` from content collection
- `/blog` and `/blog/:slug` — blog listing and posts from MDX content collection
- `/team`, `/careers`, `/process`, `/locations` — static pages
- `/keystatic/*` — CMS admin (auto-injected, do NOT create manual route files)
- `/api/keystatic/*` — CMS API (auto-injected, do NOT create manual route files)
- `/api/contact` — contact form endpoint (POST, server-rendered)

### Content/Data
- `src/content/services/*.mdx` — service definitions (frontmatter + MDX body). MUST be `.mdx` not `.md`.
- `src/content/locations/*.yaml` — location-specific content for each city
- `src/content/blog/*.mdx` — blog posts
- `ServiceTemplate.tsx` — React fallback service definitions (inline data, mirrors content collections)
- `LocationTemplate.tsx` — React fallback location content (inline data, mirrors content collections)

### CMS (Keystatic)
- Config: `keystatic.config.ts` at project root
- Collections: blog, services, locations (maps to `src/content/` files)
- Currently in `local` mode (dev only). Needs GitHub mode or Keystatic Cloud for production.
- **Critical:** Vite `optimizeDeps.include: ['@keystatic/core/ui']` in astro.config.mjs is required. Without it, the admin page renders blank (CJS dependency bundling issue).
- **Critical:** Do NOT create route files in `src/pages/keystatic/` or `src/pages/api/keystatic/` — the `@keystatic/astro` integration injects these automatically. Manual files cause route conflicts.

### Contact Form & Lead Tracking
- `src/app/components/ContactForm.tsx` — React form with full ad campaign tracking
- `src/pages/api/contact.ts` — API endpoint: validates, saves to Neon, sends emails via Resend
- `src/lib/db.ts` — Neon serverless client
- `src/lib/email.ts` — notification email (to clinic + agency) and confirmation email (to submitter)
- Tracking captured: utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, msclkid, fbclid, referrer, page_url
- Tracking params persist in sessionStorage across page navigations
- On successful submit: fires `window.dataLayer.push` (GTM) and `fbq('track','Lead')` (Meta Pixel)

### Environment Variables
See `.env.example` for required variables:
- `NEON_DATABASE_URL` — Neon Postgres connection string
- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM_EMAIL` — verified sender address
- `RESEND_NOTIFICATION_EMAILS` — comma-separated notification recipients

### Images
- All content images are WebP format with SEO-friendly filenames (e.g., `pediatric-chiropractor-baby-care.webp`)
- In React components: import from `@/assets/images/` and use `resolveImg()` helper to extract `.src` from Astro ImageMetadata objects
- In content collection frontmatter: use string paths like `/assets/images/filename.webp` (served from `public/`)
- Logos stay as PNG in `src/assets/` (logo-horizontal.png, logo-horizontal-white.png)
- No Unsplash/stock images — all photography is authentic client photos

### Design tokens (theme.css)
- Primary purple: `#564972`
- Accent gold: `#a68d60`
- Dark mode supported via `.dark` class and OKLch color variables
- Border radius: `0.625rem`
