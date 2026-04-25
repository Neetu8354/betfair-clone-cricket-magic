# Betfair — Cricket Stats, Predictions & Community

Production-ready React + TypeScript + Tailwind CSS app. Premium dark UI, fully responsive, SEO + AEO/GEO optimized, with a 10-post blog and live-cricket dashboard.

## Tech stack
- React 18 + TypeScript 5
- Vite 5 (SWC)
- Tailwind CSS 3 + shadcn/ui (Radix primitives)
- React Router 6, TanStack Query, Lucide icons
- Vitest + Testing Library

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:8080 (Vite default may differ — check terminal).

## Scripts
| Script | What it does |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |
| `npm test` | Run Vitest suite |

## Project structure
```
.
├── index.html               # SEO meta, canonical, preconnects
├── public/
│   ├── robots.txt           # Allows GPTBot, ClaudeBot, PerplexityBot, etc.
│   └── sitemap.xml          # Auto-generated sitemap
├── src/
│   ├── App.tsx              # Routes (/, /blog, /blog/:slug, /exchange)
│   ├── main.tsx
│   ├── index.css            # Design tokens (HSL)
│   ├── assets/              # Images
│   ├── components/
│   │   ├── seo/Seo.tsx      # Per-route SEO + JSON-LD helper
│   │   ├── exchange/        # Exchange UI primitives
│   │   ├── ui/              # shadcn components
│   │   └── …                # Header, Footer, Hero, etc.
│   ├── data/posts.ts        # 10 long-form blog posts (typed blocks)
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Exchange.tsx
│   │   ├── NotFound.tsx
│   │   └── blog/{BlogIndex,BlogPost}.tsx
│   └── lib/site.ts          # Brand constants
├── tailwind.config.ts       # Semantic tokens
├── vite.config.ts
└── tsconfig*.json
```

## Routes
- `/` — Home: hero, live matches, stats, leaderboard, blog teaser
- `/blog` — Blog index (10 articles)
- `/blog/:slug` — Article with FAQ, related posts, breadcrumbs
- `/exchange` — Mobile exchange-style UI

## SEO highlights
- Per-route `<Seo />` (title, description, canonical, OG, Twitter)
- JSON-LD: Organization, WebSite, BreadcrumbList, Article, ItemList, FAQPage
- `robots.txt` opted-in for AI/answer-engine crawlers (AEO/GEO)
- Internal-link hub in footer + cross-linking between all posts

## Deploy
Builds to plain static files. Drop `dist/` on Vercel, Netlify, Cloudflare Pages, or any static host. SPA fallback required (already configured for Vite).

## License
For demonstration / educational use.
