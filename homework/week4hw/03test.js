function printMultiplicationTable(number) {
    console.log(`--- 開始列印 ${number} 的乘法表 ---`);
    for (let i = 1; i <= 9; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// 測試執行
printMultiplicationTable(7);