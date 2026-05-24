function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]; // 累加成績
    }
    const average = total / scores.length;
    return average;
}

// 測試執行
const myScores = [80, 95, 76, 88, 100];
console.log("平均分數為：" + calculateAverage(myScores));