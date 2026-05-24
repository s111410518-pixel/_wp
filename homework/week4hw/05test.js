// 建立角色物件
const hero = {
    name: "亞瑟",
    hp: 100,
    level: 5
};

function attackHero(damage) {
    hero.hp -= damage; // 扣除生命值
    
    if (hero.hp <= 0) {
        hero.hp = 0;
        console.log(`${hero.name} 受到 ${damage} 點傷害。角色已陣亡！`);
    } else {
        console.log(`${hero.name} 受到 ${damage} 點傷害。剩餘生命值：${hero.hp}`);
    }
}

// 測試執行
attackHero(30);
attackHero(80); // 這一下會陣亡