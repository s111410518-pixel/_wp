function checkTemperature(celsius) {
    // 修正防呆：確保傳入的是可以計算的數字
    const parsedCelsius = Number(celsius);
    if (isNaN(parsedCelsius)) {
        return "錯誤：請輸入有效的溫度數字！";
    }

    // 計算華氏溫度
    const fahrenheit = parsedCelsius * 1.8 + 32;
    console.log(`攝氏 ${parsedCelsius}°C 轉換為華氏為 ${fahrenheit.toFixed(1)}°F`);
    
    // 簡化判斷邏輯，由高到低，避免寫複雜的 &&
    if (fahrenheit > 100) {
        return "太熱了！";
    } else if (fahrenheit >= 50) {
        return "很舒適！"; 
    } else {
        return "太冷了！";
    }
}

// ======= 測試各種狀況 =======

// 1. 正常數字測試
console.log(checkTemperature(25));    

// 2. 傳入字串型態的數字（優化後可正常辨識）
console.log(checkTemperature("5"));   

// 3. 惡意輸入（觸發防呆機制）
console.log(checkTemperature("太極"));