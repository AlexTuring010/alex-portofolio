# Development Log

A running log of significant work done on the portfolio. Newest entries on top.

---

## [2026-05-09] — Foundations: i18n, design tokens, fonts, Nav

**What was built:**
- next-intl 4.x routing configured (`i18n/routing.ts`, `i18n/request.ts`, `middleware.ts`, `next.config.ts` plugin wrap). Default locale `el` served at `/`, English at `/en` (`localePrefix: 'as-needed'`).
- App restructured under `app/[locale]/` with locale-aware `layout.tsx`, `page.tsx`, `not-found.tsx`. Old root `app/layout.tsx` and `app/page.tsx` removed.
- Design tokens added in `app/globals.css` via Tailwind v4 `@theme` block (cream / cream-dark / ink / ink-soft / terracotta / terracotta-dark / sage / mustard / highlight) plus matching CSS custom properties on `:root` for raw `var(--…)` use.
- Background grain texture (radial-gradient dot pattern) reproduced from reference.
- `prefers-reduced-motion` block disables keyframes, reduces transitions to opacity 0.2s.
- Three Google fonts wired via `next/font`: Caveat, Fraunces (with SOFT/WONK/opsz axes — explicit `weight` array dropped because Next 16 rejects axes + fixed weights together), DM Sans. All three load `latin` only — none of them ship Greek glyphs on Google Fonts, so Greek text falls back to the system stack. This matches the reference `design.html`, which loads the same three fonts without Greek subsets.
- `components/sections/Nav.tsx` (server) + `components/LanguageToggle.tsx` (client) built. Avatar uses a mustard placeholder circle until owner provides `/public/photos/alex.jpg`.
- Translatable nav strings + page metadata strings populated in `messages/el.json` and `messages/en.json`.

**Files created/modified:**
- `i18n/routing.ts`, `i18n/request.ts`, `middleware.ts`, `next.config.ts`
- `messages/el.json`, `messages/en.json`
- `app/globals.css`
- `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`, `app/[locale]/not-found.tsx`
- `components/sections/Nav.tsx`, `components/LanguageToggle.tsx`
- removed: `app/layout.tsx`, `app/page.tsx`

**Known limitations:**
- Brief specifies Next.js 15; create-next-app installed Next.js **16.2.6**. App Router patterns the brief assumes still work in 16.
- Brief specifies `i18n.ts`; we use the next-intl 4.x convention `i18n/routing.ts` + `i18n/request.ts`.
- Next 16 prints a deprecation warning preferring `proxy.ts` over `middleware.ts`. Kept `middleware.ts` for now since next-intl's docs and `createMiddleware` API still use that name.
- Fraunces is loaded as a variable font (no fixed `weight` array) because Next 16 rejects combining `axes` with explicit weights. Visual weight is still controlled via `font-weight` in CSS.
- Avatar in Nav is a placeholder mustard circle. Replace with `<Image src="/photos/alex.jpg" />` when owner provides the photo.
- Page body below Nav is currently a stub line — sections to be built in subsequent rounds.

**To verify after build:**
- `/` renders Greek nav, `/en` renders English nav.
- Language toggle round-trips between `/` and `/en` and preserves the route.
- Hover on nav links shows terracotta color transition.
- Logo wordmark has -2deg rotation with mustard underline.
- Mobile breakpoint (<880px): avatar shrinks to 32px, logo to 26px.

**How to roll back:** `git revert <commit-hash>`
