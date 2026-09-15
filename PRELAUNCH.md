# PRELAUNCH Checklist — Personal Website

> Tick items off as you go.
> **Source**: Obsidian vault `01-Projects/personal-website/上線前必做Checklist.md` (created 2026-09-11)
> **Related**: `AGENTS.md` (coding standards) · `DEPLOY.md` (deployment runbook)
> **Markers**: ⛔ blocked on user ｜ 🤖 Codex can do ｜ 👤 user decides / provides

---

## A. Identity Consistency (P0 — without this, AI cannot recognise you)

- [ ] 👤 Legal display name = **Walter Liu** (confirmed)
- [ ] 👤 Domain: `walterliu.net` — decide **apex** or **www** as canonical (redirect the other with 301)
- [ ] 👤 Register the domain (`walterliu.com` is taken; using `.net`)
- [ ] 🤖 `index.html`: `Walter Ho` → **`Walter Liu`** (title / h1 / meta / footer)
- [ ] 👤 LinkedIn bio → **Walter Liu** + add website link
- [ ] 👤 GitHub profile bio → **Walter Liu** + website link
- [ ] 👤 Email: `walter668668@proton.me` (recorded)
- [ ] 🤖 Consistent name / profession / location wording across the site (NAP consistency)

## B. Content (P0 — no content means nothing for AI to cite)

- [ ] 👤 Positioning statement (one defining sentence): `Walter Liu is a Hong Kong CPA and cybersecurity consultant specialising in…`
- [ ] 👤 Proof numbers (years / project count / client count; industry only is fine)
- [ ] 👤 Experience table (company / title / years; titles only if sensitive)
- [ ] 👤 Public professional email
- [ ] 👤 Headshot at `assets/profile.jpg` (currently a “WH” placeholder)
- [ ] 👤 3–4 service items (each with a defining sentence)
- [ ] 👤 3–5 FAQ entries (using real client questions)
- [ ] 👤 About paragraph (background + credentials + rationale)
- [ ] 👤 Credential verification links (HKICPA / ISACA / (ISC)²)
- [ ] 👤 Portfolio list (title / type / description / link)

> ⚠️ **Hard rule: AI must not fabricate content.** Leave `<!-- TODO -->` placeholders until provided.

## C. Technical (P1)

- [ ] 🤖 Project builds successfully (`npm run build` with no errors)
- [ ] 🤖 Every page has `title` + `meta description` + `canonical` + Open Graph
- [ ] 🤖 JSON-LD: `Person` (`hasCredential` / `sameAs`) + `ProfessionalService` + `FAQPage`
- [ ] 🤖 Semantic HTML: single `<h1>`, correct heading hierarchy, every `<img>` has `alt`
- [ ] 🤖 Responsive test (mobile / tablet / desktop)
- [ ] 🤖 Content does not depend on JS (static output)
- [ ] 🤖 Performance: image compression, font loading without layout shift
- [ ] 🤖 `404` page + favicon
- [ ] 🤖 Site-wide link check (0 broken links)

## C-2. Additional Technical Checks (added 2026-09-15)

### Performance (Lighthouse)
- [ ] 👤 Run **Chrome DevTools → Lighthouse** (Desktop + Mobile)
- [ ] 👤 Target scores:
  | Category | Target |
  |---|---|
  | Performance | **≥ 90** |
  | Accessibility | **≥ 90** |
  | Best Practices | ≥ 90 |
  | SEO | **100** |

