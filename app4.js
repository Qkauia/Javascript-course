// 如何白話解釋什麼是function:
// 一個函數是一個程式碼塊，它可以接受一些資料，執行特定的任務，然後返回結果。函數的優點在於你可以給它一個容易理解的名稱，這樣你可以在需要時多次使用它。如果你的程式碼需要執行相同的任務多次，你可以使用這個函數，而不必每次都重寫相同的程式碼。這使你的程式碼更有效率，並讓你可以更輕鬆地閱讀和維護它。

// 當你的程式碼需要執行不同的任務時，你可以建立不同的函數。這樣，當你需要修改某個特定任務的邏輯時，只需編輯該函數，而不必修改整個程式碼。這有助於使你的程式碼更具組織性，並降低出錯的風險。

// 在js裡面function就是一般物件

// ----
// const aa = 123
// //高階函數 Higher Oder Function(吃別人函數)
// function hello(x) {
//   if ( typeof x == "function") {
//     x()//這邊若寫a()，若x帶入b(function)只會執行a(function)
//   } else {
//     console.log(x)
//   }
// }

// function a() {
//   console.log("QQ")
// }

// function b() {
//   console.log("zZZ");
// }

// hello(aa)//印出123
// hello(a)//印出QQ
// hello(a())//印出 QQ , undefined
// hello(b)//印出zZZ
// ----
// 陣列for迴圈寫法：
// const list = ["1", "2", "3", "4", "5", "6", "7"]
// //結束條件以list.length(陣列長度)
// for (let i = 0; i < list.length ; i++ ) {
//   let result = list[i]
//   console.log( result * 2)
// }

// --
// 陣列forEach寫法：

// const list = ["1", "2", "3", "4", "5", "6", "7"]
// let arr = []
// list.forEach((a) => {
//   console.log(a * 2);
// })

// --
// 練習題//印出3,5,7,9,11
// const list = [1, 2, 3, 4, 5]

// list.forEach(function (a) {
//     console.log(a * 2 + 1);
// })
// --

// const list = ["1", "2", "3", "4", "5", "6", "7"]
// let result = []

// list.forEach((a) => {
//   result.push( a * 2)
// })

// console.log(result);

// --
// for迴圈寫forEach
// const list = [1, 2, 3, 4, 5]
// let result = []

// for (let i = 0; i < list.length ; i++){
//   result.push(2 * list[i])
// }

// console.log(result);

// --
// map轉換成陣列(每一個值進行動作)
// const list = [1, 2, 3, 4, 5]

// let result = list.map((a)=>{
//   return a * 2//必須要有return要不然會得到undefined*5
// })

// console.log(result);

// --

// filter篩選轉為陣列(符合條件收回來)

// const list = [1, 2, 3, 4, 5]

// let result = list.filter((a)=>{
//   return a >= 3 //條件是true的話留下來
// })

// console.log(result);

// --

