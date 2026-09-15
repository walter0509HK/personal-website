# AGENTS.md — Personal Website Coding Standards

> **Purpose**: a single standard for any AI (DeepSeek Flash/Pro, etc.) writing code in this project.
> **Location**: website repo root (auto-loaded).
> **Last updated**: 2026-09-15

## 1. Project Basics
- Website: **Walter Liu** personal brand (CPA | IT Audit | Cybersecurity Consultant)
- Type: **one-page static site** (plain HTML/CSS — no build tools, no framework, no backend)
- Hosting: **Cloudflare Pages** (free tier)
- Language: **English first (en)**; once stable, add ja / zh-Hant / zh-Hans as one HTML file per language (shared `css/style.css`)
- Content source: vault `01-Projects/personal-website/` (Obsidian) — **AI must not invent content**

## 2. HTML Standards
1. Use semantic tags: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<h1>`–`<h3>`
2. Exactly one `<h1>` (brand name); other headings descend by level
3. `<html lang="en">`, `<meta charset="UTF-8">`, `<meta name="viewport">` are required
4. Every `<img>` must have `alt` (accessibility); hide missing images via `onerror` (current approach)
5. No inline style/script (use `css/style.css`; put JS in its own file)
6. Mark structural areas with comments: `<!-- ===== Section name ===== -->`
7. Mark TODOs with `<!-- TODO: ... -->` so the user can track them

## 3. CSS Standards
1. All in `css/style.css`, sectioned with block comments (`/* ===== Base ===== */` etc.)
2. Follow the existing design system:
   - Primary: dark blue gradient (`#0f172a` → `#1e3a5f`)
   - Text: `#1f2937` / headings `#111827`
   - Background: white `#ffffff`
   - Font stack: `-apple-system, "PingFang HK", "Microsoft JhengHei", sans-serif`
   - Container width: `max-width: 960px`
3. Responsive: mobile-first; breakpoint around 768px; do not break the existing `.container` structure
4. Use classes for styling, never ids (ids are for anchors)
5. Animation/effects: **restrained** — we sell content, not motion; only if the user asks
6. No third-party CSS frameworks (Tailwind/Bootstrap) — this project stays dependency-free

## 4. Security Standards (important)
1. **Never** write passwords, API keys, or tokens into any file (including HTML comments)
2. External resources (fonts, images) must use `https://`; never load unknown third-party scripts
3. Form handling (if added later): do not expose the email via `mailto`; prefer Cloudflare Pages Functions (see vault Workers reference)
4. Never put client-sensitive data on the website (it is public and world-readable)
5. Confirm the user’s authorisation before publishing headshots / personal data
6. No tracking or analytics scripts unless the user explicitly requests them

## 5. Deployment (Cloudflare Pages)
```bash
# 1. Push to GitHub
cd ~/Documents/Codex/personal-website
git add -A && git commit -m "Description"
git push origin main

# 2. Cloudflare auto-deploys (once connected)
# Dashboard → Pages → the project → triggers automatically
```
- Full runbook: `DEPLOY.md`
- Pre-deploy checks: ① `git status` clean ② no leftover TODO ③ image paths correct ④ English renders correctly
- After editing `index.html` / `style.css`, preview locally with `open index.html` before committing

## 6. Content Sourcing Rules (anti-fabrication)
1. **All content comes from the vault**: `01-Projects/personal-website/00-專案簡介.md` + material provided by the user
2. Positioning statement, proof numbers, experience, email, headshot → **user provides**; AI must not invent
3. If data is missing: leave a `<!-- TODO: ... -->` marker — **never fill in fake data**
4. Professional credentials (CPA/CISSP, etc.) → follow `Codex/User-Profile.md` exactly; do not add or remove
5. The user gives final review on every piece of published content (global AGENTS.md rule: propose → approve → execute)

## 7. Model Strategy (token efficiency)
- **Build with Flash**: sufficient for static pages
- **Review with Pro before launch**: one pass for quality
- Do it in one go, not many rounds (re-reading context burns tokens)
- Gather all content first, then write (avoids back-and-forth)

## 8. Relationship to Global Rules
- This file is the **website coding standard**; the global `~/.codex/AGENTS.md` is the **AI working charter**
- Both apply: the global one governs *how we collaborate*, this one governs *how this website is written*
