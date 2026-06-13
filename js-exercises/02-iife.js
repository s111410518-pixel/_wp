/**
 * 題目 2：匿名函數與立即執行 (IIFE)
 *
 * 寫出一個 IIFE，內部定義 count = 100，並在控制台印出 "Count is: 100"。
 * 確保外部無法存取 count。
 */

;(function () {
  const count = 100
  console.log('Count is: ' + count)
})()

// console.log(typeof count) // ReferenceError: count is not defined
