# Just Because Flowers Landing Page — SDD Stage 5 Orchestration

## Session Context

**Project:** Just Because Flowers — Next.js v16 App Router Landing Page  
**Working Directory:** `/Users/harry/Documents/git/flowers`  
**Stage:** 5 (Execution)  
**Date:** Fri May 29 2026

---

## Business Context

The founder is launching a flower shop business ("Just Because Flowers") focused on:
- **Immediate:** Farmers market flower stand (one day per week)
- **Future:** Corporate employee appreciation programs, mobile trailer, potential haircut + bouquet services

**Brand Positioning:**
- Tagline: "Spreading Sunshine, One Bouquet at a Time"
- Emotional goals: warm, seen, appreciated, cheerful, hopeful, connected, encouraged
- Color: Sunshine yellow (#F4D03F), cream, warm whites, soft textures
- Aesthetic: Cottagecore, farmers market nostalgia, vintage charm (NOT corporate, luxury, or minimalist)

---

## Technical Requirements

### Tech Stack
- Next.js 16 with App Router
- TypeScript
- shadcn/ui (using defaults, no custom reinvention)
- Tailwind CSS (with brand color theming)
- MongoDB (for contact form submissions)
- Google Sheets + Apps Script (for email list backend)

### Project Scope: Single Landing Page + APIs

```
app/
├── layout.tsx                 # Root layout (header, footer, metadata)
├── page.tsx                   # Landing page (all sections)
├── api/
│   ├── subscribe.ts           # Email list endpoint (Google Sheets)
│   └── contact.ts             # Contact form endpoint (MongoDB)
├── lib/
│   └── mongodb.ts             # MongoDB connection utility
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── EmailSubscribeForm.tsx
    ├── ContactForm.tsx
    └── Sections/ (HeroSection, AboutSection, etc.)
```

---

## Landing Page Sections (in order)

1. **Hero Section** — Banner/tagline, warm welcome, primary CTA
2. **Why Just Because Flowers** — Brand positioning, emotional messaging
3. **Find Us at the Market** — Schedule, location, what to expect
4. **Email Signup Section** — shadcn input + CTA to join mailing list
5. **Corporate Programs** — Brief pitch with contact CTA
6. **Contact Section** — shadcn contact form
7. **Header** — Logo, navigation
8. **Footer** — Copyright, links, social

---

## API Specifications

### `/api/subscribe` — Email List

**Request:**
```json
POST /api/subscribe
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "You've been added to our sunshine list!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

**Backend Flow:**
1. Validate email
2. Call Google Apps Script webhook (URL from `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` env var)
3. Google Apps Script appends to Google Sheet
4. Return success

---

### `/api/contact` — Contact Form

**Request:**
```json
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "inquiryType": "corporate" | "other",
  "message": "I'm interested in..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you! We'll get back to you soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Validation failed: [field] is required"
}
```

**Backend Flow:**
1. Validate all fields
2. Insert into MongoDB `contacts` collection
3. Return success

**MongoDB Schema:**
```javascript
{
  _id: ObjectId,
  name: string,
  email: string,
  inquiryType: "corporate" | "other",
  message: string,
  submittedAt: Date,
}
```

---

## Component Specifications

### shadcn Components to Use

- **Button** — All CTAs
- **Input** — Email input, contact form text fields
- **Textarea** — Contact message
- **Select** — Contact form inquiry type dropdown
- **Form** (with react-hook-form) — Form validation wrapper

### Custom Components

- **Header** — Logo, navigation (simple menu or smooth scroll to sections)
- **Footer** — Copyright, links, social icons
- **EmailSubscribeForm** — shadcn Input + Button, success/error feedback
- **ContactForm** — shadcn Form wrapper with validation
- **Section Components** — HeroSection, AboutSection, FarmersMarketSection, CorporateSection, ContactSection

---

## Environment Variables

```bash
# .env.local (provide these before execution)
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/d/[DEPLOYMENT_ID]/usercontent
MONGODB_URI=mongodb+srv://[user]:[password]@cluster.mongodb.net/just-because-flowers
```

---

## SEO & Metadata

### Root Metadata (`app/layout.tsx`)
- Title: "Just Because Flowers | Spreading Sunshine, One Bouquet at a Time"
- Description: "Fresh, thoughtful bouquets at local farmers markets. Bring joy and connection into everyday life."
- Open Graph: og-image.png, site name, URL
- Twitter card: summary_large_image

### Sitemap (`sitemap.ts`)
- Single entry for homepage
- Priority: 1
- Last modified: current date

### robots.txt
- Allow all crawlers
- Link to sitemap

---

## Brand Color Palette

Configure in `tailwind.config.ts`:

```typescript
colors: {
  'sunshine-yellow': '#F4D03F',
  'cream': '#FFFDD0',
  'warm-white': '#F5F5F0',
  'soft-green': '#A8C686',
  // ... extend with warm grays
}
```

Use these in shadcn component defaults (buttons, inputs, etc.) via Tailwind config.

---

## Work Units (Phase Breakdown)

### Work Unit 1: Project Setup & Dependencies
**Deliverables:**
- Next.js 16 project initialized with TypeScript
- shadcn/ui installed and configured
- Tailwind CSS configured with brand colors
- package.json with all dependencies

### Work Unit 2: MongoDB & API Infrastructure
**Deliverables:**
- MongoDB connection utility (`lib/mongodb.ts`)
- `/api/subscribe` endpoint (Google Sheets integration)
- `/api/contact` endpoint (MongoDB storage)
- Environment variables configured

### Work Unit 3: Layout & Shared Components
**Deliverables:**
- Root layout (`app/layout.tsx`) with metadata, header, footer
- Header component with logo/nav
- Footer component with links
- sitemap.ts, robots.txt

### Work Unit 4: Landing Page Sections
**Deliverables:**
- HeroSection component
- AboutSection component
- FarmersMarketSection component
- CorporateSection component
- EmailSubscribeForm component
- ContactSection component
- ContactForm component
- Main page (`app/page.tsx`) stitching all sections together

### Work Unit 5: Testing & Verification
**Deliverables:**
- Email subscription flow tested (form → API → Google Sheet)
- Contact form flow tested (form → API → MongoDB)
- Responsive design verified
- Metadata/SEO verified
- No build errors or console warnings

---

## Execution Notes

- **Do not over-engineer.** Use shadcn defaults for components.
- **Minimal custom CSS.** Stick to Tailwind utilities.
- **Placeholder content is acceptable for now.** Fiancée will iterate on copy/messaging later.
- **Focus on structure, not pixel-perfect design.** The foundation matters most.
- **Environment variables:** The executor will need to configure these before testing the APIs.

---

## Success Criteria

1. ✅ Next.js app builds without errors
2. ✅ All routes render without console errors
3. ✅ Email subscription form submits successfully (mock or real Google Sheets)
4. ✅ Contact form submits successfully to MongoDB
5. ✅ Landing page is responsive (mobile, tablet, desktop)
6. ✅ Metadata renders correctly (check with browser DevTools)
7. ✅ All shadcn components are properly themed with brand colors
8. ✅ No TypeScript errors
9. ✅ Page loads without performance warnings

---

## Known Constraints & Decisions

- **Single page route:** All content on `/`, no separate pages
- **No email notifications:** Contact form does not email the founder; submissions are stored in MongoDB
- **No custom CSS files:** All styling via Tailwind + shadcn defaults
- **Google Sheets webhook setup:** Manual (not automated by executor)
- **MongoDB schema:** Simple, flat structure for MVP

