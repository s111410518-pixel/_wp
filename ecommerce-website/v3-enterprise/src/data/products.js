const products = [
  {
    id: 1, name: '無線藍牙耳機 Pro', price: 2490, originalPrice: 2990,
    image: '🎧', category: '電子', tag: '熱銷',
    desc: '旗艦級主動降噪，Hi-Res 認證音質',
    details: '藍牙 5.4 | 降噪深度 40dB | 續航 60hrs | IPX5 防水 | 支援無線充電',
    rating: 4.8, reviews: 256,
  },
  {
    id: 2, name: '機械式電競鍵盤', price: 3290, originalPrice: 3790,
    image: '⌨️', category: '電子', tag: '新品',
    desc: '熱插拔軸體，PBT 鍵帽',
    details: '98% 佈局 | 三模連接 | RGB 背光 | 熱插拔軸座 | 6000mAh 電池',
    rating: 4.6, reviews: 189,
  },
  {
    id: 3, name: '極簡後背包', price: 1290, image: '🎒', category: '配件', tag: null,
    desc: '防潑水尼龍，筆電隔層',
    details: '20L 容量 | 防潑水 | 獨立筆電層 15.6" | 減壓背帶 | 行李箱插帶',
    rating: 4.5, reviews: 312,
  },
  {
    id: 4, name: '鈦金保溫瓶', price: 890, image: '🥤', category: '生活', tag: null,
    desc: '純鈦內膽，輕量耐用',
    details: '500ml | 純鈦內膽 | 保溫 24hr / 保冰 36hr | 316 不鏽鋼外層 | 食品級矽膠',
    rating: 4.7, reviews: 178,
  },
  {
    id: 5, name: '手工真皮短夾', price: 2290, image: '👛', category: '配件', tag: '限定',
    desc: '義大利進口植鞣革',
    details: '義大利植鞣革 | 6卡+鈔票+零錢層 | RFID 防盜 | 手工縫製 | 附禮盒',
    rating: 4.9, reviews: 94,
  },
  {
    id: 6, name: '智慧空氣清淨機', price: 5990, image: '🌀', category: '生活', tag: '熱銷',
    desc: 'HEPA H13 高效過濾',
    details: '適用 15坪 | HEPA H13 + 活性碳 | PM2.5 偵測 | Wi-Fi 聯網 | 自動模式',
    rating: 4.7, reviews: 423,
  },
  {
    id: 7, name: 'Thunderbolt 4 集線器', price: 2490, image: '🔌', category: '電子', tag: null,
    desc: '40Gbps 高速傳輸，8K 輸出',
    details: 'Thunderbolt 4 x2 | USB-A x3 | HDMI 2.1 | SD 4.0 | PD 100W | 8K@60Hz',
    rating: 4.4, reviews: 156,
  },
  {
    id: 8, name: '防曬漁夫帽', price: 690, image: '🧢', category: '配件', tag: null,
    desc: 'UPF 50+ 防曬，輕量透氣',
    details: 'UPF 50+ | 速乾材質 | 可摺疊收納 | 防風繩 | 多色可選',
    rating: 4.3, reviews: 67,
  },
  {
    id: 9, name: '4K 專業顯示器', price: 12990, image: '🖥️', category: '電子', tag: '新品',
    desc: '27" IPS 4K，Delta E < 2',
    details: '27" IPS 4K UHD | Delta E < 2 | 100% sRGB | USB-C 90W | 旋轉升降',
    rating: 4.8, reviews: 89,
  },
  {
    id: 10, name: '香氛擴香組', price: 780, image: '🕯️', category: '生活', tag: null,
    desc: '天然精油，持久芳香',
    details: '天然植物精油 | 擴香效果 60天 | 無酒精 | 玻璃瓶身 | 附藤條',
    rating: 4.5, reviews: 203,
  },
  {
    id: 11, name: '真皮休閒鞋', price: 2890, image: '👟', category: '配件', tag: '限定',
    desc: '全粒面牛皮，舒適腳感',
    details: '全粒面牛皮 | 真皮內裡 | 橡膠發泡底 | 可換鞋墊 | 手工製作',
    rating: 4.6, reviews: 134,
  },
  {
    id: 12, name: '智能體脂計', price: 1490, image: '⚖️', category: '生活', tag: null,
    desc: '15 項身體數據，APP 追蹤',
    details: '15 項指標 | 藍牙 APP | 可辨識 8 人 | BIA 測量 | ITO 電極 | 強化玻璃',
    rating: 4.4, reviews: 278,
  },
]

export const categories = ['全部', '電子', '生活', '配件']
export default products
