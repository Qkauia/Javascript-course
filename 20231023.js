
// -------------------------------------------------------- //  
// n = 3, 1¹ + 2² + 3³ = 6
// n = 5, 1¹ + 2² + 3³ + 4⁴ + 5⁵ = 289
// function calcSquareSum(n) {
//   let total = 0
//   for ( let i = 0 ; i < n ; i++ ) {
//     total = total + i ** i
//   }
//   return total
// }

// console.log(calcSquareSum(3)) // 6
// console.log(calcSquareSum(5)) // 289
// console.log(calcSquareSum(10)) // 405071318

// -------------------------------------------------------- //  


// function isPrime(n) {
//   for (let i = 2, e = Math.sqrt(n); i < e; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }

//   return n > 1;
// }

// console.log(isPrime(2)); // true
// console.log(isPrime(10)); // false
// console.log(isPrime(47)); // true
// console.log(isPrime(99)); // false
// console.log(isPrime(97)); // false
// console.log(isPrime(2147483059)); // true

// -------------------------------------------------------- //  


///O => Omega 時間複雜度:
///O(1) => 常數時間
///O(n) => 
///O(n ** 2) => 迴圈包迴圈

// -------------------------------------------------------- //  

// const list = [1, 2, 3, 4]

// list.length = 0
// console.log(list)// 印出 []

// list.length = 6
// console.log(list)// 印出  [1, 2, 3, 4, 空白 × 2]

// list.length = 3
// console.log(list)// 印出  [1, 2, 3]

// -------------------------------------------------------- //  

// 陣列也是物件(特殊)

// const list = [1, 2, 3, 4]

// list[0.5] = 100

// console.log(list)//印出 [1, 2, 3, 4, 0.5: 100]
// console.log(list.length)// 印出 4

// -------------------------------------------------------- //  

// DOM => Document(文件) Object(物件) Model(模型)
// window >> document >> HTML >> 標籤

// 監聽整個頁面啟動事件DOMContentLoaded
// DOMContentLoaded (HTML程式碼走到JS就會監聽，再繼續閱讀HTML下去，最後啟動事件)
// defer (HTML程式碼走完才會讀JS)
// async (HTML頁面解析同步執行JS)適用於google分析

// 若找不到東西先對1)名字有沒有對應到2)頁面未讀取道


// const ooo = document.getElementById("hello")

//Duck Typing
// const list = document.getElementsByClassName("cat")

const list = document.querySelectorAll(".cat")
console.log(list)//list不是正規陣列，不過也可以用陣列方式取值

for ( let i = 0; i < list.length ; i++ ) {
  console.log(list[i].textContent)
}









