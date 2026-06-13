# ShopWave v2 — 現代版

> 使用 React + Vite + React Router 建置的多頁面電商網站，以 Context API + useReducer 管理購物車狀態，搭配漸層主題設計。

## 技術棧

- **React 18** — UI 框架
- **Vite 6** — 建置工具
- **React Router v6** — 用戶端路由
- **狀態管理：Context API + useReducer**

## 功能

- 首頁 Hero 橫幅 + 熱門商品推薦
- 商品分類篩選（電子／生活／配件）
- 商品關鍵字搜尋
- 商品加入購物車
- 購物車頁面（數量調整、訂單摘要）
- 三頁路由：首頁 / 商品 / 購物車

## 專案結構

```
v2-modern/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # 黏性導覽列（漸層背景）
│   │   └── ProductCard.jsx   # 商品卡片元件
│   ├── context/
│   │   └── CartContext.jsx    # 購物車 Context（useReducer）
│   ├── data/
│   │   └── products.js       # 商品資料（含描述）
│   ├── pages/
│   │   ├── HomePage.jsx      # 首頁（Hero + 推薦商品）
│   │   ├── ProductsPage.jsx  # 商品列表（搜尋 + 分類）
│   │   └── CartPage.jsx      # 購物車頁面（訂單摘要）
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 啟動

```bash
cd v2-modern
npm install
npm run dev
```

## 設計風格

- 紫藍漸層主色調（`#667eea → #764ba2`）
- 毛玻璃效果導覽列
- 卡片 hover 上浮 + 頂部漸層邊框
- 搜尋框與分類標籤互動
- 購物車空狀態提示
