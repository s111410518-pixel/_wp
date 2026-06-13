/**
 * 題目 5：函數回傳函數 (Higher-Order Function)
 *
 * 寫一個 multiplier(factor)，回傳一個箭頭函數，
 * 該函數接受 n 並回傳 n * factor。
 */

function multiplier(factor) {
  return (n) => n * factor
}

const double = multiplier(2)
console.log(double(10)) // 20

const triple = multiplier(3)
console.log(triple(10)) // 30
