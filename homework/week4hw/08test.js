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