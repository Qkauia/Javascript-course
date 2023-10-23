// --------------------------------------10/19js第三常
// let sum = 0
// for(let i = 0; i <= 100 ; i++){
//   sum = sum + i;
// }

// console.log(sum);
//-----
// let a = 1

// while ( a <= 10 ) {
//   console.log(a);
//   a++
// }
//-------
//function 

// function add_two(n) {
//   console.log(n + 2);
// }

// add_two(2)
// add_two(4)


// function add(x, y) {
//   if ( y == undefined){
//     console.log( x );
//   } else {
//     console.log( x + y);
//   }
// }

// add(1, 2)
// add(2)    
// add(3)    

// repl(讀取求值輸出)



// function evenOrOdd(number) {
//   if ( number % 2 == 0 ) {
//     return "Even"
//   }
//   return "Odd"
// }

// console.log(evenOrOdd(2));

//return price without vat
// 230 -> 200


// function round(num, digit){
//   return Number(num.toFixed(digit))
// }

// const VAT = 0.15  

// function excludingVatPrice(price){
//   if ( price == null) {
//     return -1
//   } 
//   // return Number(price / ( 1 + VAT)).toFixed(2)
//   return round(price / (1 + VAT), 2)
// }

// console.log(excludingVatPrice(230));

// //num = 數值 digit = 小數點位數
// function round(num, digit) {
//   //ratio =比率 10的digit次方
//   const ratio = 10 ** digit;
//   return Math.round(num * ratio) / ratio;
// }

// console.log(round(2.333333, 2)); // 2.33
// console.log(round(2.333733, 3)); // 2.334



// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24










function sumOfSmallestValues(arr) {
  //將陣列的順序由小至大改變
  arr.sort( ( a, b ) => a - b )
  //取出陣列裡前2個最小值，進行相加
  return arr[0] + arr[1]
}

const list1 = [19, 5, 42, 2, 77]
const list2 = [23, 15, 59, 4, 17]

console.log(sumOfSmallestValues(list1)) // 印出 7
console.log(sumOfSmallestValues(list2)) // 印出 19
