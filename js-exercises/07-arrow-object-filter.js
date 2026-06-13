/**
 * 題目 7：箭頭函數處理物件
 *
 * 給定 users = [{name: "Alice", age: 25}, {name: "Bob", age: 17}]
 * 使用 filter + 箭頭函數篩選 age >= 18 的人。
 */

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
]

const adults = users.filter((user) => user.age >= 18)

console.log(adults) // [{ name: "Alice", age: 25 }]
