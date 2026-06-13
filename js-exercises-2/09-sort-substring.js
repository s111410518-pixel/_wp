/**
 * 題目 9：陣列物件的排序與切片 (String Slicing)
 *
 * 給定字串陣列，將每個字串取前 10 個字元，加上 "..."
 */

const contents = [
  'Very long content here',
  'Another Very long content here',
  '3rd Very long content here',
]

const summaries = contents.map((str) => str.slice(0, 10) + '...')

console.log(summaries)
// ["Very long ...", "Another Ve...", "3rd Very l..."]
