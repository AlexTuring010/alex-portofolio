# Build Brief — gkiafis.gr Portfolio

> **For Claude Code.** This is the complete build spec for Alexandros Gkiafis' freelance portfolio site. Read this fully, examine the visual reference HTML file (`design.html`), then begin implementation.

---

## 0. Critical Reading Order

Before writing any code:

1. **Read this entire brief**
2. **Open the reference HTML** (`design.html`) in a browser. This is the **exact visual target** — colors, layout, typography, animations, spacing. Do not deviate from it without owner approval.
3. **Read the file's source** to understand exact CSS values, fonts, animations, and structure.

The reference HTML is single-file static. Your job is to translate it into a production-grade Next.js application that looks identical and adds: working contact form, bilingual support (EL/EN), SEO, and proper deployment configuration.

---

## 1. Owner & Goal

**Owner:** Αλέξανδρος Γκιάφης — final-year CS student at NKUA (ΕΚΠΑ), starting freelance practice making custom websites and small custom systems for Greek small businesses.

**Site purpose:** When a small business owner receives the owner's cold-email and clicks the link, this site must — within 10 seconds — make them think:
1. "This is a real person, not a sales bot"
2. "He builds genuinely custom work, not WordPress templates"
3. "I can reach him easily"
4. "His past work looks legitimate"

**Primary audience:** Greek small business owners aged 35-70 (taverna owners, framers, dentists, mechanics, seamstresses, hoteliers). Tech-comfortable but not tech-fluent. **Mobile-first** — most will view on phones.

**Secondary audience:** English-speaking expat business owners in Greece, plus tech recruiters who Google him for internship applications. The English toggle serves both.

---

## 2. Tech Stack

### Core
- **Next.js 15** with App Router
- **TypeScript** (strict mode)
- **Tailwind CSS** v4
- **Framer Motion** for hover and scroll animations (subtle only)
- **next-intl** for bilingual routing (EL default, EN at `/en`)
- **Resend** for contact form email delivery
- **Vercel** for hosting

### NOT to use
- ❌ shadcn/ui — too generic for this aesthetic
- ❌ Component libraries that impose visual style (Material, Chakra, etc.)
- ❌ CSS-in-JS solutions like styled-components — Tailwind only
- ❌ Animation libraries beyond Framer Motion
- ❌ Image carousels, lightboxes, modals (none are needed)
- ❌ Cookie banners (no analytics in v1, so no GDPR cookies needed)

---

## 3. Repo Structure

```
gkiafis-portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx           # Locale-aware root layout
│   │   ├── page.tsx             # Single-page portfolio
│   │   └── not-found.tsx
│   ├── api/
│   │   └── contact/route.ts     # POST handler — Resend send
│   ├── globals.css              # Tailwind + custom CSS variables
│   └── favicon.ico
├── components/
│   ├── sections/
│   │   ├── Nav.tsx              # Top nav with language toggle + avatar
│   │   ├── Hero.tsx             # Headline, sub, CTAs, photo, floating decorations
│   │   ├── HowIWork.tsx         # 3 sticky-note cards
│   │   ├── Work.tsx             # Project grid
│   │   ├── Services.tsx         # 3 service cards on darker background
│   │   ├── Contact.tsx          # Final dark section with CTA buttons
│   │   └── Footer.tsx
│   ├── ProjectCard.tsx          # Single polaroid-style card
│   ├── LanguageToggle.tsx       # ΕΛ/EN pill toggle
│   └── FloatingDecor.tsx        # The animated heart and star in hero
├── lib/
│   ├── projects.ts              # Typed project data
│   └── utils.ts
├── messages/
│   ├── el.json                  # Greek copy
│   └── en.json                  # English copy
├── i18n.ts                      # next-intl config
├── middleware.ts                # next-intl locale routing
├── public/
│   ├── photos/
│   │   └── alex.jpg             # Owner's portrait (he provides)
│   ├── projects/                # Project screenshots (placeholders for v1)
│   └── og-image.png             # 1200x630 social share image
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── README.md
├── DEVELOPMENT_LOG.md           # Required — see Section 10
└── HEALTH_CHECK.md              # Required — see Section 10
```

---

## 4. Visual Design — Match the HTML Reference Exactly

The reference HTML file `design_2_with_features.html` defines the visual target. Reproduce it precisely.

### Color tokens (already in reference; copy verbatim)

