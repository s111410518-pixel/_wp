# MiniShop v1 — 簡潔版

> 使用 React + Vite 建置的最小化電商網站，以 `useState` 管理狀態，單頁式購物體驗。

## 技術棧

- **React 18** — UI 框架
- **Vite 6** — 建置工具
- **狀態管理：useState**

## 功能

- 商品列表展示（8 項精選商品）
- 加入／移除購物車
- 購物車數量調整（+/-）
- 購物車側邊面板（滑入動畫）
- 即時總價計算

## 專案結構

```
v1-basic/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # 頂部導覽列
│   │   ├── ProductList.jsx   # 商品列表
│   │   ├── ProductCard.jsx   # 單一商品卡片
│   │   └── Cart.jsx          # 購物車側邊面板
│   ├── data/
│   │   └── products.js       # 商品資料
│   ├── App.jsx               # 主元件（狀態集中管理）
│   ├── main.jsx              # 進入點
│   └── index.css             # 全域樣式
├── index.html
├── package.json
└── vite.config.js
```

## 啟動

```bash
cd v1-basic
npm install
npm run dev
```

## 設計風格

- 極簡白底配色
- 卡片 hover 上浮效果
- 側邊購物車滑入動畫
- 無多餘依賴，輕量快速
