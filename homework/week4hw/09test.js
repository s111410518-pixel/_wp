const jsonString = '{"success": true, "user": {"name": "Alex", "role": "admin"}}';

function verifyAdmin(jsonStr) {
    // 將 JSON 字串解析為 JavaScript 物件
    const data = JSON.parse(jsonStr);
    
    if (data.success === true && data.user.role === "admin") {
        return `歡迎管理員！${data.user.name}。`;
    } else {
        return "權限不足或連線失敗";
    }
}

// 測試執行
console.log(verifyAdmin(jsonString));