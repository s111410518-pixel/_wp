/**
 * 題目 6：JSON 處理 (Parsing JSON)
 *
 * 給定 jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}'。
 * 轉成 JS 物件後印出 tags 陣列的第二個元素。
 */

const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}'

const obj = JSON.parse(jsonStr)
console.log(obj.tags[1]) // "node"