```css
--cream: #FDF6E8;          /* primary background */
--cream-dark: #F4EAD3;     /* alternating section background */
--ink: #2A1810;            /* primary text, dark sections */
--ink-soft: #6B4F3F;       /* secondary text */
--terracotta: #D67449;     /* primary accent — CTAs, shadows, highlights */
--terracotta-dark: #B85A30;/* hover variant */
--sage: #87A878;           /* secondary accent — sticky #3, dark services icon */
--mustard: #E8B547;        /* tertiary accent — sticky #1, hero highlight, photo tag */
--highlight: #FFE5B4;      /* soft yellow for inline text highlights */
```

Set these as CSS custom properties in `globals.css` and as Tailwind theme extensions in `tailwind.config.ts`.

### Typography (Google Fonts via next/font)

```typescript
// app/[locale]/layout.tsx
import { Caveat, Fraunces, DM_Sans } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin', 'greek'],
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin', 'greek'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const dmSans = DM_Sans({
  subsets: ['latin', 'greek'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
})
```

Usage hierarchy (matching reference):
- **Caveat** (handwritten): logo, section tags, hero italic emphasis, photo tag, signature lines, small accent text
- **Fraunces** (serif): all headings (h1, h2, h3, project titles, sticky note titles, service titles)
- **DM Sans** (sans): body text, paragraphs, buttons, nav links, project descriptions

### Background grain texture

The reference uses a subtle dot-pattern grain via CSS. Reproduce it:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image:
    radial-gradient(circle at 25% 25%, var(--ink) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, var(--ink) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
}
```

### Animations

All animations from the reference must work:
1. **Floating heart and star** in hero — CSS keyframe `float` (3s and 3.5s loops, 12px Y movement, 8deg rotation)
2. **Sticky notes** rotated -1.5deg / +1deg / -0.5deg, hover straightens to 0deg with -4px Y
3. **Project cards** translateY(-8px) on hover
4. **Buttons** translate(-2px, -2px) with shadow growth on hover
5. **Logo wordmark** has a permanent slight rotation (-2deg)
6. **Photo** rotates -3deg + scale 1.02 on hover
7. **Service cards** translate(-2px, -2px) on hover with shadow

For scroll-reveal of sections, use Framer Motion `whileInView` with these defaults:
```typescript
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
```

Wrap motion components with `LazyMotion` and `domAnimation` to keep bundle small.

**Respect `prefers-reduced-motion`:** if user has it set, disable all transforms/animations, keep only opacity transitions at 0.2s.

---

## 5. Sections — Build Order

Build in this exact order. After each section, run `npm run dev` and verify the visual match before continuing.

### Section 1: Nav (`components/sections/Nav.tsx`)

- Sticky to top, but not fixed in v1 (let it scroll away naturally)
- Left side: small avatar (40px circle, terracotta drop shadow, ink border) + "Αλέξανδρος" wordmark in Caveat 32px, rotated -2deg, with mustard underline pseudo-element
- Right side: nav links + LanguageToggle component
- Mobile (<880px): wrap into two rows, smaller avatar (32px), smaller logo (26px)

### Section 2: Hero (`components/sections/Hero.tsx`)

- 60/40 grid (text/photo) on desktop, stacked on mobile (photo on top)
- Floating decorations (heart top-center area, star lower-left area) — `<FloatingDecor />` component
- H1 with "websites" wrapped in `<span class="highlight">` (yellow rotated background) and italic Caveat phrase via `<em>`
- Subheadline in DM Sans 21px, ink-soft color
- Two CTAs: primary (dark pill with terracotta shadow), secondary (text link with terracotta underline)
- Photo: 320px circle, ink border 4px, terracotta shadow 8px, hover rotate+scale
- Photo tag: mustard pill with Caveat "— Αλέξανδρος", positioned bottom-right of photo

### Section 3: How I Work (`components/sections/HowIWork.tsx`)

- Section tag (Caveat, terracotta on cream-dark pill, rotated -1deg)
- H2 heading
- Three sticky notes in 3-column grid:
  - **Sticky 1** mustard background, rotated -1.5deg, "01 — Ξεκινάμε με συζήτηση"
  - **Sticky 2** terracotta background (cream text), rotated +1deg, "02 — Mockups πριν τη συμφωνία"
  - **Sticky 3** sage background (cream text), rotated -0.5deg, "03 — Custom code, όχι templates"
- Each sticky has: large Caveat number (56px, opacity 0.5), Fraunces title, DM Sans paragraph
- Hover: rotate to 0deg, translateY(-4px)

### Section 4: Work (`components/sections/Work.tsx`)

**Critical:** The project data lives in `lib/projects.ts`. Build the section to render from this typed array, NOT hardcoded JSX. This is essential for easy future additions.

```typescript
// lib/projects.ts
export type ProjectCategory = 'websites' | 'ecommerce' | 'systems' | 'concepts';
export type ProjectStatus = 'live' | 'concept' | 'demo';

