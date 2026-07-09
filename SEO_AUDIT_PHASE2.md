# SYNC7VEN — Technical SEO Audit (Updated)

**Date:** 2026-07-09
**Domain:** https://sync7ven.com
**Hosting:** Vercel
**DNS:** Cloudflare
**Repository:** GitHub
**Build:** `vite build` — SUCCESS (12.79s)

> **Audit only. No code changes were made.**
> This supersedes the earlier Phase 1 audit (`SEO_AUDIT_PHASE1.md`), reflecting the current state of the codebase after routing, SEO, and structured-data fixes were applied.

---

## 1. Framework and Build Architecture

| Item | Value |
|---|---|
| Framework | React (SPA — Single Page Application) |
| React version | ^18.3.1 |
| Build tool | Vite ^5.4.8 |
| Language | TypeScript |
| Main entry | `src/main.tsx` |
| Root component | `src/App.tsx` |
| Routing | React Router v7 (`react-router-dom` ^7.18.1) |
| Build command | `vite build` (via `npm run build`) |
| Output directory | `dist/` |

**Notes:**
- `package.json` `name` is still `vite-react-typescript-starter` — not renamed to SYNC7VEN.
- Dependencies include `@supabase/supabase-js`, `@emailjs/browser`, `lucide`, `lucide-react`, `react-fast-marquee`, `react-phone-input-2`.

---

## 2. Routing Architecture (FIXED since Phase 1)

**Phase 1:** React state-based switching — every page rendered at `/`.
**Current:** Real client-side routing via `react-router-dom` with URL pathnames.

**File:** `src/App.tsx`

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<TermsConditions />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

**URL behavior:**

| Page | Browser pathname | Exists as route? |
|---|---|---|
| Home | `/` | YES |
| Services | `/services` | YES |
| About | `/about` | YES |
| Work | `/work` | YES |
| Contact | `/contact` | YES |
| Privacy Policy | `/privacy` | YES |
| Terms | `/terms` | YES |
| 404 | any other path | YES (catch-all) |

- Code splitting via `React.lazy()` on all non-Home routes — each page loads on demand.
- `vercel.json` SPA rewrite present so deep links resolve to `index.html`.
- `ScrollToTop` component scrolls to top on pathname change.

---

## 3. Per-Page Metadata (FIXED since Phase 1)

**Phase 1:** Every page shared `index.html` metadata.
**Current:** Per-page SEO via `src/components/SEO.tsx` using `react-helmet-async`.

Each page renders `<SEO>` with its own `title`, `description`, `canonicalPath`, `robots`, and `ogType`. The SEO component injects `<title>`, meta description, robots, canonical, Open Graph (title, description, type, url, image), and Twitter Card tags.

| Page | Title | Canonical | Robots |
|---|---|---|---|
| Home | SYNC7VEN \| AI, Web, App & Digital Solutions | `/` | index, follow |
| Services | Services \| SYNC7VEN | `/services` | index, follow |
| About | About SYNC7VEN \| Our Story, Mission & Vision | `/about` | index, follow |
| Work | Our Work \| SYNC7VEN | `/work` | index, follow |
| Contact | Contact SYNC7VEN \| Start a Project | `/contact` | index, follow |
| Privacy | Privacy Policy \| SYNC7VEN | `/privacy` | index, follow |
| Terms | Terms & Conditions \| SYNC7VEN | `/terms` | index, follow |
| 404 | Page Not Found \| SYNC7VEN | (none) | noindex, follow |

Canonical origin hardcoded to `https://sync7ven.com` in `SEO.tsx:3`. OG image defaults to `https://sync7ven.com/sync7ven-logo.png`.

**Note:** Because this is an SPA, all of these tags are rendered client-side via JavaScript. The raw `index.html` served by the CDN contains no static `<title>`, description, canonical, or OG tags — search engines that don't execute JS see the generic `index.html` only. This is the main residual SEO limitation (see §6).

---

## 4. Static `index.html` SEO

**File:** `index.html`

| Item | Value |
|---|---|
| html lang | `en` |
| static `<title>` | **MISSING** (set client-side by SEO component) |
| static meta description | **MISSING** |
| meta robots | **MISSING** (set client-side) |
| canonical | **MISSING** (set client-side) |
| favicon | `/sync7ven-logo.png` (type image/png) — **file exists** (FIXED) |
| theme-color | **MISSING** |
| static OG tags | **MISSING** (set client-side) |
| static Twitter tags | **MISSING** (set client-side) |
| JSON-LD Organization | Present (static) |
| JSON-LD WebSite | Present (static) |
| font preconnect | Present (Google Fonts) |
| font loading | `preload` + `media="print" onload` swap pattern (non-blocking) — good |

