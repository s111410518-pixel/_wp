function countdown(start) {
    let count = start;
    while (count >= 0) {
        if (count === 0) {
            console.log("時間到！");
        } else if (count % 3 === 0) {
            console.log("閃爍！");
        } else {
            console.log(count);
        }
        count--; // 每次迴圈減 1
    }
}

// 測試執行
countdown(5);