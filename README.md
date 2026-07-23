# Sunshine Flower Bar Landing Page

Warm, single-page Next.js landing page for Just Because Flowers with:

- Brand-first sections (hero, about, market, email list, corporate, contact)
- Form handling and validation with `react-hook-form` + `zod`
- API routes for email signups and contact submissions
- MongoDB integration for all form submissions
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

- `MONGODB_URI` (required; MongoDB connection string pointing to a cluster, e.g., `mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority`)

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
  - Validates email and stores in MongoDB `emailSubscribers` collection.

- `POST /api/contact`
  - Body: `{ "name", "email", "inquiryType", "message" }`
  - Validates payload and stores submission in MongoDB `corporate_leads` collection.
