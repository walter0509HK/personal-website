# Walter Ho 個人品牌網站

一頁式個人品牌網站（純 HTML/CSS，無需 build 工具）。

## 結構
- `index.html` — 主頁（繁體中文）
- `css/style.css` — 樣式
- `assets/` — 放相片（如 profile.jpg）

## 部署（Cloudflare Pages）
1. 將此資料夾 push 到 GitHub repo
2. Cloudflare Dashboard → Pages → Create Project → 連接該 repo
3. Build 設定：Framework 選「None」、Build command 留空、Output directory 填 `/`（或留空）
4. 部署完成後可用 `https://<project>.pages.dev` 瀏覽

## 待辦（TODO）
- [ ] 填上真實內容（定位句、數字、經歷、電郵）
- [ ] 放專業頭像 assets/profile.jpg
- [ ] （選配）英文版 en.html
