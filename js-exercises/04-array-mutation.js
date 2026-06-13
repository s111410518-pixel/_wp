/**
 * 題目 4：陣列參數的「破壞性修改」
 *
 * 撰寫 cleanData(arr)：移除陣列最後一個元素，並在最前面加上 "Start"。
 * 驗證原陣列 myData 被改變。
 */

function cleanData(arr) {
  arr.pop()
  arr.unshift('Start')
}

let myData = [1, 2, 3]
cleanData(myData)

console.log(myData) // ["Start", 1, 2]
