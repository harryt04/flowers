# AGENTS.md

After making any substantial changes, run `pnpm run ci` to lint and validate your changes.

## Orchestration

When acting as the primary/orchestrator agent: **do not implement large multi-file work inline**. Plan, then delegate bounded implementation chunks to sub-agents (`code-implementor`, `explore`, reviewers, etc.). Verify results, integrate, and run CI. Protect the orchestrator context window.

## Brand

Read [`company-brand.md`](company-brand.md) before making any design, copy, or color decision — it covers voice, palette, typography, and aesthetic dos/don'ts for Sunshine Flower Bar.

## Stack

Next.js 16 (App Router), TypeScript 5 (strict), Tailwind CSS v4, UI SDK with local Tailwind wrappers, MongoDB, Resend (contact-form email notifications), @vercel/analytics, @vercel/speed-insights, Vitest.

## Commands

```bash
pnpm run dev       # dev server at localhost:3000
pnpm run build     # production build (also runs TS type-check)
pnpm run lint      # ESLint
pnpm run test      # Vitest (all tests)

pnpm exec vitest run tests/validation.test.ts   # single test file
pnpm exec vitest                                 # watch mode
pnpm exec tsc --noEmit                           # type-check without building
```

No Makefile, no task runner.

PR CI runs `pnpm run ci`.

## Environment Variables

- `MONGODB_URI` — required; MongoDB connection string pointing to a cluster (e.g., `mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority`)
- `RESEND_API_KEY` — required for contact-form email notifications; API key from [resend.com](https://resend.com). If unset, `lib/email.ts` logs a warning and skips sending (the booking is still saved to MongoDB).
- `CONTACT_NOTIFICATION_EMAIL` — required alongside `RESEND_API_KEY`; the inbox that receives new booking-request notifications.
- `RESEND_FROM_EMAIL` — optional; the verified "from" address (e.g., `Sunshine Flower Bar <bookings@yourdomain.com>`). Defaults to Resend's shared `onboarding@resend.dev` sender, which can only deliver to the email address on the Resend account until a sending domain is verified.
- `DISCORD_CONTACT_WEBHOOK_URL` — server-only (never NEXT_PUBLIC); Discord webhook for contact-form booking notifications. If unset, `lib/discord.ts` logs warning and skips (booking saved to MongoDB).

Copy `.env.local.example` → `.env.local`.

## Hosting

Deployed on Vercel; the GitHub repo (`harryt04/flowers`) is connected to a Vercel project. `MONGODB_URI` must be set in the Vercel project's Environment Variables for all environments (Production/Preview/Development). `@vercel/analytics`'s `<Analytics />` component and `@vercel/speed-insights`'s `<SpeedInsights />` component both live in `app/layout.tsx` and require no env vars — they auto-detect the Vercel deployment and only send real data when actually served from Vercel.

## Architecture

Single-page app — all content is on `/`. Navigation uses smooth-scroll to section IDs, not page routing.

```
app/
  page.tsx          # composes all section components
  api/
    contact/        # POST → MongoDB insert into bookingRequests, then Resend + Discord webhook notifications
    subscribe/      # POST → MongoDB insert into emailSubscribers
components/
  Sections/         # HeroSection, OurStorySection, EventTypesSection, MeetSunshineSection, SeasonalMenuSection, CorporateSection, ContactSection, SunshineClubSection
  ui/               # hand-maintained, styled UI SDK wrappers
lib/
  validation.ts     # Zod schemas (subscribeSchema, contactSchema) — source of truth for both API and forms
  email.ts          # Resend client + sendBookingNotification()
  discord.ts        # server-side Discord webhook for booking notifications
tests/              # Vitest unit tests (node env, no jsdom)
.agents/specs/      # SDD orchestration spec for this project
```

Note: contact form now links to `/terms` and `/privacy` routes (to be added if not present).

## Key Conventions

- **`@` alias maps to repo root**, not `src/`. `@/lib/validation` → `./lib/validation.ts`.
- **Tailwind v4** uses `@tailwindcss/postcss` (not legacy PostCSS plugin). Brand colors are defined entirely as CSS variables in `app/globals.css` (`@theme inline` + `:root` + `@media (prefers-color-scheme: dark)`); there is no separate Tailwind color config file. Always use the semantic classes (`bg-primary`, `text-foreground`, `bg-secondary`, `text-muted-foreground`, `bg-card`, `bg-accent`, etc.) — never add custom color names to a Tailwind config, and never hardcode hex values in components.
- **No typecheck script** — use `pnpm exec tsc --noEmit` or rely on `next build`.
- **Zod schemas in `lib/validation.ts`** are shared between API routes and react-hook-form resolvers — keep them as the single source of truth.

## UI SDK

UI SDK supplies unstyled, accessible React controls and exposes their state and supported actions to agents. Both packages are beta and exact-pinned to the same version. The API postdates model training data. Read `node_modules/@ui-sdk/react/docs/llms.txt` and `node_modules/@ui-sdk/core/skills/ui-sdk/SKILL.md` before touching components, then check the installed component documentation.

App code imports from `components/ui`. Add components by hand-wrapping parts from per-component entries such as `@ui-sdk/react/select`. Never run `shadcn add` or regenerate the wrappers, which would restore Radix or Base UI. Keep the existing semantic Tailwind classes, declare the UI SDK layer before Tailwind and omit the optional global theme. UI SDK owns its slot names. Use a separate app marker for custom selectors. Give options and tab/panel pairs stable values, portal form popups to the body, and verify keyboard dismissal and focus return.

Wire controlled text fields through `onValueChange` so React Hook Form receives both human and agent edits. The form helper keeps React Hook Form and Radix Slot for composing refs, IDs and ARIA props onto its child. Select uses native overflow scrolling and offers optional local scroll buttons.

The root layout mounts `components/AgentBridge.tsx`. WebMCP exposes snapshot and query for reads. `lib/agent-policy.ts` allows specific navigation and ordinary field edits by component, accessible label and action. Decide the policy for every new interactive control and update the tests. Mark credentials and personal data with `data-agent-secret`. Keep submissions, consent, payments, orders, deletes, authentication, account/settings changes and irreversible actions denied. A `data-agent-confirm` mark always denies the step in this app.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
