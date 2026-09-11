# PRELAUNCH Checklist — Personal Website

> 上線前逐項打勾的工作清單。邊做邊改勾。
> 來源：Obsidian vault `01-Projects/personal-website/上線前必做Checklist.md`（2026-09-11 建立）
> 相關：`AGENTS.md`（編碼標準）· `DEPLOY.md`（部署 runbook）
> 標記：⛔ 等使用者｜🤖 Codex 可做｜👤 使用者決定／提供

---

## A. 身份一致性（P0 — 唔做，AI 認唔到你）

- [ ] 👤 正式姓名＝**Walter Liu**（確認）
- [ ] 👤 網域定案：`walterliu.net`；決定 **apex** 或 **www** 為正（另一個 301）
- [ ] 👤 註冊網域（`walterliu.com` 已被註冊，用 `.net`）
- [ ] 🤖 `index.html`：`Walter Ho` → **`Walter Liu`**（title／h1／meta／footer）
- [ ] 👤 LinkedIn bio 改 **Walter Liu** ＋加網站連結
- [ ] 👤 GitHub profile bio 加 **Walter Liu** ＋網站連結
- [ ] 👤 電郵：`walter668668@proton.me`（已記錄）
- [ ] 🤖 全站姓名／專業／地區措辭一致（NAP 一致）

## B. 內容（P0 — 冇內容，AI 冇嘢好引用）

- [ ] 👤 定位句（一句定義式）：`Walter Liu is a Hong Kong CPA and cybersecurity consultant specialising in…`
- [ ] 👤 數字證明（年資／項目數／客戶數，可只寫行業）
- [ ] 👤 經歷表（公司／職稱／年份；敏感可只寫職稱）
- [ ] 👤 專業電郵（要公開的一個）
- [ ] 👤 頭像 `assets/profile.jpg`（現用「WH」佔位）
- [ ] 👤 服務項目 3–4 項（每項「定義式」描述）
- [ ] 👤 FAQ 3–5 條（用客戶真實問法）
- [ ] 👤 About 一段（背景＋資格＋理念）
- [ ] 👤 資格驗證連結（HKICPA／ISACA／(ISC)²）
- [ ] 👤 作品集清單（標題／類型／描述／連結）

> ⚠️ 鐵律：**AI 不編造內容**。未提供前一律留 `<!-- TODO -->` 佔位。

## C. 技術（P1）

- [ ] 🤖 專案 build 成功（`npm run build` 無錯）
- [ ] 🤖 每頁 `title` + `meta description` + `canonical` + Open Graph
- [ ] 🤖 JSON-LD：`Person`（`hasCredential`／`sameAs`）＋`ProfessionalService`＋`FAQPage`
- [ ] 🤖 語意 HTML：單一 `<h1>`、標題層級正確、`<img>` 有 `alt`
- [ ] 🤖 響應式測試（手機／平板／桌面）
- [ ] 🤖 內容不靠 JS 產生（靜態輸出）
- [ ] 🤖 效能：圖片壓縮、字型避免版面跳動
- [ ] 🤖 `404` 頁 + favicon
- [ ] 🤖 全站連結檢查（0 死連）

## D. AI／搜尋可爬（P1）

- [ ] 🤖 `robots.txt`：allow `OAI-SearchBot`／`Claude-SearchBot`／`Claude-User`／`PerplexityBot`／`Perplexity-User`；Training 類由使用者決定（建議先 `Disallow`）
- [ ] 🤖 `sitemap.xml`（`@astrojs/sitemap` 自動生成）
- [ ] 🤖 `llms.txt` — 低優先（除非發佈技術文件／工具）
- [ ] 👤 可選：`Content-Signal: search=yes, ai-input=yes, ai-train=no`
- [ ] 🤖 部署後驗證：瀏覽器開 `/robots.txt`、`/sitemap.xml` 睇得到

## E. 部署（P1）

- [ ] 🤖 GitHub repo 最新、`main` 乾淨、已 push
- [ ] 👤 Cloudflare Pages：Connect to Git（或 wrangler 上傳）
- [ ] 👤 Build 設定：Framework **Astro**／Build command `npm run build`／Output `dist`
- [ ] ⚠️ 👤 Dashboard 核對 **Search／Agent／Training** 三類設定（2026-09-15 新預設）
- [ ] ⚠️ 👤 **切勿按「Block AI bots」一鍵**（會連 Googlebot／Applebot／BingBot 一起封）
- [ ] 👤 綁自訂網域（apex ↔ www 301）
- [ ] 🤖 驗證 HTTPS、手機版、所有頁面可開

## F. 上線後即刻做（P1）

- [ ] 👤 Bing Webmaster Tools 提交 sitemap（**最關鍵**，ChatGPT／Copilot 用 Bing 索引）
- [ ] 👤 Google Search Console 提交 sitemap
- [ ] 🤖 Rich Results Test 驗 JSON-LD
- [ ] 🤖 實測 AI：問 ChatGPT／Claude／Gemini「Walter Liu 是誰、做什麼」
- [ ] 👤 LinkedIn／GitHub 加網站連結（最快的外部連結）
- [ ] 🤖 監察：Cloudflare logs（非 GA4）睇實際 bot

## G. 明確唔做（反效果）

- [ ] ❌ 買連結／垃圾外鏈
- [ ] ❌ 關鍵字堆砌
- [ ] ❌ 為流量寫 100 篇空泛 blog
- [ ] ❌ 誤按 Cloudflare「Block AI bots」一鍵
- [ ] ❌ 把 `llms.txt` 當主力

---

## 現況快照（2026-09-11）

| 項目 | 狀態 |
|---|---|
| GitHub repo | ✅ 已 push（`walter0509HK/personal-website`） |
| gh 認證 | ✅ 已登入 |
| vCard 版型＋英文版 | ✅ 已上 GitHub |
| 真實內容 | ⛔ 未提供 |
| 姓名／網域定案 | ⛔ 最優先（現時 `index.html` 仍寫 Walter Ho） |
| Cloudflare 部署 | ⛔ 未做 |
| Astro 重構 | ⏳ 未動工（使用者選 B） |

## 執行順序

```
① 確認姓名＋網域（apex/www）
② Codex 做姓名統一（網站＋vault）
③ 使用者提供內容
④ Codex 開 Astro（骨架＋設計變數＋內容）
⑤ 部署 Cloudflare＋提交索引（Bing 優先）
```
