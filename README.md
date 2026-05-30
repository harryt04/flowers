# Just Because Flowers Landing Page

Warm, single-page Next.js landing page for Just Because Flowers with:

- Brand-first sections (hero, about, market, email list, corporate, contact)
- Form handling and validation with `react-hook-form` + `zod`
- API routes for email signups and contact submissions
- MongoDB integration for contact submissions
- shadcn/ui components themed to sunshine-inspired brand colors

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui
- MongoDB Node driver
- Vitest (schema validation tests)

## Environment Variables

Copy the example env file and update values:

```bash
cp .env.local.example .env.local
```

Required values:

- `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` (optional in dev; API mocks success if missing)
- `MONGODB_URI` (required for `/api/contact` writes)
- `MONGODB_DB_NAME` (optional, defaults to `just-because-flowers`)

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verification Commands

```bash
npm run lint
npm run test
npm run build
```

## API Endpoints

- `POST /api/subscribe`
  - Body: `{ "email": "you@example.com" }`
  - Validates email and forwards to Apps Script webhook if configured.

- `POST /api/contact`
  - Body: `{ "name", "email", "inquiryType", "message" }`
  - Validates payload and stores submission in MongoDB `contacts` collection.
