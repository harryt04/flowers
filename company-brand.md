# Sunshine Flower Bar — Brand Guide

This document is the single source of truth for brand, voice, and visual identity in this repo. Read it before making any design, copy, or UI decision. If a design choice isn't covered here, default to the vibe: **warm, sophisticated, earthy, genuine** — never corporate, never cold, never luxury-florist.

## Who we are

**Business name:** Sunshine Flower Bar (formerly "Just Because Flowers" — that name is retired; do not reintroduce it in new copy or assets).

**Tagline:** "just because" — short form, used in header/footer/badges.
**Full tagline (historic, still usable in longer copy):** "Spreading Sunshine, One Bouquet at a Time."
**Current hero line:** "Build a Bouquet. Share Kindness. Brighten Someone's Day."

**What it is:** A mobile, interactive flower-bar experience (not a traditional florist). Visitors build their own bouquet, pick a "kindness card," and take home a wrapped arrangement. It shows up at farmers markets, coffee-shop pop-ups, private parties, weddings, baby/bridal showers, corporate events, schools, and nonprofits.

**Founder:** Elisabeth. The brand is her — personal, warm, a little funny. Site copy should feel like meeting her, not reading a corporate About page.

**The origin story asset:** "Sunshine" — a yellow vintage truck that predates the business and gave it its name/spirit. Worth its own section ("Meet Sunshine") if built.

## The core insight

> We are not selling flowers. We are selling thoughtfulness, connection, beauty, and emotional convenience.

Every section, headline, and CTA should serve that insight. If copy is only describing product specs (stems, wrap, price) without an emotional frame, it's off-brand — reframe around the feeling ("5 stems to share kindness," not "5-stem bouquet, $12").

## Brand personality

