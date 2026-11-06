# Walter Liu — Personal Website

A dependency-free personal website for Walter Liu's IT audit, evidence systems
and AI assurance work. The site is written in static HTML and CSS so it can be
deployed directly through Cloudflare Pages without a build step.

## Structure

- `index.html` — English homepage
- `zh-hant.html` — Traditional Chinese homepage
- `css/style.css` — shared design system and responsive layout
- `robots.txt` — crawler policy
- `llms.txt` — concise machine-readable site summary
- `DEPLOY.md` — deployment runbook
- `PRELAUNCH.md` — launch checklist

## Content model

- The homepage is the curated public entry point.
- GitHub repositories hold the full project record and technical evidence.
- The knowledge library will expand into Audit & Controls, Reports & Evidence,
  AI Assurance, and Tools & Workflows.
- English and Traditional Chinese are the approved content languages.
- Teaching material must use approved source content, rewrite the presentation,
  and clearly separate analysis from source-supported facts.

## Local preview

Open `index.html` directly, or run a local static server:

```sh
python3 -m http.server 8000
```

Then browse `http://localhost:8000/`.

## Deploy to Cloudflare Pages

1. Push this folder to the connected GitHub repository.
2. In Cloudflare Pages, select the repository.
3. Framework preset: **None**.
4. Build command: leave empty.
5. Output directory: leave empty.

## Pending launch inputs

- LINE contact URL
- WhatsApp contact URL and QR asset
- Approved portrait or banner photograph, if one is to be used
- Final domain connection for `walterliu.net`
