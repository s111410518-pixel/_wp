/**
 * 題目 10：綜合應用 — 計算總價
 *
 * 寫一個函數 calculateTotal(cart, discountFunc)。
 * cart 是價格陣列，先相加，再傳入 discountFunc 處理後回傳。
 * 測試：[100, 200, 300]，匿名函數扣除 50 元。
 */

function calculateTotal(cart, discountFunc) {
  const sum = cart.reduce((acc, price) => acc + price, 0)
  return discountFunc(sum)
}

const cart = [100, 200, 300]
const total = calculateTotal(cart, function (total) {
  return total - 50
})

console.log(total) // 550
