/**
 * 題目 3：箭頭函數與陣列轉換
 *
 * 給定 prices = [100, 200, 300, 400]
 * 使用 map + 箭頭函數產生打八折後的新陣列。
 */

const prices = [100, 200, 300, 400]

const discounted = prices.map((p) => p * 0.8)

console.log(discounted) // [80, 160, 240, 320]