**Critical:** The favicon is now fixed and points to an existing file. However, the static `index.html` carries NO title, description, canonical, or social tags — all are JS-injected. Crawlers that don't render JS (or social scrapers that only read raw HTML) will see an untitled, undescribed page.

---

## 5. Public Pages

| Page | Source file | Route | H1 present? |
|---|---|---|---|
| Home | `src/pages/Home.tsx` | `/` | YES (`Build. Sync. Scale.`) |
| Services | `src/pages/Services.tsx` | `/services` | YES (`Our Services`) — FIXED |
| About | `src/pages/About.tsx` | `/about` | YES (`About Us`) — FIXED |
| Work | `src/pages/Work.tsx` | `/work` | YES (`Our Work`) — FIXED |
| Contact | `src/pages/Contact.tsx` | `/contact` | YES (`Let's Work Together`) — FIXED |
| Privacy | `src/pages/PrivacyPolicy.tsx` | `/privacy` | YES (`Privacy Policy`) |
| Terms | `src/pages/TermsConditions.tsx` | `/terms` | YES (`Terms & Conditions`) |
| 404 | `src/pages/NotFound.tsx` | `*` | YES (`404`) |

All 7 primary pages now have an H1 — FIXED since Phase 1.

---

## 6. robots.txt, sitemap.xml, and Structured Data (FIXED)

**Phase 1:** All missing.
**Current:**

- **`public/robots.txt`** — EXISTS. Allows all, references `https://sync7ven.com/sitemap.xml`. FIXED.
- **`public/sitemap.xml`** — EXISTS. Lists all 7 indexable routes. FIXED.
- **JSON-LD** — Two static blocks in `index.html`: `Organization` (name, url, logo, description, sameAs LinkedIn/Instagram) and `WebSite`. FIXED.

**Remaining gap:** No `Service`, `BreadcrumbList`, `FAQPage`, or per-page schema. Social sharing schema is static-only.

---

## 7. Internal Linking and Navigation (FIXED)

**Phase 1:** All navigation was JavaScript buttons; zero crawlable `<a>` links.
**Current:** Navigation uses `<Link>` and `<NavLink>` from `react-router-dom` (renders real `<a>` tags with `href`).

- Navbar (`Navbar.tsx`): 5 nav links + "Get Started" as `<Link>` / `<NavLink>`.
- Footer (`Footer.tsx`): nav links + Privacy/Terms as `<Link>`.
- Page CTAs (Home, About, Work, Contact) use `<Link to="/...">`.
- Social links: LinkedIn and Instagram use `<a target="_blank" rel="noopener noreferrer">` — rel attributes now present. FIXED.
- `mailto:` and `tel:` links present on the Contact page.

**Remaining:** Footer email/phone are plain text, not mailto/tel links.

---

## 8. Brand and Company Fact Audit

### Brand casing
`SYNC7VEN` used consistently in headings, JSON-LD, and SEO titles. Minor: the hero uses `SYNC7VEN` with a superscript-style `7` (e.g. `SYNC<7>VEN`), consistent across pages.

### Numerical claims
| Claim | File | Notes |
|---|---|---|
| "7" Creative Minds / team | `Home.tsx`, `Work.tsx` | Consistent |
| "1" Shared Vision | `Home.tsx:459` | **Typo: "Vison" → should be "Vision"** |
| "8+" Core Services | `Home.tsx` | Services page lists 11 services |
| "100%" Custom Solutions / Commitment | `Home.tsx`, `Work.tsx` | Consistent |
| "5+" Projects Built | `Work.tsx` | Work page shows 5 projects |
| "9 projects delivered" | `About.tsx` (timeline) | Differs from Work page "5+" |

### Contact info
- Email: `sync7ven@gmail.com` (Footer plain text, Contact mailto, Privacy, Terms)
- Phone: `+91 9322450943` (Footer plain text, Contact tel)
- Address: `Global — Remote First` (no physical address)

### Social links
- LinkedIn: `https://www.linkedin.com/company/sync7ven/` — real
- Instagram: `https://www.instagram.com/sync7ven?igsh=...` — real
- Twitter: `href: ""` (empty) in `Footer.tsx:40` and `Contact.tsx:415` — **placeholder, renders as dead link**

### EmailJS public key
- `Contact.tsx` hardcodes the EmailJS public key `mAujVe1FcBPrk4PXf` client-side. Public keys are by design client-exposed, but worth noting.

---

