# EliteStore v3 — 專業版

> 使用 React + Vite + React Router + Zustand 建置的完整電商網站，涵蓋商品瀏覽、詳情、購物車、結帳、訂單確認完整流程，具備專業級 UI 設計。

## 技術棧

- **React 18** — UI 框架
- **Vite 6** — 建置工具
- **React Router v6** — 用戶端路由
- **Zustand v5** — 輕量狀態管理

## 功能

- **首頁** — Hero 橫幅、分類入口、精選推薦
- **商品列表** — 分類篩選、關鍵字搜尋、排序（價格／評價／名稱）、空結果提示
- **商品詳情** — 完整資訊、數量選擇、即時小計、相關商品推薦
- **購物車** — 側邊抽屜 + 獨立頁面、數量調整、免運機制（滿 NT$ 2,000）
- **結帳** — 表單驗證（姓名／手機／Email／地址）、訂單摘要
- **訂單確認** — 訂單編號生成、收件資訊、商品明細
- **404 處理** — 商品不存在提示

## 專案結構

```
v3-enterprise/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # 深色導覽列（購物車徽章）
│   │   ├── CartDrawer.jsx    # 側邊購物車抽屜
│   │   ├── ProductCard.jsx   # 商品卡片（標籤、折扣、評分）
│   │   └── Footer.jsx        # 網站底部
│   ├── store/
│   │   └── cartStore.js      # Zustand 購物車 Store
│   ├── data/
│   │   └── products.js       # 12 項完整商品資料
│   ├── pages/
│   │   ├── HomePage.jsx           # 首頁
│   │   ├── ProductsPage.jsx       # 商品列表（搜尋／排序／分類）
│   │   ├── ProductDetailPage.jsx  # 商品詳情
│   │   ├── CartPage.jsx           # 購物車頁面
│   │   ├── CheckoutPage.jsx       # 結帳（表單驗證）
│   │   └── OrderConfirmPage.jsx   # 訂單確認
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # CSS 變數主題系統
├── index.html
├── package.json
└── vite.config.js
```

## 啟動

```bash
cd v3-enterprise
npm install
npm run dev
```

## 設計風格

- 深色主色調（`#1a1a2e`）+ 紅色強調色（`#e94560`）
- 金色評分星級（`#f5a623`）
- CSS 自定義屬性主題系統
- 專業級陰影與過渡動畫
- 完整 RWD 響應式設計

## 路由

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁 |
| `/products` | 商品列表 |
| `/products/:id` | 商品詳情 |
| `/cart` | 購物車 |
| `/checkout` | 結帳 |
| `/order-confirm` | 訂單確認 |
