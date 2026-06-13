/**
 * 題目 1：Callback 基礎實作
 *
 * 建立一個 mathTool 函數，接受三個參數：num1, num2, action（回呼函數）。
 * 分別傳入匿名函數達成「相加」與「相減」。
 */

function mathTool(num1, num2, action) {
  return action(num1, num2)
}

// 相加
const result1 = mathTool(10, 5, function (a, b) {
  return a + b
})
console.log(result1) // 15

// 相減
const result2 = mathTool(10, 5, function (a, b) {
  return a - b
})
console.log(result2) // 5
