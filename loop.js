// -------------------------------------------------------- //  

// 練習題操作for迴圈,forEach迴圈 
// const list = [1, 2, 3, 4, 5, 6, 7]
// let resultFor = []

// function forResult(list, arr) {
//   for ( let i = 0 ; i < list.length ; i++ ) {
//     arr.push(list[i] * 2)
//   }
// }

// forResult(list, resultFor)
// console.log(resultFor);


// console.log(resultFor);

// -------------------------------------------------------- //  

// for迴圈寫forEach
// 印出

// const EachResult = []

// function arrayPush(list, arr){
//   list.forEach((a) => {
//     let index = a * 2
//     arr.push(index)
//   })
// }

// arrayPush(list, EachResult)
// console.log(EachResult)

// -------------------------------------------------------- //  

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Q1 印出[16, 18, 20]

// const result = list.filter((i)=> i >= 8).map((i)=> i * 2)

// console.log(result);


// Q2 印出偶數的總和

// let result = list.reduce((acc, cv) => acc + cv)
// console.log(result);

// -------------------------------------------------------- //  

// const list = [1, "a", 3, 5, undefined, [], true]

// Q1 印出[1, 3, 5]

// const result = list.filter((i)=> typeof i  == "number" )
// console.log(result)

// -------------------------------------------------------- //  

// list = [1, 2, undefined, 3, undefined, true, "a"]

// Q1 印出[1, 2, 3, true, "a"]

// const result = list.filter((i)=> i !== undefined)
// console.log(result);

// -------------------------------------------------------- //  

// 陣列反轉for i++方式
// [5, 4, 3, 2] 禁用 reverse

// const list = [2, 3, 4, 5]
// const newList = []

// for ( let i = 0 ; i < list.length  ; i++ ) {
//   const index = list.length - 1 - i
//   newList.push(list[index])
// }
// console.log(newList);

// 將索引值 利用迴圈從大到小
// console.log(list.length - 1);
// console.log(list.length - 1 -1);
// console.log(list.length - 1 -2);
// console.log(list.length - 1 -3);



// console.log(newList);

// -------------------------------------------------------- //  

// 陣列反轉for i--方式
// [5, 4, 3, 2] 禁用 reverse

// const list = [2, 3, 4, 5]
// const newList = []

// for ( let i = list.length -1 ; i >= 0 ; i-- ) {
//   const index = i
//   newList.push(list[index])
// }

// console.log(newList);

// -------------------------------------------------------- //  

// 陣列反轉forEach方式
// [5, 4, 3, 2] 禁用 reverse

// const list = [2, 3, 4, 5]
// const newList = []

// list.forEach((i) => {
//   newList.unshift(i)
// })

// console.log(newList);

// -------------------------------------------------------- //  

// 提示：使用字串的 split -> Array

// function highAndLow(str) {
//   const arr =  str.split(" ")
//                   .map(Number)
//                   .sort((a, b) => a - b)
//   const first = arr[arr.length -1]
//   const end = arr[0]
//   console.log(`${first} ${end}`);
// }

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// -------------------------------------------------------- //  

// function hasNumber(arr, n) {
//   return arr.includes(n)
// }

// console.log(hasNumber([1, 2, 3], 4)); // false
// console.log(hasNumber([1, 2, 3], 2)); // true

// -------------------------------------------------------- //  

// 找出 list 裡的偶數
// const list = [1, 3, 5, 8, 9]

// const result = list.find((i) => i % 2 == 0)

// console.log(result);

// -------------------------------------------------------- //  

// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

// function moveZerosToEnd(arr) {
//   // 過濾把0存到zeroArray
//   const zeroArray = arr.filter((i) => i === 0)
//   // 另外把0過濾存到noZeroArray，最後回傳兩個陣列合併
//   const noZeroArray = arr.filter((i) => i !== 0)
//   return noZeroArray.concat(zeroArray)
  
// }
// moveZerosToEnd(list)
// let result = moveZerosToEnd(list)
// console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// -------------------------------------------------------- //  
// 辨識開頭是否大寫

// function isUpperCase(str) {
//   var char = str[0]
//   return char >= "A" && char <= "Z"
// }


// console.log(isUpperCase("Abcd"))    // 印出 false
// console.log(isUpperCase("AAcd"))    // 印出 true
// console.log(isUpperCase("ybcd"))    // 印出 true

// -------------------------------------------------------- //  

// 辨識字串裡有無英文大小寫，並找出第一個並帶出索引值

