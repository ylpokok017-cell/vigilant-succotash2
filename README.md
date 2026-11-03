# 小學語文互動遊戲樂園

純靜態 HTML 遊戲，不需要伺服器或建置步驟即可執行。

## GitHub Pages

將整個資料夾上載到 GitHub repository 的根目錄，於 repository 的 **Settings → Pages** 選擇從分支根目錄發布。`index.html` 是入口頁，所有頁面與樣式均使用相對路徑，可直接在 `username.github.io/repository/` 子路徑運作。

`.nojekyll` 已加入，GitHub Pages 會直接提供這些靜態檔案。

## 更新樣式

`assets/tailwind.css` 是已編譯的本機樣式。若修改 HTML 的 Tailwind class，請重新產生：

```powershell
npx --yes tailwindcss@3.4.17 -i .\tailwind-input.css -o .\assets\tailwind.css --content ".\*.html" --minify
```
