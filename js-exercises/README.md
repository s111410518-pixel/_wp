# JavaScript 函數與陣列實作練習 — 解答

> 對應 [ccc114b/_wp Issue #16](https://github.com/ccc114b/_wp/issues/16) 的 10 題 JavaScript 函數與參數練習題解答。

## 題目列表

| 題號 | 主題 | 說明 |
|------|------|------|
| 01 | Callback 基礎實作 | 建立 `mathTool` 函數，透過 callback 達成加減運算 |
| 02 | IIFE | 立即執行函數封裝區域變數 |
| 03 | 箭頭函數 + map | 陣列價格打八折轉換 |
| 04 | 破壞性修改 | 函數內修改傳入的陣列（pop / unshift） |
| 05 | Higher-Order Function | `multiplier` 回傳新函數 |
| 06 | 自訂 filter | 手寫 `myFilter` 模擬陣列 filter |
| 07 | 箭頭函數 + filter | 篩選物件陣列中成年者 |
| 08 | 傳址陷阱 | 重新賦值 vs 修改的差異 |
| 09 | setTimeout | 延遲 callback 組合字串 |
| 10 | 綜合計算總價 | callback 處理折扣邏輯 |

## 使用方式

每個題目為獨立檔案，可用 Node.js 直接執行：

```bash
node js-exercises/01-callback-basic.js
node js-exercises/02-iife.js
# ...依此類推
```

或全部執行：

```bash
for f in js-exercises/0*.js; do echo "=== $f ===" && node "$f"; done
```

## 學習重點

- **Callback 模式** — 將函數作為參數傳遞
- **IIFE** — 立即執行、封閉作用域
- **箭頭函數** — 簡潔寫法與隱式回傳
- **傳值 vs 傳址** — 陣列與物件的參考特性
- **Higher-Order Function** — 函數回傳函數
- **陣列方法** — map / filter / reduce / pop / unshift / join
- **非同步** — setTimeout 與延遲執行