**Is:**
- Warm, sunshine-y, cheerful, hopeful
- Genuine, personal, a little funny (Elisabeth's own voice — Easter eggs and playful one-liners are on-brand)
- Grounded and earthy (olive green, natural textures) with sophistication, not just cute/cottagecore
- Approachable — this is a joyful gifting experience, not a tiered luxury product

**Is not:**
- Corporate or clinical
- A luxury florist brand
- Overly modern, harsh, or minimalist-cold
- Decorative for decoration's sake (no gratuitous icons, gradients, blur blobs, illustrations)

**Emotional goals for every visitor:** warm, seen, appreciated, cheerful, hopeful, connected, encouraged.

## Voice & copy guidelines

- Speak like Elisabeth, not a brand deck. Short, warm, a little playful.
- Favor concrete sensory/emotional language over feature lists.
- Kindness-quote lines are a signature device — short, standalone, italic-friendly lines like:
  - "Flowers don't ask who deserves kindness. They just bloom."
  - "Life's too short to wait for a special occasion. Buy the flowers."
  - "Carry sunshine with you. You never know who needs it."
  - Use these as section closers, footer lines, or page transitions — vary them, don't reuse the same one everywhere.
- CTAs should be warm and specific, not generic: "Book a Flower Bar," "Find Upcoming Pop-Ups" — not "Learn More" / "Submit."
- Avoid words: "premium," "luxury," "corporate" (except literally naming the Corporate offering), "clinical," "solutions."

## Color palette

Colors are implemented as CSS variables in [`app/globals.css`](app/globals.css) and mirrored in [`tailwind.config.ts`](tailwind.config.ts). Always use the variables/theme tokens — never hardcode hex values in components.

| Role | Token | Hex | Notes |
|---|---|---|---|
| Primary / sunshine yellow | `--primary` / `sunshine-yellow` | `#F4BD22` | Buttons, key accents, warmth. The unifying brand color. |
| Background / cream | `--background` / `cream` | `#FFF9EA` | Page background, breathing room. Never pure white. |
| Accent / olive green | `--accent` | `#39442B` | Secondary accent, grounding, sophistication. Use for text details, borders, small accents — not as a dominant fill. |
| Foreground / warm charcoal | `--foreground` / `warm-charcoal` | `#3F3A2F` | Body text. Never pure black. |
| Warm white | `warm-white` | `#F5F5F0` | Secondary surface. |
| Warm gray | `warm-gray` / `--muted-foreground` | `#6B6354` | Muted text. |

**Do:**
- Treat yellow as the dominant, recognizable brand color (it's the "instantly recognizable from across the market" anchor color — same logic applies online).
- Use olive green as a grounding accent so the palette doesn't read as purely cute/pastel — it's what makes this feel sophisticated rather than juvenile.
- Keep backgrounds warm (cream), never stark white or gray.

**Don't:**
- Don't introduce cold colors (blues, grays-as-primary, corporate navy).
- Don't use color as decoration — it should carry meaning (primary = action, olive = grounding detail).
- Don't reintroduce the old pre-rebrand palette (`#F4D03F` yellow / `#FFFDD0` cream / `#A8C686` soft-green) — those were superseded by the values above.

## Dark mode

Dark mode should follow the device's `prefers-color-scheme` setting automatically. There is intentionally **no manual theme toggle** — don't add one unless a component library provides it for free. Dark backgrounds should stay warm (warm charcoal/near-black, not cool slate), and accent colors should be adjusted for contrast, not simply inverted.

## Typography

Defined in [`app/layout.tsx`](app/layout.tsx) via `next/font/google`. Do not add other display/body fonts — this pairing is deliberate and locked in.

| Role | Font | Usage |
|---|---|---|
| Display / headings | Playfair Display (serif) | Section headlines, "Hi, I'm Elisabeth" style moments — elegant, editorial weight |
| Body | Nunito (sans-serif) | Paragraph copy, UI text — friendly, warm, readable |
| Accent | Dancing Script (cursive) | Used sparingly — signature-style flourishes only, never body text |
| CTA / playful accent | Pacifico | Friendly, approachable emphasis — used sparingly, not for long copy |

## Visual language & layout

- **Photography + typography are the primary design elements.** No decorative illustrations, icons-for-decoration, gradients, or blur circles.
- **Generous whitespace.** Breathing room signals sophistication; don't cram sections.
- **Mobile-first**, single column at 375px scaling up. Touch targets ≥44×44px, body text ≥16px on mobile.
- **Asymmetric, personal layouts** are preferred over rigid centered grids, especially for anything about Elisabeth (staggered image grids over equal-size card grids — it should feel organic, not templated).
- **Rounded corners** on interactive elements (buttons, cards) — friendly, not sharp/corporate.
- **Borders/dividers**: subtle and natural, not heavy drop shadows or hard-edged shadows.
- **No decorative icon sets.** Where the old spec docs mention icons (flower emoji, step icons), prefer typography and numbers (e.g., "1, 2, 3, 4" for a how-it-works flow) over icon illustrations, unless real photography can be used instead.
- **Real photography over stock/staged shots.** Natural lighting, authentic unposed moments (someone laughing while wrapping flowers, a kid picking flowers, a bouquet being given away) — this sells the mission more than polished product shots. See [`docs/assets.md`](docs/assets.md) for the current asset inventory (Elisabeth photos, sunflower-field shoot, flower bar/truck/trailer imagery, seasonal menu graphics).

## Signature brand elements (use when relevant)

- **Kindness cards** — a physical card visitors pick when building a bouquet; central to the "experience" framing, worth surfacing in copy/photos.
- **"Build Your Own Bouquet"** — the interactive, hands-on nature of the flower bar is a differentiator; don't let copy describe this as a static product purchase.
- **Sunflower fields / sunflower motif** — recurring photographic motif (see Elisabeth's photoshoot assets); sunflowers symbolically tie to Joy, Loyalty, Encouragement.
- **The yellow truck ("Sunshine")** — origin story asset, a strong candidate for its own section if the site expands.
- **Seasonal rotation** — spring (tulips), summer (sunflowers), fall (dahlias), winter (evergreens/white roses) — the seasonal menu concept exists as an asset ([`public/images/seasonal/seasonal-menu.png`](public/images/seasonal/seasonal-menu.png)) and can inform a seasonal homepage concept if pursued later.
- **Flower meanings** — evergreen, SEO-friendly content angle (sunflower = joy/hope/loyalty, rose = love/gratitude, daisy = new beginnings, carnation = admiration, eucalyptus = healing). Keep these text-only, no icons.

## What to avoid

- Corporate, minimalist-cold, or luxury-florist framing.
- Purple gradients, generic AI-aesthetic layouts, predictable icon-card grids.
- Publishing personal contact info (e.g., a founder's personal phone number) — business email only (`sunshineflowerbar@gmail.com`), per prior contact-info policy decisions.
- Treating pricing/tiers as "luxury tiers" — always frame as joyful gifting options ("Mini Sunshine," "Signature Sunshine," "Deluxe Sunshine," etc.), with experience-focused language over spec lists.