## 9. Logo, Favicon, and Brand Assets

### Active assets
| Filename | Size | Used by |
|---|---|---|
| `sync7ven-logo.webp` | 34 KB | Navbar, Footer (logo) |
| `sync7ven-logo.png` | 350 KB | Favicon, OG image, JSON-LD logo |
| `sync7ven_Transparent_Logo.webp` | 63 KB | Home hero watermark |
| `Logo.mp4` | 2.0 MB | Loader (autoplay on every load) |
| `sap_Logo.webp` | 8 KB | Services tech icon |

**FIXED:** Favicon and OG image now point to existing files (was a missing WhatsApp image in Phase 1).

**Remaining:** `sync7ven-logo.png` is 350 KB — oversized for a favicon/OG image. The `Logo.mp4` (2 MB) autoplays on every initial page load, delaying LCP.

### Unused assets still in `public/`
`pinecone.png` (68 KB), `pinecone_Logo.png` (36 KB), `sap_Logo.png` (38 KB — superseded by `.webp`), `sync7ven-full-logo.jpeg` (53 KB), `sync7ven_Transparent_Logo.png` (703 KB — superseded by `.webp`). Copied into `dist/`, inflating deploy size.

---

## 10. Image SEO and Performance

### Image format migration
Project images in `Work.tsx` now reference `.webp` versions under `public/utils/webp/`. Significant size reductions:

| Image | PNG/JPEG | WebP | Reduction |
|---|---|---|---|
| agenticAi-dashboard | 539 KB | 78 KB | -86% |
| agenticAi-workflow | 4.17 MB | 342 KB | -92% |
| giftify-1 | 832 KB | 100 KB | -88% |
| mediconnect-1 | 1.49 MB | 92 KB | -94% |
| kido1 | 2.03 MB | 241 KB | -88% |

This is a major improvement. However, the original oversized PNG/JPEG files still sit in `public/utils/` and are copied into `dist/` (~13 MB of dead weight), even though no active code references them.

### Lazy loading
- Work project images: `loading="lazy"` — present.
- Home watermark: `fetchPriority="high"`, `loading="eager"` — acceptable (above-fold).
- Services tech icons: `loading="lazy"` — present.

### `alt` text issues
| File:line | Issue |
|---|---|
| `Services.tsx:318` | `alt={name}` references an undefined variable `name` — **bug** (the component receives `icon`, not `name`). Renders `alt="[undefined]"` or React warning. Should be `alt={tech.name}` or pass name into `TechIcon`. |
| Navbar/Footer logo | `alt="SYNC7VEN logo"` — descriptive (FIXED from generic "sync7ven"). |
| Home watermark | `alt=""` — correct for decorative. |

---

## 11. Heading Structure (FIXED)

All 7 primary pages now have exactly one H1 with logical H2/H3 hierarchy beneath. FIXED since Phase 1.

---

## 12. Build Baseline

| Item | Value |
|---|---|
| Build | SUCCESS |
| Build time | 12.79s |
| `index.html` | 1.80 KB (0.69 KB gzip) |
| CSS | 54.11 KB (8.61 KB gzip) |
| Main JS chunk | 230.50 KB (73.92 KB gzip) |
| Route chunks | Services 34.82 KB, Work 23.40 KB, About 22.46 KB, Contact 17.38 KB, Terms 13.00 KB, Privacy 9.37 KB, NotFound 1.75 KB |
| Code splitting | YES — lazy-loaded routes (FIXED from single 296 KB bundle) |

**FIXED:** The single 296 KB bundle is now split into a 230 KB main chunk plus per-route lazy chunks.

**Note:** The main 230 KB chunk includes vendor code (React Router, Helmet, etc.). The deprecated `react-phone-input-2` is still in `package.json` but confirmed not imported in `src/` — potential dead dependency. `@supabase/supabase-js` is in dependencies but no `supabase` import found in `src/`.

---

## 13. Performance Observations

| Item | Status |
|---|---|
| Font loading | Non-blocking preload+swap, 5 weights (400–800) — good |
| `react-fast-marquee` | Used in Services tech showcase |
| `react-helmet-async` | Per-page meta — small overhead |
| Logo.mp4 autoplay | 2 MB on every initial load, delays LCP — still a concern |
| Original PNGs in `public/utils/` | ~13 MB copied to `dist/`, unused — deploy size bloat |
| Custom CSS animations | ~20 keyframes in `index.css` — lightweight |
| `prefers-reduced-motion` | Honored — good for accessibility |

---

## 14. Prioritized SEO Problems (Current State)

