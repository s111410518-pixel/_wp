/**
 * 題目 3：陣列的遍歷與字串拼接 (Array forEach & Template Literals)
 *
 * 給定 posts = [{id: 1, t: "A"}, {id: 2, t: "B"}]。
 * 用 forEach 遍歷陣列，拼成 <div>A</div><div>B</div> 格式。
 */

const posts = [
  { id: 1, t: 'A' },
  { id: 2, t: 'B' },
]

let html = ''
posts.forEach((post) => {
  html += `<div>${post.t}</div>`
})

console.log(html) // <div>A</div><div>B</div>
