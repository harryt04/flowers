# AGENTS.md

## Stack

Next.js 16 (App Router), TypeScript 5 (strict), Tailwind CSS v4, shadcn/ui (`base-nova` style), MongoDB, Vitest.

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

Copy `.env.local.example` → `.env.local`.

## Architecture

Single-page app — all content is on `/`. Navigation uses smooth-scroll to section IDs, not page routing.

```
app/
  page.tsx          # composes all section components
  api/
    contact/        # POST → MongoDB insert into corporate_leads
    subscribe/      # POST → MongoDB insert into emailSubscribers
components/
  Sections/         # HeroSection, AboutSection, FarmersMarketSection, EmailSection, CorporateSection, ContactSection
  ui/               # shadcn primitives (do not hand-edit; use `npx shadcn add`)
lib/
  validation.ts     # Zod schemas (subscribeSchema, contactSchema) — source of truth for both API and forms
tests/              # Vitest unit tests (node env, no jsdom)
.agents/specs/      # SDD orchestration spec for this project
```

## Key Conventions

- **`@` alias maps to repo root**, not `src/`. `@/lib/validation` → `./lib/validation.ts`.
- **Tailwind v4** uses `@tailwindcss/postcss` (not legacy PostCSS plugin). Brand colors are in `tailwind.config.ts`; CSS variable theming is in `app/globals.css`.
- **shadcn components** are scaffolded via `npx shadcn add <component>` — style is `base-nova`. Do not hand-edit generated files in `components/ui/` unless necessary.
- **No typecheck script** — use `npx tsc --noEmit` or rely on `next build`.
- **Zod schemas in `lib/validation.ts`** are shared between API routes and react-hook-form resolvers — keep them as the single source of truth.
