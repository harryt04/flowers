# AGENTS.md

After making any substantial changes, run `npm run ci` to lint and validate your changes. 

## Brand

Read [`company-brand.md`](company-brand.md) before making any design, copy, or color decision — it covers voice, palette, typography, and aesthetic dos/don'ts for Sunshine Flower Bar.

## Stack

Next.js 16 (App Router), TypeScript 5 (strict), Tailwind CSS v4, shadcn/ui (`base-nova` style), MongoDB, Resend (contact-form email notifications), @vercel/analytics, @vercel/speed-insights, Vitest.

## Commands

```bash
npm run dev       # dev server at localhost:3000
npm run build     # production build (also runs TS type-check)
npm run lint      # ESLint
npm run test      # Vitest (all tests)

npx vitest run tests/validation.test.ts   # single test file
npx vitest                                 # watch mode
npx tsc --noEmit                           # type-check without building
```

No Makefile, no CI, no task runner.

## Environment Variables

- `MONGODB_URI` — required; MongoDB connection string pointing to a cluster (e.g., `mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority`)
- `RESEND_API_KEY` — required for contact-form email notifications; API key from [resend.com](https://resend.com). If unset, `lib/email.ts` logs a warning and skips sending (the booking is still saved to MongoDB).
- `CONTACT_NOTIFICATION_EMAIL` — required alongside `RESEND_API_KEY`; the inbox that receives new booking-request notifications.
- `RESEND_FROM_EMAIL` — optional; the verified "from" address (e.g., `Sunshine Flower Bar <bookings@yourdomain.com>`). Defaults to Resend's shared `onboarding@resend.dev` sender, which can only deliver to the email address on the Resend account until a sending domain is verified.

Copy `.env.local.example` → `.env.local`.

## Hosting

Deployed on Vercel; the GitHub repo (`harryt04/flowers`) is connected to a Vercel project. `MONGODB_URI` must be set in the Vercel project's Environment Variables for all environments (Production/Preview/Development). `@vercel/analytics`'s `<Analytics />` component and `@vercel/speed-insights`'s `<SpeedInsights />` component both live in `app/layout.tsx` and require no env vars — they auto-detect the Vercel deployment and only send real data when actually served from Vercel.

## Architecture

Single-page app — all content is on `/`. Navigation uses smooth-scroll to section IDs, not page routing.

```
app/
  page.tsx          # composes all section components
  api/
    contact/        # POST → MongoDB insert into bookingRequests, then Resend notification email
    subscribe/      # POST → MongoDB insert into emailSubscribers
components/
  Sections/         # HeroSection, OurStorySection, EventTypesSection, MeetSunshineSection, SeasonalMenuSection, CorporateSection, ContactSection, SunshineClubSection
  ui/               # shadcn primitives (do not hand-edit; use `npx shadcn add`)
lib/
  validation.ts     # Zod schemas (subscribeSchema, contactSchema) — source of truth for both API and forms
  email.ts          # Resend client + sendBookingNotification(), used by app/api/contact/route.ts
tests/              # Vitest unit tests (node env, no jsdom)
.agents/specs/      # SDD orchestration spec for this project
```

## Key Conventions

- **`@` alias maps to repo root**, not `src/`. `@/lib/validation` → `./lib/validation.ts`.
- **Tailwind v4** uses `@tailwindcss/postcss` (not legacy PostCSS plugin). Brand colors are defined entirely as CSS variables in `app/globals.css` (`@theme inline` + `:root` + `@media (prefers-color-scheme: dark)`); there is no separate Tailwind color config file. Always use the semantic classes (`bg-primary`, `text-foreground`, `bg-secondary`, `text-muted-foreground`, `bg-card`, `bg-accent`, etc.) — never add custom color names to a Tailwind config, and never hardcode hex values in components.
- **shadcn components** are scaffolded via `npx shadcn add <component>` — style is `base-nova`. Do not hand-edit generated files in `components/ui/` unless necessary.
- **No typecheck script** — use `npx tsc --noEmit` or rely on `next build`.
- **Zod schemas in `lib/validation.ts`** are shared between API routes and react-hook-form resolvers — keep them as the single source of truth.
