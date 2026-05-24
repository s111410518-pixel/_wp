const cartJSON = '[{"item": "滑鼠", "price": 600, "count": 2}, {"item": "鍵盤", "price": 1200, "count": 1}]';

function calculateTotal(cartJsonStr) {
    const cartArray = JSON.parse(cartJsonStr);
    let totalPrice = 0;
    
    for (let i = 0; i < cartArray.length; i++) {
        const product = cartArray[i];
        // 累加：價格 * 數量
        totalPrice += product.price * product.count; 
    }
    
    return totalPrice;
}

// 測試執行
console.log("購物車結帳總金額為：" + calculateTotal(cartJSON) + " 元");