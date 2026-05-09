# Health Check

What to verify is working, after every deploy.

## Routes

- `/` → Greek homepage. All sections render: Nav · Hero · How I Work · Work · Services · Contact · Footer. Smooth scroll on anchor links.
- `/en` → English homepage. All copy translated. Same layout.
- `/api/contact` → POST only. Returns 200 on success, 400 on bad input, 429 on rate-limit hit, 500 if `RESEND_API_KEY` is missing.
- `/sitemap.xml` → lists `/` and `/en`.
- `/robots.txt` → allows all, points at the sitemap.

## External integrations

- **Resend** — emails sent from `noreply@gkiafis.gr` arrive at `alex@gkiafis.gr` within 30s of POSTing to `/api/contact`. Domain must be verified in Resend.
- **Calendly** (`NEXT_PUBLIC_CALENDLY_URL`) — primary contact button opens the booking page in a new tab.
- **WhatsApp** (`NEXT_PUBLIC_WHATSAPP_NUMBER`) — secondary button opens `wa.me/...` with a pre-filled greeting.
- **Email** — third button opens a `mailto:` to `NEXT_PUBLIC_CONTACT_EMAIL` (fallback: `alex@gkiafis.gr`).
- **Vercel** — auto-deploy on push to `main`. Preview URLs on PRs and feature branches.

## Visual checks (desktop + mobile)

- Background grain texture visible (very subtle dots).
- Logo wordmark rotated −2° with mustard underline pseudo-element.
- Hero highlight on "websites" has rotated mustard pill background.
- Hero `<em>` phrase in Caveat + terracotta.
- Hero photo: 320 px circle (220 px on mobile), ink border, terracotta shadow, rotates on hover.
- Floating heart + star animate continuously (hidden on mobile).
- Sticky notes rotated −1.5° / +1° / −0.5°, mustard / terracotta / sage; hover straightens to 0° + lifts.
- Project cards: 4:3 gradient placeholders, ink shadow, lift on hover.
- Services cards: cream background, 2 px ink border, 4 px ink shadow, lift on hover.
- Contact section: dark with rounded top corners, mustard primary button scales on hover.
- Footer: full-width dark band with low-opacity copyright text.

## Bilingual checks

- Language toggle (top-right) round-trips: `/` ↔ `/en` keeping the rest of the path.
- Active locale button is dark with cream text.
- `NEXT_LOCALE` cookie persists choice on reload.
- Project meta lines (`~ Παγκράτι, 2026`) translate to English location names on `/en`.

## Accessibility

- Tab through nav → all anchor links and language buttons are focusable; terracotta outline visible.
- `prefers-reduced-motion: reduce` → heart/star animations stop, scroll-reveals fade in instantly, hover transitions become opacity-only at 0.2 s.
- `aria-pressed` on language toggle buttons reflects active state.
- Decorative emoji (heart, star, service icons) hidden via `aria-hidden`.

## Known placeholders to swap before launch

- Avatar in Nav (mustard circle) → real `/public/photos/alex.jpg`.
- Hero photo (gradient circle) → same photo.
- Project image areas (gradient backgrounds with text labels) → real screenshots in `/public/projects/{slug}.png` and set `image` on each project in `lib/projects.ts`.
- OG image at `/public/og-image.png` (1200×630).
