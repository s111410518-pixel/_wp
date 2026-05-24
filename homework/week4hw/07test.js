function findMaxAndMin(numbers) {
    // 預設第一個數字同時是最大與最小值
    let max = numbers[0];
    let min = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; // 更新最大值
        }
        if (numbers[i] < min) {
            min = numbers[i]; // 更新最小值
        }
    }
    
    return { max: max, min: min };
}

// 測試執行
const mixNumbers = [23, 5, 87, 42, -10, 66];
const result = findMaxAndMin(mixNumbers);
console.log(result);