// function position(str) {
//   for ( let i = 0 ; i <= str.length ; i++ ) {
//     var char = str[i]
//     if ( char >= "A" && char <= "Z" ) {
//       return str[i]+" "+i
//     }
//   }
//   return -1              
// }

// console.log(position("abcd"))//印出-1
// console.log(position("AbcD"));//印出A 0
// console.log(position("abCD"));//印出C 2

// -------------------------------------------------------- //  

// Q1
// //console.log(findSmallCount([1, 2, 3], 2))//印出1
// //console.log(findSmallCount([1, 2, 3, 4, 5], 0))//印出0
// //console.log(findSmallCount([1, 2, 3, 4], 100))//印出4

// function findSmallCount(arr, i) {
//   var counter = 0
//   for ( let x = 0 ; x <= arr.length ; x++ ) {
//     if ( arr[x] < i ) {
//       counter++
//     }
//   }
//   return counter
// }

// console.log(findSmallCount([1, 2, 3], 2))//1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0))//0
// console.log(findSmallCount([1, 2, 3, 4], 100))//4

// ----- //  

// // Q2
// // console.log(findSmallCount([1, 2, 3], 2))//1
// // console.log(findSmallCount([1, 2, 3, 4, 5], 0))//0
// // console.log(findSmallCount([1, 2, 3, 4], 100))//4

// function findSmallCount(arr , n) {
//   return arr.filter((i) => i < n ).length
// }

// console.log(findSmallCount([1, 2, 3], 2))//1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0))//0
// console.log(findSmallCount([1, 2, 3, 4], 100))//4

// -------------------------------------------------------- //  

// 回傳arr裡值小於n，印出總加
// // console.log(findSmallerTotal([1, 2, 3], 3))//印出3
// // console.log(findSmallerTotal([1, 2, 3], 1))//印出0
// // console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))//印出25
// // console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))//印出0

// function findSmallerTotal(arr, n) {
//   if (arr.filter((i) => i < n  )) {
//     return arr.filter((i) => i < n  ).reduce((acc, cv) => acc + cv , 0)
//   }
//   return 0
// }



// console.log(findSmallerTotal([1, 2, 3], 3))//印出3
// console.log(findSmallerTotal([1, 2, 3], 1))//印出0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))//印出25
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))//印出0

// -------------------------------------------------------- //  

// //Q
// // console.log(findAllSmall([1, 2, 3], 10));//印出[1, 2, 3]
// // console.log(findAllSmall([1, 2, 3], 2));//印出[1]
// // console.log(findAllSmall([1, 3, 5, 4, 2], 4));//印出[1, 3, 2]

// function findAllSmall(arr, n) {
//   return arr.filter((i) => i < n )
// }

// console.log(findAllSmall([1, 2, 3], 10));//印出[1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2));//印出[1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4));//印出[1, 3, 2]

// ----- //

// //Q使用for迴圈寫看看：
// // console.log(findAllSmall([1, 2, 3], 10));//印出[1, 2, 3]
// // console.log(findAllSmall([1, 2, 3], 2));//印出[1]
// // console.log(findAllSmall([1, 3, 5, 4, 2], 4));//印出[1, 3, 2]

// function findAllSmall(arr, n) {
//   const list = []
//   for ( let i = 0 ; i < arr.length ; i++ ) {
//     if ( arr[i] < n ) {
//       list.push(arr[i])
//     }
//   } return list
// }

// console.log(findAllSmall([1, 2, 3], 10));//印出[1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2));//印出[1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4));//印出[1, 3, 2]

// -------------------------------------------------------- //  

// //for迴圈
// // console.log(sum([1, 2, 3]));//印出6
// // console.log(sum([-1, 1, 2, -2, 3, -3]));//印出0

// function sum(arr) {
//   var total = 0
//   for ( let i = 0 ; i < arr.length ; i++ ) {
//     total += arr[i]
//     // total = total + arr[i]
//   }
//   return total
// }

// console.log(sum([1, 2, 3]));//印出6
// console.log(sum([-1, 1, 2, -2, 3, -3]));//印出0

// ----- //  

// // Q:reduce
// // console.log(sum([1, 2, 3]));//印出6
// // console.log(sum([-1, 1, 2, -2, 3, -3]));//印出0

// function sum(arr) {
//   return arr.reduce((acc, cv) => acc + cv )
// }

// console.log(sum([1, 2, 3]));//印出6
// console.log(sum([-1, 1, 2, -2, 3, -3]));//印出0

// -------------------------------------------------------- //  
