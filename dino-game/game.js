const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const leaderboardView = document.getElementById("leaderboardView");

// 遊戲變數
let dino = { x: 50, y: 150, width: 30, height: 30, vy: 0, gravity: 0.6, jumpForce: -10, isGrounded: true };
let obstacles = [];
let score = 0;
let isGameOver = false;
let gameSpeed = 5;
let spawnTimer = 0;

// 監聽跳躍動作
window.addEventListener("keydown", (e) => { if (e.code === "Space") handleJump(); });
canvas.addEventListener("click", handleJump);

function handleJump() {
    if (isGameOver) {
        resetGame();
    } else if (dino.isGrounded) {
        dino.vy = dino.jumpForce;
        dino.isGrounded = false;
    }
}

// 遊戲初始化/重置
function resetGame() {
    dino.y = 150;
    dino.vy = 0;
    dino.isGrounded = true;
    obstacles = [];
    score = 0;
    gameSpeed = 5;
    isGameOver = false;
    loop();
}

// 核心遊戲迴圈
function loop() {
    if (isGameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. 恐龍物理模擬 (重力)
    dino.vy += dino.gravity;
    dino.y += dino.vy;
    if (dino.y >= 150) { // 踩到地面
        dino.y = 150;
        dino.vy = 0;
        dino.isGrounded = true;
    }

    // 繪製恐龍 (綠色方塊)
    ctx.fillStyle = "#2ecc71";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

    // 2. 障礙物生成與移動 (仙人掌)
    spawnTimer++;
    if (spawnTimer > Math.random() * 40 + 70) { // 隨機間隔生成
        obstacles.push({ x: canvas.width, y: 150, width: 20, height: 30 });
        spawnTimer = 0;
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.x -= gameSpeed;

        // 繪製障礙物 (紅色方塊)
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

        // 3. 碰撞偵測
        if (dino.x < obs.x + obs.width &&
            dino.x + dino.width > obs.x &&
            dino.y < obs.y + obs.height &&
            dino.y + dino.height > obs.y) {
            endGame();
        }

        // 移除超出螢幕的障礙物
        if (obs.x + obs.width < 0) {
            obstacles.splice(i, 1);
            score += 10; // 成功躲過加 10 分
            gameSpeed += 0.1; // 越玩越快
        }
    }

    // 繪製分數
    ctx.fillStyle = "#333";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 20, 30);

    requestAnimationFrame(loop);
}

// 遊戲結束與後端 API 串接
async function endGame() {
    isGameOver = true;
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER - 點擊畫面重新開始", 160, 110);

    // 延遲跳出輸入框，避免卡到點擊事件
    setTimeout(async () => {
        const name = prompt(`遊戲結束！你得到了 ${score} 分！\n請輸入你的名字登入排行榜：`);
        if (name) {
            // POST 上傳分數
            await fetch('/api/leaderboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, score })
            });
            // 重新整理排行榜顯示
            loadLeaderboard();
        }
    }, 100);
}

// 從伺服器取得最新排行榜 (GET)
async function loadLeaderboard() {
    try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();
        leaderboardView.innerHTML = data.map(player => 
            `<li><strong>${player.name}</strong>: ${player.score} 分</li>`
        ).join('');
    } catch (err) {
        leaderboardView.innerHTML = "<li>無法載入排行榜</li>";
    }
}

// 初始化啟動
loadLeaderboard();
resetGame();