/**
 * 題目 10：錯誤優先回呼模式 (Error-First Callback Pattern)
 *
 * 寫一個 checkAdmin(role, callback)。
 * role 不是 "admin" 時呼叫 callback("Access Denied")，
 * 是 "admin" 時呼叫 callback(null, "Welcome")。
 */

function checkAdmin(role, callback) {
  if (role !== 'admin') {
    callback('Access Denied')
  } else {
    callback(null, 'Welcome')
  }
}

// 測試：非 admin 情況
checkAdmin('user', (err, msg) => {
  if (err) {
    console.log('錯誤：', err) // 錯誤： Access Denied
  } else {
    console.log(msg)
  }
})

// 測試：admin 情況
checkAdmin('admin', (err, msg) => {
  if (err) {
    console.log('錯誤：', err)
  } else {
    console.log(msg) // Welcome
  }
})
