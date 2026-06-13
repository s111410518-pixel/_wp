/**
 * 題目 1：物件屬性存取 (Object Property Access)
 *
 * 宣告 post 物件 { id: 1, title: "Hello World", content: "Markdown content" }。
 * 分別用點符號與中括號印出 title。
 */

const post = {
  id: 1,
  title: 'Hello World',
  content: 'Markdown content',
}

// 點符號 (Dot notation)
console.log(post.title)

// 中括號 (Bracket notation)
console.log(post['title'])
