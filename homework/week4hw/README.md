## 習題4
AI 問答 --https://gemini.google.com/share/2030cfe00314
## 摘要
沒問題！這裡為你把這 10 道題目的完整 JavaScript 程式碼寫出來，並附上在主控台（Console）執行的輸出結果。

你可以直接複製這些程式碼到網頁的開發者工具（F12 -> Console）或 Node.js 環境中執行喔！
## 我的測試結果
```sh
....

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 01test.js
攝氏 25°C 轉換為華氏為 77.0°F
很舒適！
攝氏 5°C 轉換為華氏為 41.0°F
太冷了！
錯誤：請輸入有效的溫度數字！

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 02test.js
5
4
閃爍！
2
1
時間到！

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 03test.js
--- 開始列印 7 的乘法表 ---
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 04test.js
平均分數為：87.8

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 05test.js
亞瑟 受到 30 點傷害。剩餘生命值：70
亞瑟 受到 80 點傷害。角色已陣亡！

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 06test.js
【庫存警報檢查】
注意：香蕉 庫存只剩 3 個，請儘快補貨！
注意：草莓 庫存只剩 2 個，請儘快補貨！

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 07test.js
{ max: 87, min: -10 }

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 08test.js
0922-444555
找不到此聯絡人

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 09test.js
歡迎管理員！Alex。

PS C:\Users\jimmy\Desktop\lee's github coding\_wp\homework\week4hw> node 10test.js
購物車結帳總金額為：2400 元
```

---

### 基礎語法與邏輯練習

#### 題目 1：終極密碼（溫度轉換與範圍判斷）

```javascript
function checkTemperature(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    console.log(`攝氏 ${celsius}°C 轉換為華氏為 ${fahrenheit}°F`);
    
    if (fahrenheit > 100) {
        return "太熱了！";
    } else if (fahrenheit >= 50 && fahrenheit <= 100) {
        return "很舒適！";
    } else {
        return "太冷了！";
    }
}

// 測試執行
console.log(checkTemperature(40));  // 華氏 104
console.log(checkTemperature(25));  // 華氏 77
console.log(checkTemperature(5));   // 華氏 41

```

**執行結果：**

> 攝氏 40°C 轉換為華氏為 104°F
> 太熱了！
> 攝氏 25°C 轉換為華氏為 77°F
> 很舒適！
> 攝氏 5°C 轉換為華氏為 41°F
> 太冷了！

#### 題目 2：倒數計時器

```javascript
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

```

**執行結果：**

> 5
> 4
> 閃爍！
> 2
> 1
> 時間到！

#### 題目 3：九九乘法表某一行

```javascript
function printMultiplicationTable(number) {
    console.log(`--- 開始列印 ${number} 的乘法表 ---`);
    for (let i = 1; i <= 9; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// 測試執行
printMultiplicationTable(7);

```

**執行結果：**

> --- 開始列印 7 的乘法表 ---
> 7 x 1 = 7
> 7 x 2 = 14
> 7 x 3 = 21
> 7 x 4 = 28
> 7 x 5 = 35
> 7 x 6 = 42
> 7 x 7 = 49
> 7 x 8 = 56
> 7 x 9 = 63

---

### 陣列與物件操作

#### 題目 4：學生成績總量與平均

```javascript
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

```

**執行結果：**

> 平均分數為：87.8

#### 題目 5：打造你的 RPG 角色

```javascript
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

```

**執行結果：**

> 亞瑟 受到 30 點傷害。剩餘生命值：70
> 亞瑟 受到 80 點傷害。角色已陣亡！

#### 題目 6：水果行庫存檢查

```javascript
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

```

**執行結果：**

> 【庫存警報檢查】
> 注意：香蕉 庫存只剩 3 個，請儘快補貨！
> 注意：草莓 庫存只剩 2 個，請儘快補貨！

---

### 進階整合與 JSON 應用

#### 題目 7：尋找陣列中的極值

```javascript
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

```

**執行結果：**

> { max: 87, min: -10 }

#### 題目 8：通訊錄搜尋器

```javascript
const phoneBook = [
    { name: "王小明", phone: "0911-222333" },
    { name: "張美麗", phone: "0922-444555" },
    { name: "李大華", phone: "0933-666777" }
];

function searchContact(contacts, searchName) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === searchName) {
            return contacts[i].phone; // 找到就直接回傳號碼並結束函式
        }
    }
    return "找不到此聯絡人"; // 迴圈跑完都沒找到才會執行到這
}

// 測試執行
console.log(searchContact(phoneBook, "張美麗"));
console.log(searchContact(phoneBook, "陳阿土"));

```

**執行結果：**

> 0922-444555
> 找不到此聯絡人

#### 題目 9：網路資料解析（JSON 轉換）

```javascript
const jsonString = '{"success": true, "user": {"name": "Alex", "role": "admin"}}';

function verifyAdmin(jsonStr) {
    // 將 JSON 字串解析為 JavaScript 物件
    const data = JSON.parse(jsonStr);
    
    if (data.success === true && data.user.role === "admin") {
        return `歡迎管理員！${data.user.name}。`;
    } else {
        return "權限不足或連線失敗";
    }
}

// 測試執行
console.log(verifyAdmin(jsonString));

```

**執行結果：**

> 歡迎管理員！Alex。

#### 題目 10：購物車總金額計算機

```javascript
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

```

**執行結果：**

> 購物車結帳總金額為：2400 元