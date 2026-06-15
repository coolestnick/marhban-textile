# Marhaba Textile — Website

A modern, animated, fully responsive marketing site for the **Marhaba Textile**
clothing & fabric brand. Built to out-class the competitor reference
(zuraiqtextiles.com) with a distinct **gold + royal-blue** identity drawn from
the Marhaba logo, light/dark themes, scroll animations, and a minimal 3D silk
hero.

## Tech stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | React 18 + TypeScript                    |
| Build tool     | Vite 5                                    |
| Styling        | Tailwind CSS + shadcn/ui conventions     |
| Animation      | Framer Motion (Motion)                   |
| 3D             | React Three Fiber + Three.js (lazy-loaded) |
| Icons          | lucide-react                             |
| Theming        | Class-based light/dark (localStorage)    |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build locally
```

> Requires Node 18+ (developed on Node 22).

## ✏️ Editing content (do this at delivery time)

**Almost everything lives in one file:** [`src/data/site.ts`](src/data/site.ts).
Edit copy, contact details, stats, collections, gallery images, and
testimonials there — you rarely need to touch the components.

- **Logo:** `public/logo.png` (swap the file, keep the name).
- **Product / gallery images:** drop your photos into `public/` and reference
  them as `"/my-photo.jpg"` in `site.ts`, or keep the Unsplash placeholders.
- **Brand colors:** defined as the `gold` / `royal` palettes in
  [`tailwind.config.js`](tailwind.config.js) and as theme tokens in
  [`src/index.css`](src/index.css).
- **Contact form:** submits straight to **WhatsApp** with the message
  pre-filled. Set your number in `site.ts` → `brand.whatsapp` (international
  format, digits only, e.g. `9689XXXXXXX`).

## Project structure

```
src/
  components/
    sections/    # Page sections (Navbar, Hero, About, Collections, …)
    three/       # 3D silk hero scene (React Three Fiber)
    theme/       # Light/dark theme provider + toggle
    ui/          # Reusable primitives (Button, Badge, Reveal, …)
  data/site.ts   # ← ALL site content lives here
  hooks/         # use-tilt, use-reduced-motion
  lib/utils.ts   # cn() class helper
```

## Design notes

- **Light & dark mode** — toggle in the navbar; respects system preference and
  remembers the choice.
- **Mobile-first & responsive** — tested down to small phones.
- **Accessible** — semantic landmarks, focus-visible rings, and full
  `prefers-reduced-motion` support (3D + animations disable gracefully).
- **Performance** — the Three.js hero is code-split and lazy-loaded so the rest
  of the page stays light.

## Adding shadcn/ui components

The project is configured for shadcn (`components.json`). To add more
primitives later:

```bash
npx shadcn@latest add card dialog input
```

## Design skills

Reference design/animation skills (Framer Motion, R3F, GSAP, modern-web-design,
etc.) from `freshtechbro/claudedesignskills` are installed under
`.claude/skills/` for ongoing AI-assisted iteration.

## Deploy (when ready)

Any static host works since this is a Vite SPA:

```bash
npm run build      # outputs /dist
```

Then deploy `/dist` to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
(Nothing is deployed automatically — this repo is set up so you can ship it
whenever you choose.)