### Resolved since Phase 1 (context)
- ~~No URL routing~~ → React Router with real paths
- ~~No crawlable links~~ → `<Link>`/`<NavLink>` anchor tags
- ~~Broken favicon/og:image~~ → fixed, files exist
- ~~No canonical~~ → per-page canonical via SEO component
- ~~No robots.txt/sitemap~~ → both present
- ~~No structured data~~ → Organization + WebSite JSON-LD
- ~~4 pages missing H1~~ → all pages have H1
- ~~No 404 page~~ → NotFound with noindex
- ~~No vercel.json SPA rewrite~~ → present
- ~~No code splitting~~ → lazy route chunks
- ~~External links missing rel~~ → `noopener noreferrer` added
- ~~Unoptimized images~~ → WebP variants in use

### Remaining — HIGH

| # | Problem | Impact |
|---|---|---|
| H1 | **Static `index.html` has no title/description/OG/canonical** | All meta is JS-injected. Crawlers/social scrapers that don't render JS see a blank untitled page. Primary residual SEO risk. Consider server-side rendering, prerendering, or at minimum static fallback meta in `index.html`. |
| H2 | **Twitter social link `href: ""` (placeholder)** | Dead link in Footer and Contact. Remove or link to a real profile. |
| H3 | **Footer email/phone are plain text, not links** | Not crawlable as mailto/tel; only Contact page has them as links. |

### Remaining — MEDIUM

| # | Problem | Impact |
|---|---|---|
| M1 | **`alt={name}` bug in `Services.tsx:318`** | `name` is undefined in `TechIcon` scope. Broken alt text on tech icons. Should reference the tech name. |
| M2 | **"Vison" typo in `Home.tsx:459`** | "Shared Vison" → "Shared Vision". On-page content quality. |
| M3 | **2 MB `Logo.mp4` autoplay on every load** | Delays LCP, wastes bandwidth on first visit. Consider a poster image or lighter intro. |
| M4 | **Original PNG/JPEG files (~13 MB) still in `public/utils/`** | Unused by active code but copied into `dist/`. Inflates deploy size. Safe to remove (WebP versions are referenced). |
| M5 | **`sync7ven-logo.png` is 350 KB** | Oversized for a favicon/OG image. |
| M6 | **Missing `theme-color` meta** | No mobile browser theme color. |
| M7 | **No `Service`/`BreadcrumbList`/`FAQPage` schema** | Only Organization + WebSite. Rich snippet opportunities missed (Services list, Contact FAQ). |

### Remaining — LOW

| # | Problem | Impact |
|---|---|---|
| L1 | **`package.json` name still `vite-react-typescript-starter`** | Not production-facing; reflects incomplete setup. |
| L2 | **`react-phone-input-2` is a dead dependency** | Listed in `package.json`, not imported anywhere in `src/`. Remove to avoid accidental bundle bloat. |
| L3 | **`@supabase/supabase-js` installed but unused in `src/`** | No Supabase import found. Either unused or intended for future. Adds dependency surface. |
| L4 | **Redundant `lucide` + `lucide-react`** | Both installed; only `lucide-react` is used. Minor bloat. |
| L5 | **Unused assets in `public/`** | `pinecone.png`, `pinecone_Logo.png`, `sap_Logo.png`, `sync7ven-full-logo.jpeg`, `sync7ven_Transparent_Logo.png` — copied to dist, not referenced. |
| L6 | **Contact page "Location" link `href: ""`** | Empty href on the location row. |
| L7 | **EmailJS public key hardcoded in `Contact.tsx`** | Client-exposed key. By design for EmailJS, but worth moving to env if possible. |
| L8 | **Stat inconsistency: "5+ projects" vs "9 projects delivered"** | Home/Work show 5+, About timeline says 9. Reconcile. |

---

## 15. Summary

The site has resolved all 7 **CRITICAL** and most **HIGH** issues from the Phase 1 audit:

| Phase 1 severity | Status |
|---|---|
| Critical C1–C7 | ALL RESOLVED |
| High H1–H7 | H1 (missing H1s), H4 (404), H5 (vercel.json), H7 (OG type/url/twitter desc) RESOLVED. H6 (Twitter placeholder) REMAINS. New: static-meta gap (H1 current). |

The single biggest remaining risk is **client-side-only metadata** — the `index.html` served to crawlers carries no static title/description/canonical/OG tags. Everything else is medium/low polish: fix the `alt={name}` bug, the "Vison" typo, remove the dead Twitter link, delete ~13 MB of orphaned source images, and drop unused dependencies.

**AUDIT COMPLETE — NO CODE CHANGES MADE**
