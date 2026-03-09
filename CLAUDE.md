# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trinity Life Chiropractic website — a single-page application for a family chiropractic clinic in the Dallas-Fort Worth area. Built with Vite + React 18 + TypeScript.

## Commands

- **Dev server:** `npm run dev`
- **Production build:** `npm run build`
- No test or lint scripts are configured.

## Tech Stack

- **Build:** Vite 6 with `@vitejs/plugin-react`
- **Routing:** React Router v7
- **UI Components:** Radix UI primitives wrapped via shadcn/ui (in `src/app/components/ui/`)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`), utility-first with inline classes
- **Animations:** Motion library (scroll-triggered, page transitions, AnimatePresence)
- **Icons:** Lucide React
- **Booking integration:** Jane App (`trinitylifechiro.janeapp.com`)

## Architecture

### Path alias
`@` maps to `./src` (configured in vite.config.ts and tsconfig).

### Source structure
- `src/main.tsx` — entry point
- `src/app/App.tsx` — root component with RouterProvider
- `src/app/routes.tsx` — all route definitions and root layout (Header/Footer wrapper)
- `src/app/components/` — shared components (Header, Footer, Hero, About, Services, Process, Testimonials, Contact)
- `src/app/components/ui/` — shadcn/ui components (25+ Radix-based primitives)
- `src/app/pages/` — page components for each route
- `src/styles/` — global CSS: `index.css` (imports), `tailwind.css` (directives), `theme.css` (design tokens)
- `src/assets/` — image assets

### Routing
Routes are defined in `src/app/routes.tsx`. Key patterns:
- `/` — home page (composed from Hero, About, Services, Process, Testimonials, Contact sections)
- `/services` — services hub; `/:slug` — dynamic catch-all for individual service detail pages
- `/chiropractor-{city}-tx` — 9 hardcoded location routes (Dallas, Plano, Frisco, etc.)
- `/blog` and `/blog/:slug` — blog listing and posts
- `/team`, `/careers`, `/process` — static pages

### Content/Data
All content is hardcoded in components — no CMS or database. The two largest files contain inline data objects:
- `ServiceTemplate.tsx` (~38KB) — service definitions (10+ services with problems, solutions, benefits, FAQs, testimonials)
- `LocationTemplate.tsx` (~87KB) — location-specific content for each city

### Design tokens (theme.css)
- Primary purple: `#564972`
- Accent gold: `#a68d60`
- Dark mode supported via `.dark` class and OKLch color variables
- Border radius: `0.625rem`
