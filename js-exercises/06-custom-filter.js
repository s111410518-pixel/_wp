/**
 * 題目 6：Callback 篩選器
 *
 * 手寫 myFilter(arr, callback)。
 * 遍歷 arr，若 callback(item) 為 true 則放入新陣列。
 * 測試篩選 [1, 5, 8, 12] 中大於 7 的數字。
 */

function myFilter(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

const numbers = [1, 5, 8, 12]
const filtered = myFilter(numbers, (item) => item > 7)

console.log(filtered) // [8, 12]
