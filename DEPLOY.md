# Deployment Runbook (GitHub → Cloudflare Pages)

> **Project decision** (see vault `Codex/Decision-Log.md`): GitHub is for source control only; production hosting uses **Cloudflare Pages**.
> **Status**: local git has been initialised (done by Codex). The steps below require account authorisation — run them yourself, or grant access and Codex will run them.

## Completed (Codex, local)
- [x] `git init` + `.gitignore` (`.DS_Store` / `node_modules` / `.env`, etc.)
- [x] Initial commit (git identity is provisional; will be amended once a real email is provided)

## Step 1 — GitHub authorisation (one-off)
```bash
brew install gh          # skip if already installed
gh auth login            # choose GitHub.com → HTTPS → sign in via browser
```

## Step 2 — Create repo and push
```bash
cd ~/Documents/Codex/personal-website
gh repo create personal-website --public --source=. --remote=origin --push
```
(Use `--private` instead of `--public` for a private repo.)

## Step 3 — Cloudflare Pages deployment

### Option A — Connect the GitHub repo (recommended; matches the original decision)
1. Sign up / sign in at https://dash.cloudflare.com
2. Workers & Pages → Create → Pages → **Connect to Git** → select the `personal-website` repo
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: **/** (or leave empty)
4. Save and Deploy → you get `https://<project>.pages.dev`

### Option B — Deploy via wrangler CLI (no repo connection needed)
```bash
npm install -g wrangler
wrangler login                       # sign in to Cloudflare via browser
wrangler pages project create personal-website
wrangler pages deploy . --project-name personal-website
```

## Step 4 — Custom domain (after purchasing one)
- Add the domain in Cloudflare → add a **CNAME** pointing to `<project>.pages.dev`
- Or bind it directly under the Pages project’s “Custom domains” — Cloudflare handles the rest

## Step 5 — Verification
- Browse `https://<project>.pages.dev` and check mobile / desktop layouts
- DNS propagation can take up to 24 hours (Cloudflare is usually a few minutes)

## Content still to be added (fill into `index.html` once provided)
- Positioning statement, proof numbers (years / projects / clients), experience table, professional email, headshot at `assets/profile.jpg`
