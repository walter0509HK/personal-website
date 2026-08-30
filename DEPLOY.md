# 部署流程（GitHub → Cloudflare Pages）

> 本專案決策（見 vault `Codex/Decision-Log.md`）：GitHub 只作原始碼管理，正式託管用 **Cloudflare Pages**。
> 狀態：本機 git 已初始化（Codex 完成）；以下步驟需要帳號授權，由使用者執行（或提供授權後由 Codex 代跑）。

## 已完成（Codex，本機）
- [x] `git init` ＋ `.gitignore`（.DS_Store／node_modules／.env 等）
- [x] 初始 commit（git 身份為暫定值，提供真實電郵後會 amend）

## Step 1：GitHub 帳號授權（需使用者一次）
```bash
brew install gh          # 已安裝則略過
gh auth login            # 選 GitHub.com → HTTPS → 瀏覽器登入
```

## Step 2：建立 repo 並 push
```bash
cd ~/Documents/Codex/personal-website
gh repo create personal-website --public --source=. --remote=origin --push
```
（要私人 repo 就把 `--public` 改 `--private`）

## Step 3：Cloudflare Pages 部署

### 方式 A（推薦，符合原決策：連接 GitHub repo 自動部署）
1. 註冊／登入 https://dash.cloudflare.com
2. Workers & Pages → Create → Pages → **Connect to Git** → 選 `personal-website` repo
3. Build settings：
   - Framework preset：**None**
   - Build command：（留空）
   - Build output directory：**/**（或留空）
4. Save and Deploy → 完成後得到 `https://<project>.pages.dev`

### 方式 B（wrangler CLI 直接上傳，不需連接 repo）
```bash
npm install -g wrangler
wrangler login                       # 瀏覽器登入 Cloudflare
wrangler pages project create personal-website
wrangler pages deploy . --project-name personal-website
```

## Step 4：網域（買域名後）
- 在 Cloudflare 加網域 → DNS 加 **CNAME** 指向 `<project>.pages.dev`
- 或直接在 Pages 專案「Custom domains」綁定，Cloudflare 自動處理

## Step 5：驗證
- 瀏覽 `https://<project>.pages.dev`，檢查手機／桌面版
- DNS 生效最長 24 小時（Cloudflare 通常幾分鐘）

## 內容待補（使用者提供後填進 index.html）
- 定位句、數字證明（年資／項目／客戶）、經歷表、專業電郵、頭像 `assets/profile.jpg`
