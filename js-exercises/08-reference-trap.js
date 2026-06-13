/**
 * 題目 8：參數傳址陷阱 — 重新賦值 vs 修改
 *
 * 請問執行後 listA 與 listB 的內容分別是什麼？為什麼？
 */

let listA = [1, 2]
let listB = [3, 4]

function process(a, b) {
  a.push(99)
  b = [100]
}

process(listA, listB)

console.log('listA:', listA) // [1, 2, 99]
console.log('listB:', listB) // [3, 4]

/**
 * 解答：
 *
 * listA 變成 [1, 2, 99]，因為 a 與 listA 指向同一個陣列，
 * a.push(99) 修改了這個共享陣列的內容（傳址修改）。
 *
 * listB 仍是 [3, 4]，因為 b = [100] 是將參數 b 重新指向
 * 一個新陣列，並沒有修改原本 listB 所指向的陣列（重新賦值）。
 */
