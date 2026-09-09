# AGENTS.md（個人品牌網站編碼標準）

> 用途：任何 AI（DeepSeek Flash/Pro 等）在本專案寫 code 時的統一標準。
> 位置：網站 repo 根目錄（自動載入）。
> 最後更新：2026-08-31（Codex 草擬）

## 一、專案基本資料
- 網站：Walter Ho 個人品牌（CPA｜IT 稽核｜網絡安全顧問）
- 型態：**一頁式靜態網站**（純 HTML/CSS，無 build 工具、無框架、無後端）
- 部署：Cloudflare Pages（免費）
- 語言：**先全英語（en）**；穩定後再以「每語言一個 HTML 檔」追加 ja／zh-Hant／zh-Hans（樣式共用 css/style.css）
- 內容來源：vault `01-Projects/personal-website/`（Obsidian），**AI 不擅自編造內容**

## 二、HTML 規範
1. 使用語意化標籤：`<header>`、`<main>`、`<section>`、`<footer>`、`<nav>`、`<h1>`–`<h3>`
2. 單一 `<h1>`（品牌名）；其餘標題依層級遞減
3. `<html lang="zh-Hant">`、`<meta charset="UTF-8">`、`<meta name="viewport">` 必備
4. 每個 `<img>` 必須有 `alt`（無障礙）；無圖時用 `onerror` 隱藏（現有做法）
5. 不放 inline style／script（統一用 `css/style.css`；JS 另建檔案）
6. 註解用 `<!-- ===== 區域名稱 ===== -->` 標示結構（與現有 index.html 一致）
7. TODO 事項用 `<!-- TODO: ... -->` 標記，方便使用者追蹤

## 三、CSS 規範
1. 統一放 `css/style.css`，用區塊註解分段（`/* ===== 基礎 ===== */` 等）
2. 遵循現有設計系統：
   - 主色：深藍漸層（`#0f172a` → `#1e3a5f`）
   - 文字色：`#1f2937`／標題 `#111827`
   - 背景：白 `#ffffff`
   - 字型：`-apple-system, "PingFang HK", "Microsoft JhengHei", sans-serif`
   - 容器寬：`max-width: 960px`
3. 響應式：行動裝置優先；斷點建議 768px；不破壞現有 `.container` 結構
4. 一律用 class，不用 id 做樣式（id 留給錨點）
5. 動畫／特效**克制**——賣內容不是賣動畫；除非使用者要求
6. 不引第三方 CSS 框架（Tailwind/Bootstrap）——本專案保持零依賴

## 四、資安規範（重要）
1. **永不**寫入密碼、API key、token 到任何檔案（含 HTML 註解）
2. 外部資源（字型、圖片）一律用 `https://`；不載入不明第三方 script
3. 表單處理（若將來加）：不直接用 mailto 暴露電郵；優先 Cloudflare Pages Functions（見 vault Workers 參考）
4. 不放客戶敏感資料到網站（公開網站，全世界可見）
5. 頭像／個人資料公開前，確認使用者授權
6. 不加入任何追蹤／分析 script，除非使用者明確要求

## 五、部署流程（Cloudflare Pages）
```bash
# 1. push 到 GitHub
cd ~/Documents/Codex/personal-website
git add -A && git commit -m "描述"
git push origin main

# 2. Cloudflare 自動部署（已連接後）
# Dashboard → Pages → 該專案 → 自動觸發
```
- 詳細 runbook 見 `DEPLOY.md`
- 部署前必查：① `git status` 乾淨 ② 無 TODO 遺漏 ③ 圖片路徑正確 ④ 繁體中文正常顯示
- 改完 `index.html`／`style.css` 後，本地用 `open index.html` 預覽再 commit

## 六、內容來源規則（防編造）
1. **內容一律來自 vault**：`01-Projects/personal-website/00-專案簡介.md`＋使用者提供的素材
2. 定位句、數字證明、經歷、電郵、頭像 → **使用者提供**，AI 不代編
3. 缺資料時：留 `<!-- TODO: ... -->` 標記，**不填假資料**
4. 專業資歷（CPA/CISSP 等）→ 以 `Codex/User-Profile.md` 為準，不自行增減
5. 每段上線內容，使用者最終審閱（AGENTS.md 全域鐵律：先提案→批准→執行）

## 七、模型策略（省 token）
- **建站用 Flash**：靜態頁面勝任
- **上線前 Pro 審一輪**：檢查品質
- 一次做完、不分多次（重讀 context 燒 token）
- 先給齊內容再動手（避免來回）

## 八、與全域規則的關係
- 本文件是「網站編碼標準」；全域 `~/.codex/AGENTS.md` 是「AI 工作鐵律」
- 兩者並存：全域管「怎麼協作」，本文件管「這個網站怎麼寫」
