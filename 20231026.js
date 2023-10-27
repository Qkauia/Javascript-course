// // 編號：CANDY-007
// // 程式語言：JavaScript
// // 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// function findSomeDifferent(numbers) {
//   // 代表陣列最後一個索引
//   const len = numbers.length -1
//   // 宣告另一個陣列用map把numbers陣列裡值個別帶入絕對值以及取餘數
//   const arr = numbers.map((i)=> Math.abs( i % 2 ))
  
//   for (let i = 0 ; i < len ; i++ ) {
//     // 判斷如果 陣列裡值不等於最後的值 並且 陣列裡值不等於陣列裡下一個值 
//     if ( arr[i] !== arr[len] && arr[i] !== arr[ i + 1 ] ) {
//       // 回傳numbers帶入索引
//       return numbers[i]
//     }
//   }
// }

// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160

// -------------------------------------------------------- //  

// (1111).toString(2) ===> 數值 轉換字串(2進位)
//  User  Group Other
// _ _ _ _ _ _ _ _ _

// r w x r w x r w x


// chmod 700

// -------------------------------------------------------- //  

// &&內設條件必須前提2個都要true
// ||內設條件必須前提2個都要true

// 邏輯短路能夠快速效能差的擺後面

// 在Ruby 是&.

// 真值表 XOR TT = false TF = true FT = true FF = false

// -------------------------------------------------------- //  
// btn.addEventListener("click", ooo)
// btn.removeEventListener("click", ooo)

// btn.addEventListener("click", (e) => {

// }
//   console.log(e.target);

// ])

// class.  id#-------------------------------------------------------- //  

// const buttons = document.querySelectorAll(".btn")
// const score = document.querySelector("#score")
// const resetBtn = document.querySelector("#reset")

// function changColor(e) {
//   const btn = e.target
//     const currentScore = Number(score.textContent)
//     const WIN_SCORE = 5

//     if ( btn.classList.contains("flipped")) {
//       btn.classList.remove("flipped")
//       score.textContent = currentScore - 1
//     } else {
//       btn.classList.add("flipped")
//       score.textContent = currentScore + 1
      
//       currentScore == WIN_SCORE -1 && reset()
//     } 
// }

// function reset() {
//   buttons.forEach((button) => {
//     button.classList.remove("flipped")
//     score.textContent = 0
//   })
// }
// resetBtn.addEventListener("click", reset )

// buttons.forEach((button) => {
//   button.addEventListener("click", changColor)
// })


// -------------------------------------------------------- //  


// classList => 像是陣列的東西(只能讀不能換)
// classList.add("∆∆∆") => 加入CSS屬性
// classList.remove("∆∆∆") => 加入CSS屬性
// classList.toggle("∆∆∆") => 切換屬性

// -------------------------------------------------------- //  

// const green = document.querySelector("#green")
// const blue = document.querySelector("#blue")

// green.addEventListener("click", (e) => {
//   console.log("green")
//   console.log(e.target);
//   console.log(e.currentTarget);
// },true)

// blue.addEventListener("click", (e) => {
//   console.log("blue")
//   console.log(e.target);
//   console.log(e.currentTarget);
// })

//target =事件流最底部
//currentTarget ＝指定啟動事件那位

// -------------------------------------------------------- //  

// 監聽器 Even flow

// -------------------------------------------------------- //  


// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

// function highestScoreWord(input) {
//   const stringGroup = input.split(" ")

  
//   console.log(str);
// }

// console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
// console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
// console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there


//判斷字串a-z

// function highestScoreWord(input) {
//   const stringGroup = input.split(" ")
  
//   if (stringGroup.length !== 1 || !/^[a-z]$/i.test(stringGroup)) {
//     throw new Error("請輸入小寫字母 'a' 到 'z'");
//   }
  
    
//   stringGroup.charCodeAt(0) - 96;

//   console.log(stringGroup);
  
  
//   // 測試函數
//   console.log(letterToNumber('a')); // 1
//   console.log(letterToNumber('b')); // 2
//   console.log(letterToNumber('z')); // 26
// }

// console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
// console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
// console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there



const buttons = document.querySelectorAll(".btn")
const score = document.querySelector("#score")
const reset = document.querySelector("#reset")

function removeNum() {
  buttons.forEach((button) => {
    button.classList.remove("flipped")
    score.textContent = 0
  })
}

function changeColor(e) {
  const btn = e.target
    const total = Number(score.textContent)
    const WIN_SCORE = 5
    if (btn.classList.contains("flipped")) {
      btn.classList.remove("flipped")
      score.textContent =  total - 1
    } else {
      btn.classList.add("flipped")
      score.textContent = total + 1
      total === WIN_SCORE - 1 && removeNum()
    }
}


buttons.forEach((button) => {
  button.addEventListener("click", changeColor )
})

reset.addEventListener("click", removeNum)