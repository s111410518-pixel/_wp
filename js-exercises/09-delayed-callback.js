/**
 * 題目 9：延遲執行的 Callback
 *
 * 使用 setTimeout，2 秒後用箭頭函數
 * 印出 ["Task", "Completed"] 組合的字串 "Task Completed"。
 */

setTimeout(() => {
  const words = ['Task', 'Completed']
  console.log(words.join(' ')) // "Task Completed"
}, 2000)