### HTML Validity
- [ ] 👤 Validate the homepage with **W3C Validator** (https://validator.w3.org/)
- [ ] 🤖 Fix all errors / warnings

### Broken Links
- [ ] 🤖 Site-wide link check (0 broken links)
- [ ] 👤 Tool: **`lychee`** (`brew install lychee`)
  ```bash
  lychee --offline ./dist/**/*.html
  ```

### Accessibility
- [ ] 🤖 Every `<img>` has `alt`
- [ ] 🤖 Colour contrast ≥ 4.5:1
- [ ] 🤖 Keyboard navigable (sensible tab order)
- [ ] 🤖 Correct heading hierarchy (single `<h1>`)

### Image Optimisation
- [ ] 🤖 Use **WebP / AVIF** (Astro’s built-in `<Image>`)
- [ ] 🤖 Lazy load (everything below the fold)
- [ ] 🤖 Set `width` / `height` (avoid CLS)

## D. AI / Search Crawlability (P1)

- [ ] 🤖 `robots.txt`: allow `OAI-SearchBot` / `Claude-SearchBot` / `Claude-User` / `PerplexityBot` / `Perplexity-User`; training crawlers are the user’s call (suggest `Disallow` initially)
- [ ] 🤖 `sitemap.xml` (auto-generate with `@astrojs/sitemap`)
- [ ] 🤖 `llms.txt` — low priority (only once technical docs / tools are published)
- [ ] 👤 Optional: `Content-Signal: search=yes, ai-input=yes, ai-train=no`
- [ ] 🤖 Post-deploy verification: open `/robots.txt` and `/sitemap.xml` in a browser

### D-2. AI Visibility Audit (added 2026-09-15)
> 🔧 Tool: **Firecrawl AI Visibility Audit (AEO + GEO)**
> 🔗 https://www.firecrawl.dev/tools/ai-visibility-audit

- [ ] 👤 Run it after every deploy — using the Cloudflare Pages preview URL (`*.pages.dev`)
- [ ] 👤 Record the score (baseline)
- [ ] 🤖 Review the 6 scored dimensions:
  | # | Dimension | Our counterpart |
  |---|---|---|
  | 1 | AI crawler access | robots.txt |
  | 2 | Structured data | JSON-LD |
  | 3 | Content citability | Q&A-style content |
  | 4 | Expertise & trust signals | credentials, experience |
  | 5 | **Entity clarity** | name / domain consistency |
  | 6 | llms.txt | llms.txt |
- [ ] 🤖 Apply fixes → re-run → compare
- ⚠️ It does **not** replace Lighthouse / W3C Validator / broken-link checks

## E. Deployment (P1)

- [ ] 🤖 GitHub repo up to date, `main` clean, pushed
- [ ] 👤 Cloudflare Pages: Connect to Git (or upload via wrangler)
- [ ] 👤 Build settings: Framework **Astro** / Build command `npm run build` / Output `dist`
- [ ] ⚠️ 👤 Verify the **Search / Agent / Training** settings in the Dashboard (new defaults, 2026-09-15)
- [ ] ⚠️ 👤 **Do NOT click “Block AI bots”** (it also blocks Googlebot / Applebot / BingBot)
- [ ] 👤 Bind custom domain (apex ↔ www 301)
- [ ] 🤖 Verify HTTPS, mobile version, all pages load

## F. Immediately After Launch (P1)

- [ ] 👤 Submit sitemap to **Bing Webmaster Tools** (**most important** — ChatGPT / Copilot use Bing’s index)
- [ ] 👤 Submit sitemap to **Google Search Console**
- [ ] 🤖 Validate JSON-LD with **Rich Results Test**
- [ ] 🤖 Test in AI: ask ChatGPT / Claude / Gemini “Who is Walter Liu and what does he do?”
- [ ] 👤 Add the website link on LinkedIn / GitHub (**fastest external links**)
- [ ] 🤖 Monitor: **Cloudflare logs** (not GA4) for real bot traffic

## G. Explicitly Avoid (counter-productive)

- [ ] ❌ Buying links / spammy backlinks
- [ ] ❌ Keyword stuffing
- [ ] ❌ Writing 100 thin blog posts for traffic
- [ ] ❌ Accidentally clicking Cloudflare’s “Block AI bots”
- [ ] ❌ Treating `llms.txt` as the main strategy

---

## Status Snapshot (2026-09-15)

| Item | Status |
|---|---|
| GitHub repo | ✅ Pushed (`walter0509HK/personal-website`) |
| gh auth | ✅ Signed in |
| vCard layout + English version | ✅ On GitHub |
| Real content | ⛔ Not provided |
| Name / domain decision | ✅ **Decided 2026-09-15** — Walter Liu / `walterliu.net` |
| Cloudflare deployment | ⛔ Not done |
| Astro refactor | ⏳ Not started (user chose option B) |

## Execution Order

```
① Confirm name + domain (apex/www)
② Codex unifies the name (site + vault)
③ User provides content
④ Codex sets up Astro (skeleton + design tokens + content)
⑤ Deploy to Cloudflare + submit to indexes (Bing first)
```
