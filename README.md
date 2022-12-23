# Vue3 New Project Template
> 給自己方便的新專案模板

## 使用套件
- vue3
- vite
- tailwindcss
- dayjs
- eslint
- perttier

## 開發

### 環境
- Node.js >= 18
- pnpm >= 7

### 安裝套件
```sh
pnpm i
```

### 啟動本地開發環境 Server
```sh
pnpm dev
```

### 規範

#### General
- 使用 VS Code，並安裝 repo 中建議的 extension
- Git Commit 訊息格式參考：[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- 檔案、路徑名稱使用 `kebab-case`

#### HTML
- 優先使用最符合語意的標籤
- 標籤內無內容/子元素時，使用 `/>` 省略結尾標籤
- `<img>` 須加上 `alt`，視情況使用 `loading="lazy"`
- 父子標籤應為合法關係
  - e.g.: `<p>`包 `<div>` 為非法關係，會造成 SSR/SPA 渲染時有差異而導致錯誤
- 使用框架時，自訂組件名稱使用 `PascalCase`
- 使用框架時，自訂組件名稱不要與 HTML 原生標籤重複（無論大小寫）
- 易用性
  - 手機的點擊區域大小至少須為 `32x32`
  - 可點擊的區域一定要是 `<a>` 或 `<button>`
  - 正確的使用 Heading levels

#### CSS / SCSS
- class 名稱、CSS/SCSS 變數名稱、SCSS mixin/function 等名稱使用 `kebab-case`
- 元素結構複雜時可自訂無樣式的 class 輔助開發者閱讀
  - 更複雜時使用 BEM 命名
- SCSS 巢狀結構不超過五層 - 巢狀過深會讓 css 檢索速度變慢，產出的 CSS 大小也會暴增
- Tailwind
  - 當可選擇 @apply 及 class 時，優先使用 class - 最小化自訂的 CSS

#### JavaScript / TypeScript
- 變數名稱使用 camelCase
  - 值為 boolean 時，加上 is 、are、has 前綴
    - 例如：`isAdmin`，`hasEncryption`
- 函式名稱使用 camelCase
  - 應明確的描述這個函式在做什麼
  - 加上動詞前綴
    - 例如：`getName`，`fetchData`，`handleClick`
- 建構子/類別名稱使用 `PascalCase`
- 常數使用 `UPPER_SNAKE_CASE`
- 避免自創縮寫
  - 不好的範例：`list` → `lst`、`analysis` → `anal`
- 避免使用過於中性的詞彙
  - 例如：`fetchData`、`getInfo`、`result`、`DEFAULT_DATA`
- 未列出事項應遵守 eslint & prettier 的規範
- 在效能差不多的情況下，易於閱讀、維護，比程式簡潔更重要

#### Vue / Nuxt
- 優先使用 Composition API 撰寫組件
- 盡量避免在父元素直接操作子元素的 state/method - 這會造成隱性的耦合