export type Project = {
  slug: string;                    // URL-safe identifier
  title: { el: string; en: string };
  client: { el: string; en: string };
  meta: { el: string; en: string };// "~ Παγκράτι, 2026"
  description: { el: string; en: string };
  category: ProjectCategory;
  status: ProjectStatus;
  tagLabel: string;                // "Live" / "Concept" / "Demo" (shown on card)
  gradient: string;                // CSS gradient for placeholder bg
  image?: string;                  // Path to /public/projects/...png when ready
  liveUrl?: string;                // Optional external link
};

export const projects: Project[] = [
  // Start with the 8 projects shown in the reference HTML.
  // Owner will refine titles/descriptions later in his own voice.
];
```

**Layout for v1:**
- 2-column grid on desktop, 1-column on mobile
- 60px row gap, 48px column gap
- Each card: image area (4:3 ratio, gradient bg, with category tag pill, ink border, 6px terracotta shadow), Caveat meta line, Fraunces 26px title, DM Sans description

**TODO comment in Work.tsx:** *"When `projects.length > 8`, implement filter tabs above the grid (categories: Όλα · Websites · E-shops · Συστήματα · Concepts). See option_B_filters.html in design references for visual treatment if needed."*

**No filter tabs in v1.** Owner will request when needed.

### Section 5: Services (`components/sections/Services.tsx`)

- Background: cream-dark (full-width section)
- Section tag + h2 heading (same pattern as other sections)
- 3 cards in 3-column grid:
  - **Card 1** mustard icon "✦", title "Websites & E-shops"
  - **Card 2** terracotta icon "↗" (cream colored icon), title "SEO"
  - **Card 3** sage icon "⚙" (cream colored icon), title "Custom Συστήματα"
- Each card: cream background, 2px ink border, 4px ink shadow, rounded 16px, hover translates -2px,-2px with shadow becoming 6px
- Below cards: centered Caveat 26px terracotta line "Κάθε project διαφορετικό. Στείλε μήνυμα για προσφορά →" (links to #contact)

### Section 6: Contact (`components/sections/Contact.tsx`)

- Background: ink (dark), cream text
- Top corners rounded 32px
- Top margin 40px (to create visual separation from previous section)
- Centered heading: Fraunces 72px "Πάμε για έναν *καφέ;*" (italic part is Caveat mustard)
- Sub paragraph: 18px, opacity 0.75
- Three buttons:
  - **Primary** mustard background with ink text, "Κράτησε ραντεβού" — links to Calendly URL from env
  - **Secondary** transparent with light border, "WhatsApp" — links to `https://wa.me/{phone}` with pre-filled greeting
  - **Secondary** "Email" — `mailto:alex@gkiafis.gr`

**Form behavior** (v1.5 enhancement, not v1): The reference HTML has buttons. For v1, keep buttons. If owner requests a form later, it submits to `/api/contact` which uses Resend.

**For v1 contact `/api/contact` route:** Build it anyway, ready for when the form is added. Spec:
- POST endpoint, JSON body: `{ name: string, email: string, business?: string, message: string, honeypot: string }`
- If honeypot is non-empty, return 200 silently (bot detected)
- Validate email format and message length (min 10 chars)
- Use Resend SDK to send to `alex@gkiafis.gr` from `noreply@gkiafis.gr`
- Rate limit: simple in-memory map of IP → last submit time, reject if < 60s
- Return `{ success: true }` or `{ error: string }` with appropriate status

### Section 7: Footer (`components/sections/Footer.tsx`)

- Background: ink (continues from contact)
- Centered text, 14px, low-opacity cream
- "© 2026 Αλέξανδρος Γκιάφης"
- Nothing else

---

## 6. Bilingual Implementation (next-intl)

### Setup
1. Install: `npm install next-intl`
2. Create `messages/el.json` and `messages/en.json` with all translatable strings
3. Configure middleware for locale routing: default `el`, secondary `en`
4. URLs: `gkiafis.gr` serves Greek, `gkiafis.gr/en` serves English

