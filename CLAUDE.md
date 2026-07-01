# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
npm run dev                                 # start server (localhost:3000)
npm run build                               # production build + type-check
npm run lint                                # ESLint
npm run test                                # run all tests
npx vitest run tests/validation.test.ts     # single test file
npx tsc --noEmit                            # type-check only
```

## Project Overview

This is a Next.js 16 landing page for Just Because Flowers — a single-page site with smooth-scroll navigation to sections (hero, about, market, email signup, corporate, contact). Form submissions (email signup, contact) integrate with external services (Google Apps Script, MongoDB).

**Tech Stack**: Next.js 16 (App Router) + TypeScript 5 (strict mode) + Tailwind CSS v4 + shadcn/ui (base-nova) + MongoDB + Vitest

## Architecture & Patterns

### Form Validation Pattern

The source of truth for form schemas is `/app/lib/validation.ts` — Zod schemas (`subscribeSchema`, `contactSchema`) are shared between:
- API request validation (in route handlers)
- Client-side form validation (via `@hookform/resolvers`)

**Pattern**: When adding a new form, define the Zod schema in `validation.ts` first, then use it in both the API route and the react-hook-form resolver.

### API Routes

- `POST /api/subscribe` — forwards email to Google Apps Script webhook (or mocks success in dev if `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` is missing)
- `POST /api/contact` — validates and inserts contact submission into MongoDB `contacts` collection

Both routes validate the request body against schemas from `lib/validation.ts` before processing.

### Page Composition

`app/page.tsx` is the only page — it composes all section components. Navigation is smooth-scroll to section IDs (`#hero`, `#about`, etc.), not client-side routing. Keep page.tsx lightweight; logic lives in `components/Sections/`.

### Tailwind CSS v4 Setup

This project uses Tailwind v4 with `@tailwindcss/postcss` (not the legacy PostCSS plugin). Brand colors are defined in `tailwind.config.ts`, and CSS variable theming lives in `app/globals.css`.

### shadcn/ui Conventions

Components are installed via `npx shadcn add <component>` with `base-nova` style. Generated files in `components/ui/` should not be hand-edited unless necessary (edits will be overwritten on reinstall). Use shadcn for primitive UI (Button, Form, Input, Card, etc.); custom sections live in `components/Sections/`.

## Path Alias

`@/` maps to the repository root, not `src/`. Example: `import { subscribeSchema } from '@/app/lib/validation'`.

## Environment Setup

Create `.env.local` from `.env.local.example`. Required:
- `MONGODB_URI` — for `/api/contact` to persist data (includes database name)
- `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` — optional; the app mocks email signup success in dev without it

## Testing

Tests run in a Node environment (no jsdom). Use Vitest to validate schemas, API logic, and utilities.

## Common Editing Tasks

**Adding a form**: Create validation schema in `lib/validation.ts` → create form component in `components/` → create/update API route → integrate into section component.

**Styling changes**: Tailwind classes in components + CSS variables in `app/globals.css` for theme-wide updates.

**MongoDB queries**: Use the Node MongoDB driver (imported in API routes). Connection pooling is handled by the driver; pass the full connection string (with database name) as `MONGODB_URI`.
