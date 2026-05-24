const fruitInventory = [
    { name: "蘋果", stock: 10 },
    { name: "香蕉", stock: 3 },
    { name: "西瓜", stock: 8 },
    { name: "草莓", stock: 2 }
];

function checkLowStock(inventory) {
    console.log("【庫存警報檢查】");
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].stock < 5) {
            console.log(`注意：${inventory[i].name} 庫存只剩 ${inventory[i].stock} 個，請儘快補貨！`);
        }
    }
}

// 測試執行
checkLowStock(fruitInventory);