### Translation strategy

**Translatable** (in messages files):
- All headings, subheadings, paragraphs
- Button labels, nav links
- Section tags
- How I Work titles + descriptions
- Services card titles + descriptions
- Contact section CTA labels

**Per-project translation** (in `lib/projects.ts` directly):
- Each project's title, meta, description has `{ el, en }` shape (see type above)
- Category labels: built into messages files

**Not translated** (universal):
- Owner's name "Αλέξανδρος Γκιάφης" stays in Greek even in EN version (it's a name)
- Project tag labels like "Live", "Concept", "Demo" stay in English everywhere
- The "→" arrows, etc.

### Language toggle UI

Reproduce the toggle from the reference exactly:
- Pill container: cream-dark background, ink border 2px, ink shadow 2px
- Two buttons inside: ΕΛ and EN
- Active button: ink background, cream text
- Inactive: transparent, ink-soft text
- On click: `useRouter().push()` with the same path under different locale

### Persist user choice

Use a cookie `NEXT_LOCALE` (next-intl handles this automatically) so returning visitors see their preferred language.

---

## 7. Performance & SEO

### Performance targets (non-negotiable)
- Lighthouse Performance ≥ 95 on mobile
- LCP ≤ 1.5s on 4G
- All images via `next/image`
- Photos in `/public/photos/` should be optimized: JPG, sRGB, ≤200KB each

### SEO

In `app/[locale]/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://gkiafis.gr'),
  title: {
    default: 'Αλέξανδρος Γκιάφης — Custom Websites για ελληνικές επιχειρήσεις',
    template: '%s | Αλέξανδρος Γκιάφης'
  },
  description: 'Custom-coded websites, e-shops και συστήματα σε Next.js για μικρές ελληνικές επιχειρήσεις. Αθήνα.',
  alternates: {
    canonical: '/',
    languages: {
      'el': '/',
      'en': '/en',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    url: 'https://gkiafis.gr',
    title: 'Αλέξανδρος Γκιάφης — Custom Websites',
    description: 'Custom-coded websites και custom συστήματα για ελληνικές επιχειρήσεις.',
    images: ['/og-image.png'],
  },
  // ... etc
};
```

JSON-LD structured data for `Person` schema in `<head>` of layout.

`robots.txt` allowing all, pointing to `sitemap.xml`.
Auto-generate `sitemap.xml` via `app/sitemap.ts`.

### Accessibility

- All interactive elements keyboard-navigable
- Focus visible (terracotta outline, 2px offset)
- Color contrast ≥ 4.5:1 (test the ink-soft on cream pairing — should pass but verify)
- `prefers-reduced-motion`: disable transforms, keep opacity transitions
- Form labels properly associated (when added)
- Alt text on photos and project images
- Semantic HTML — `<section>`, `<nav>`, `<main>`, `<article>` for project cards

---

## 8. Environment Variables

Owner will provide these. Document them in `README.md`:

```env
# .env.local (do not commit)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CALENDLY_URL=https://cal.com/gkiafis/30min
NEXT_PUBLIC_WHATSAPP_NUMBER=306XXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=alex@gkiafis.gr
```

The `NEXT_PUBLIC_*` vars are exposed to the client — used to build WhatsApp links and Calendly buttons. The `RESEND_API_KEY` is server-only.

---

## 9. Build Steps for Claude Code

1. **Initialize:**
   ```bash
   npx create-next-app@latest gkiafis-portfolio --typescript --tailwind --app --no-src-dir --import-alias "@/*"
   cd gkiafis-portfolio
   ```

2. **Install:**
   ```bash
   npm install framer-motion resend next-intl
   ```

3. **Set up next-intl** following its App Router guide. Create `messages/`, `i18n.ts`, `middleware.ts`.

4. **Set up design tokens** in `globals.css` (CSS variables) and `tailwind.config.ts` (theme extensions).

5. **Set up fonts** in root layout via `next/font/google`.

6. **Build sections in order:** Nav → Hero → HowIWork → Work → Services → Contact → Footer. After each, verify visually against the reference HTML.

7. **Add Framer Motion scroll-reveals** with `LazyMotion`.

8. **Wire up the contact API route** even though the visual section uses buttons in v1.

9. **Build language toggle** + verify both languages render correctly.

10. **Test locally:**
    ```bash
    npm run dev
    npm run build
    npm run start
    ```
    Run Lighthouse in incognito Chrome. Both EL and EN routes should score ≥95 on mobile.

