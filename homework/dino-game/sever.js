const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 啟用 JSON 解析與靜態檔案服務
app.use(express.json());
app.use(express.static(__dirname));

// 暫存的排行榜資料（實際專案可換成 MongoDB 或 Redis）
let leaderboard = [
    { name: "AlphaDino", score: 1200 },
    { name: "Rex", score: 800 },
    { name: "Pixel", score: 500 }
];

// API 1: 取得前 5 名排行榜
app.get('/api/leaderboard', (req, res) => {
    // 依分數從高到低排序，只取前 5 名
    const topScores = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
    res.json(topScores);
});

// API 2: 提交新分數
app.post('/api/leaderboard', (req, res) => {
    const { name, score } = req.body;
    if (!name || score === undefined) {
        return res.status(400).json({ error: "欄位不完整" });
    }
    
    leaderboard.push({ name, score: parseInt(score) });
    res.json({ message: "分數提交成功！", success: true });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`🚀 遊戲伺服器已啟動：http://localhost:${PORT}`);
});