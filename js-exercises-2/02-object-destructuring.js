/**
 * 題目 2：物件解構賦值 (Object Destructuring)
 *
 * 給定 req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } }。
 * 用一行程式碼從 req.body 取出 title 和 content。
 */

const req = { body: { title: 'JS教學', content: '內容在此', author: 'Gemini' } }

const { title, content } = req.body

console.log(title)   // "JS教學"
console.log(content) // "內容在此"