11. **Deploy to Vercel:**
    ```bash
    vercel
    ```
    Add environment variables in Vercel dashboard. Connect custom domain `gkiafis.gr` (DNS setup via Papaki).

12. **Smoke test live site:**
    - Both EL and EN routes load
    - All anchor links scroll correctly
    - Calendly link opens
    - WhatsApp link pre-fills greeting
    - Email link opens default mail client
    - Mobile view (real iPhone if possible)
    - Lighthouse score on production URL

---

## 10. Important Working Rules

### When to ask the owner

Default to building from the reference and this brief without interruption. Ask the owner only when:
- A copy choice is ambiguous and not resolved by reference
- An animation or interaction is unclear
- An image is missing (use placeholder, flag in DEVELOPMENT_LOG.md)
- A trade-off exists (e.g., "this would slightly hurt performance")

Do NOT ask for permission on small implementation details (variable names, helper function placement, exact timing values within ±50ms of reference).

### Required: DEVELOPMENT_LOG.md

Maintain a `DEVELOPMENT_LOG.md` file at repo root. Append to it after each significant chunk of work:

```markdown
## [YYYY-MM-DD HH:MM] — Section: {name}
**What was built:** ...
**Files created/modified:** ...
**Known limitations:** ...
**To verify after build:** ...
**How to roll back:** `git revert {commit-hash}`
```

This is so the owner can quickly understand state without reading code.

### Required: HEALTH_CHECK.md

Maintain `HEALTH_CHECK.md` listing every URL/feature with expected behavior:

```markdown
## Routes
- `/` → Greek homepage, all sections render, scroll smooth
- `/en` → English homepage, content translated
- `/api/contact` → POST only, returns 200 on success

## External integrations
- Resend → emails arrive at alex@gkiafis.gr within 30s
- Vercel → auto-deploy on push to main

## Visual checks
- All hover states work on desktop
- Mobile layout: photo above text in hero
- Floating heart/star animations loop indefinitely
```

### Critical reminders

1. **Match the reference HTML visually.** This is non-negotiable. The reference is the source of truth for layout, colors, fonts, animations. Deviations require owner approval.

2. **Do not auto-generate project case-study text.** Project descriptions in `lib/projects.ts` come from the reference HTML. Owner will refine in his own voice later.

3. **Do not invent testimonials.** No fake quotes, no stock-photo "client reviews."

4. **Greek typography:** Use proper Greek punctuation: « » for quotes, smart apostrophes, proper Greek question mark «;» (which looks like a semicolon).

5. **Animations never block content.** All sections render their HTML first, then animate in. No JS = static but readable site.

6. **Build incrementally.** After each section, deploy to Vercel preview branch. Owner reviews before next section. **Don't try to ship the whole site in one go.**

7. **Atomic commits with clear messages:** "feat(hero): add photo with terracotta shadow", "fix(nav): mobile breakpoint at 880px", etc. So owner can review each commit.

---

## 11. After v1 Roadmap (do not build now)

These come after v1 ships and the owner has lived with it for 1-2 weeks:

**Phase 2:** Owner provides real photo + writes real project descriptions. Replace placeholder gradients with real screenshots. Build 3 concept demo sites as separate Next.js projects deployed to subdomains.

**Phase 3:** First real client lands. Add `/work/[slug]` case study pages. Add testimonials section (only with real, signed-off testimonials).

**Phase 4 (only if needed):** Filter tabs in Work section. Pagination. Blog at `/blog` (separate route) for SEO.

---

## 12. Pre-launch Owner Checklist (not for Claude Code, for owner)

Before Claude Code can deploy, owner needs:

- [ ] Domain `gkiafis.gr` purchased on papaki.gr
- [ ] Resend account, domain verified, API key
- [ ] Vercel account, GitHub connected
- [ ] Calendly account with "Διερευνητικό Call" 30min event
- [ ] WhatsApp Business number (or personal + WhatsApp Business app)
- [ ] Email forwarding `alex@gkiafis.gr → personal email` set up via Papaki
- [ ] Real portrait photo (300x400 portrait JPG, ≤200KB, clean background)

---

## End of brief

Estimated implementation time: 6-10 hours of agent work with iteration cycles. Owner should expect 2-3 review checkpoints during build.

**Reference file to consult throughout:** `design_2_with_features.html` (provided alongside this brief)
