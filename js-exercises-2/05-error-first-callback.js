/**
 * 題目 5：Callback 函數傳參 (Error-First Callback)
 *
 * 撰寫 fetchData(id, callback) 模擬從資料庫抓取資料。
 * callback 的第一個參數是錯誤（null 代表無錯誤），第二個是資料物件。
 */

function fetchData(id, callback) {
  const fakeData = { id: id, status: 'success' }
  callback(null, fakeData)
}

fetchData(101, (err, data) => {
  if (err) {
    console.log('發生錯誤：' + err)
  } else {
    console.log('成功取得資料：', data)
    // 預期輸出：成功取得資料： { id: 101, status: 'success' }
  }
})
