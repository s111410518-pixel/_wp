/**
 * 題目 8：樣板字串中的邏輯運算 (Template Literals with Logic)
 *
 * 宣告 user = "Guest"。用反引號建立 HTML 字串，
 * 判斷 user 有值就顯示 user，否則顯示 "Stranger"。
 */

const user = 'Guest'

const html = `<h1>Welcome, ${user || 'Stranger'}</h1>`

console.log(html) // <h1>Welcome, Guest</h1>
