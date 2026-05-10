# freelance-portfolio — freelance.alexgkiafis.gr

Freelance portfolio site for Alexandros Gkiafis — the client-facing surface.

**Live: [freelance.alexgkiafis.gr](https://freelance.alexgkiafis.gr)**

> One of two portfolio sites in this profile. The other is [portfolio-blog](https://github.com/AlexTuring010/portfolio-blog) at **[alexgkiafis.gr](https://alexgkiafis.gr)** — different audience (recruiters / hiring managers, with long-form writing). This repo (`freelance.alexgkiafis.gr`) serves prospective freelance clients.

## Stack

- **Next.js 16** (App Router, TypeScript strict, Turbopack)
- **Tailwind CSS v4** with `@theme` design tokens
- **next-intl 4.x** for `/` (Greek) and `/en` (English) locale routing
- **Framer Motion** for scroll reveals — `LazyMotion` + `domAnimation`, respects `prefers-reduced-motion`
- **Resend** for the contact-form API endpoint

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (verifies typecheck + prerender)
npm run start        # serve the production build
```

## Environment variables

Create `.env.local` (not committed):

```env
# Server-only — used by /api/contact
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Client-exposed — used by the Contact section
NEXT_PUBLIC_CALENDLY_URL=https://cal.com/gkiafis/30min
NEXT_PUBLIC_WHATSAPP_NUMBER=306XXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=alex@gkiafis.gr
```

When deploying to Vercel, set the same vars in the project's env settings (mark `NEXT_PUBLIC_*` as public).

## Project structure

```
app/
  [locale]/             # Locale-aware routes — / (Greek) and /en (English)
    layout.tsx          # Fonts, metadata, NextIntl + Motion providers
    page.tsx            # Composes all sections
    not-found.tsx
  api/contact/route.ts  # POST endpoint — Resend send + honeypot + rate limit
  globals.css           # Tailwind v4 @theme + design tokens + section CSS
  robots.ts
  sitemap.ts
components/
  sections/             # Nav, Hero, HowIWork, Work, Services, Contact, Footer
  ProjectCard.tsx
  LanguageToggle.tsx
  FloatingDecor.tsx
  MotionProvider.tsx    # LazyMotion + MotionConfig (reducedMotion="user")
  Reveal.tsx            # Scroll-reveal wrapper
i18n/
  routing.ts            # Locales + createNavigation helpers
  request.ts            # next-intl getRequestConfig
lib/projects.ts         # Typed project data array
messages/{el,en}.json   # Translatable strings
middleware.ts           # next-intl locale routing
```

## Maintaining

- **Adding a project:** append to `lib/projects.ts`. Past 8 projects, implement category filter tabs in `components/sections/Work.tsx` (TODO comment in place).
- **Adding a translatable string:** add to both `messages/el.json` and `messages/en.json`, then read via `useTranslations`.
- **Replacing the avatar/hero photo:** drop a JPG into `/public/photos/alex.jpg`, then update `components/sections/Nav.tsx` and `components/sections/Hero.tsx` to use `<Image src="/photos/alex.jpg" />` instead of the placeholder div.

## Logs

- **`DEVELOPMENT_LOG.md`** — chronological history of significant changes.
- **`HEALTH_CHECK.md`** — what to verify per route / feature when something changes.

## License

[MIT](LICENSE)