// 練習題：
// 大於等於 8 所有數值，加倍！
// 結果印出[16, 18, 20]
// 連續技使用必須同個屬性對到處理同屬性的方法

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = list.filter((num) =>{
//   return num >= 8
// }).map((num) =>{
//     return num * 2
//   })

// console.log(result);

// ---

// call back 回乎手段連續技

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = list.filter(biggerNumber).map(double)

// console.log(result);

// function biggerNumber(num) {
//   return num >= 8
// }

// function double(num) {
//   return 2 * num
// }

// ---
// reduce 歸納

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //參數有兩個 (acc類加值, current value每回合)
// //acc從哪裡來的=>reduce
// const result = list.reduce((acc, cv) => {
//     //第一回 acc=0 + cv= 1 = acc=1
//     //第二回 acc=1 + cv= 2 = acc=3
//     //第三回 acc=3 + cv= 3 = acc=6
//     //第四回 acc=6 + cv= 4 = acc=10
//     //第五回 acc=10 + cv= 5 = acc=15
//     return acc + cv
//   }, 0)
//   //如果沒給預設值，會拿第一個cv當做預設值
  
// console.log(result);

// --
// 練習題(印出偶數的總和)

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = list.filter((num) => {
//   return num % 2 == 0
// }).reduce((acc, cv) => {
//   return acc + cv
// }, 0)

// console.log(result)

// 最精簡版：
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = list.filter((num) => num % 2 == 0).reduce((acc, cv) => acc + cv, 0)

// console.log(result)
// --

// const list = [3, 4, 7, 10, 1, 12]

// const result = list.reduce((acc , cv) => {
//   if( acc > cv) {
//     return acc
//   } else {
//     return cv
//   }
// })

// console.log(result);

// --
// 練習題(取出陣列1, 3,5)

// const list = [1, "a", 3, 5, undefined, [], true]

// const result = list.filter((n)=> typeof n == "number")

// console.log(result);

// --

// 練習題
// list = [1, 2, undefined, 3, undefined, true, "a"]
// 印出[1, 2, 3, true, "a"]

// const list = [1, 2, undefined, 3, undefined, true, "a"]

// const result = list.filter((n) => n != undefined)
// console.log(result);

// --
// find只會找一個第一個滿足條件的值，找不到回傳undefined
// 相似函數filter(filter符合條件的都會回傳)

// const list = [1, 3, 5, 8, 10]

// const result = list.find((a) => {
//   return a > 20
// })

// console.log(result);

// --

// const list = [1, 3, 5, 8, 9, 10, 7]
// const result = list.findLast((n) => n % 2 == 0)

// console.log(result);
// 找出 list 裡的偶數
// const list = [1, 3, 5, 8, 9, 10, 7]
// const result = list.find((n) => n % 2 ==0)
// console.log(result);

// function hasNumber(arr, n) {
//   // return arr.indexOf(n) >= 0
//   // return arr.includes(n)
// }

// console.log(hasNumber([1, 2, 3], 4)); // false
// console.log(hasNumber([1, 2, 3], 2)); // true


// find 找到一個東西
// indexOf 找到一個索引值(>= 0)
// includes 找到直接東西

// --

// 反轉題目
// for i++方式
// const list = [2, 3, 4, 5]
// const newList = []

// for (let i = 0 ; i < list.length ; i++ ) {
//   const lastIndex = list.length - 1 - i
//   newList.push(list[lastIndex])
// }

// console.log(newList);

// --

// for迴圈i--方式
// const list = [2, 3, 4, 5]
// const newList = []

// for ( let i = list.length -1 ; i >=0 ; i-- ) {
//   newList.push(list[i])
// }
// console.log(newList);

// --

// 先思考怎麼做(邏輯)
// [5, 4, 3, 2] 禁用 reverse

// const list = [2, 3, 4, 5]
// const newList = []
// list.forEach((x) => {
//   newList.unshift(x)
// })

// console.log(newList);


// 提示：使用字串的 split -> Array
// function highAndLow(str) {

// }

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// 答案：
// function highAndLow(str) {
//   const arr = str
//         .split(" ")
//         .map(Number)
//         .sort((a, b) => a - b)
//   let first = arr[ arr.length - 1]
//   let last = arr[0]
//   return first + " " + last
// }

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("1 9 3 4 -5"));


// --
// 糖果題
// const chars1 = ["a", "c", "d", "f", "g"]
// const chars2 = ["O", "Q", "R", "S"]

// function missingChar(chars) {
//   const missingChars = [];

//   for (let i = 0; i < chars.length - 1; i++) {
//     const currentCharCode = chars[i].charCodeAt(0);
//     const nextCharCode = chars[i + 1].charCodeAt(0);
//     //如果下一個值-現在的值>1
//     if (nextCharCode - currentCharCode > 1) {
//       for (let missingCharCode = currentCharCode + 1; missingCharCode < nextCharCode; missingCharCode++) {
//         missingChars.push(String.fromCharCode(missingCharCode));
//       }
//     }
//   }

//   return missingChars.join(", ");
// }

// console.log(missingChar(chars1)) // 印出 b ,e
// console.log(missingChar(chars2)) // 印出 P

// --

