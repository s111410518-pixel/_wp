# JavaScript 部落格實作練習 — 解答

> 對應 [ccc114b/_wp Issue #17](https://github.com/ccc114b/_wp/issues/17) 的 10 題 JavaScript 練習題解答。
>
> 完成後就能看懂 Express 部落格範例中「資料如何從資料庫流向網頁」的完整流程。

## 題目列表

| 題號 | 主題 | 對應部落格概念 |
|------|------|----------------|
| 01 | 物件屬性存取 | `post.title` 點符號／中括號存取 |
| 02 | 物件解構賦值 | `const { title, content } = req.body` |
| 03 | forEach + 樣板字串 | 首頁文章列表產生 `html` |
| 04 | 動態參數字典 | `req.params.id` 的來源 |
| 05 | Error-First Callback | `fetchData` 模擬非同步資料回傳 |
| 06 | JSON.parse | `express.json()` 解析請求主體 |
| 07 | 模擬資料庫查詢 | `fakeGet` 模仿 `db.get(sql, params, callback)` |
| 08 | 樣板邏輯運算 | `user \|\| "Stranger"` 動態網頁產生 |
| 09 | 字串切片 | 摘要前 10 字元 + `...` |
| 10 | 錯誤優先回呼 | `if (err) return ...` 的運作邏輯 |

## 使用方式

每個檔案皆可獨立執行：

```bash
node js-exercises-2/01-object-property-access.js
node js-exercises-2/02-object-destructuring.js
# ...依此類推
```

## 與 Express 部落格的對應關係

做完這十題後，重新閱讀部落格原始碼時可以注意：

1. **第 10 題** → 所有 `db.xxx` 的 `(err, row) => { ... }` 結構
2. **第 2 題** → `app.post('/posts')` 內 `req.body` 的解構賦值
3. **第 3 題** → 首頁 `posts.forEach` 產生文章列表
4. **第 8 題** → 整個 `` let html = `...` `` 的動態網頁產生
5. **第 5、7 題** → Callback 傳遞資料的模式
6. **第 6 題** → `app.use(express.json())` 的作用
