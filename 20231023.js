
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

// -------------------------------------------------------- //  

//Duck Typing

// const list = document.getElementsByClassName("cat")
// ＊getElementsByClassName("cat") 取得HTMLCollection
// ＊document.querySelectorAll 取得nodeList
// ＊HTMLCollection(只能用for迴圈) vs NodeList(for迴圈&forEach迴圈兩者可以使用)
// 
// const list = document.querySelectorAll(".cat")
// console.log(list)//list不是正規陣列，不過也可以用陣列方式取值

// list.forEach((i) => {
//   console.log(i.textContent);
// })

// -------------------------------------------------------- //  

// textContent 輸入<a href="#">aa</a> =>會顯示`<a href="#">aa</a>`
// innerHTML 輸入<a href="#">aa</a> =>會顯示 超連結 aa

// -------------------------------------------------------- //  

// const btn = document.querySelector("#btn")
// const num = document.querySelector("#num")
// // ＊宣告監聽放外面可以重複使用，放在事件裡也可以只是不能重複使用！

// btn.addEventListener("click", () => {
//   // console.log("don't touch me")
//   // const num = document.querySelector("#num")
//   if ( num.textContent == "(x_x||||" ) {
//     num.textContent = "(o_o||||"
//   } else {
//     num.textContent = "(x_x||||"
//   }
// })

// -------------------------------------------------------- //  


// const twdInput = document.querySelector("#input")
// const btn = document.querySelector("#change")
// const usdChanged = document.querySelector("#changed")

// btn.addEventListener("click", () => {
//   const twdValue = (twdInput.value).trim()
//   if ( twdValue != "" && twdValue != 0) {
//     return usdChanged.value = String((twdInput.value * 0.031).toFixed(3))
//   }
// })

// -------------------------------------------------------- //  

//列出三大賣點（15秒吸引目光）
//如何15秒吸引目光   1)三大賣點 2) 重點簡潔 3)具體化(名詞動詞數字)舉例 4)條理結構
//轉職的吸引點應該強調 1)從盤點表

//履歷是你的人生故事，不是規格書 by 林威宇

//三大賣點
//撇開形容詞
//具體描述
//字體繁瑣
//自己感受不要寫，因為不是面試官想要中店
//學經歷(重點經歷)
//強調自己強項
//檔名姓名(存pdf檔)

//履歷檢查五次
//少放聯絡方式，少放要找職缺
//錯字
//廢話長篇，沒重點＋只有形容詞少具體化
//排版美工(空白不要一大片)

//先放一個假想的project
//1)產品節圖2)產品敘述3)自己負責角色4)你工作內容5)所使用的技術


//

//面事前 研究對方網站，準備資料 讓對方投資你
//想像對方會問的問題，預先準備好的故事例子
//打扮整齊

//面試中
//前15分鐘最重要，邏輯條理＋自信 決定第一印象
//講清楚你的動機原因(為何想轉職工程師)＊＊＊＊＊收入也是理由
//回答細節，具體過程(舉個例子)

//面試完要名片

//你為何要換討到/為何應徵這職位？
//未來三年想要達到什麼目標？

// 分享成功失敗經驗：

// 1)問題背景 
// 2)問題困難點 
// 3)解決步驟 拆解步驟明細說明如何解決
// 4)學到什麼經驗

// 舉例必須要有數字

// -------------------------------------------------------- //  

// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

// function squareDigits(num) {
//   const numArray = num.toString()//轉字串
//                       .split("")//個別拆解成陣列
//                       .map((i) => Math.pow(Number(i), 2))//用map帶每個值轉數字，並用pow(i, 平方)
//                       .join("")//轉成字串
//   return Number(numArray)//不知道答案是要字串還是數字，這邊假設答案是數字
// }


// console.log(squareDigits(3212)) // 印出 9414
// console.log(squareDigits(2112)) // 印出 4114
// console.log(squareDigits(387)) // 印出 96449

// -------------------------------------------------------- //  

// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// function findSomeDifferent(numbers) {
//   // map把陣列裡的值統一轉為正數
//   const arr = numbers.map((i) => Math.abs(i))
//   // 宣告一個偶數陣列，只留偶數值
//   const evenArr = arr.filter((i) => i % 2 === 0 )
//   // 宣告一個單數陣列，只留單數值
//   const oddArr = arr.filter((i) => i % 2 !== 0 )
//   // 判斷 如果偶數陣列長度 > 單數陣列(表示這陣列偶數大於單數)
//   if ( evenArr.length > oddArr.length ) {
//     // 找尋單數值
//     return arr.find((i) => i % 2 !== 0 )
//   }
//   // 找出偶數值
//   return arr.find((i) => i % 2 === 0)
// }

// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160


// -------------------------------------------------------- //  

// 修正版3
// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// function findSomeDifferent(numbers) {
//   // 宣告 單數空陣列以及雙數空陣列
//   // const oddArray = []
//   // const evenArray = []
//   const evenNum = numbers[0] % 2 === 0
//   numbers.reduce((xNum, currentNum) => {
//     if((currentNum % 2 === 0) !== evenNum ) {
//       return currentNum
//     }
//     return xNum
//   },null)
  
// }

// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160

//map 整理所有元素都做一件事轉為新的陣列
//reduce 

// -------------------------------------------------------- //  


// function findSomeDifferent(numbers) {
  
//   return numbers.reduce((sum,))
// }

// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160




// .reduce((arr, curr) => {...}, []);：這是 reduce 方法的使用。它將遍歷 shoppingList 陣列中的每個元素，將每個元素表示為 curr（當前元素），並使用一個初始的空陣列 [] 作為累加器 arr。

// if (!foodsIDontLike.includes(curr)) {...}：在每次迭代中，程式碼檢查當前的 curr 是否包含在 foodsIDontLike 陣列中，也就是檢查是否為不喜歡的食物。foodsIDontLike.includes(curr) 會返回布林值，當 curr 不包含在 foodsIDontLike 中時為 true，否則為 false。

// 如果 curr 不在 foodsIDontLike 中（即為 true），則 if 語句內的代碼塊運行。這個代碼塊將當前元素 curr（即不是你不喜歡的食物）添加到 arr（新購物清單）中，使用 arr.push(curr);。

// 最後，無論是否運行了 arr.push(curr);，都要返回 arr，以便將 arr 更新為下一次迭代的累加器值。

// 當 reduce 完成遍歷整個 shoppingList 陣列時，它將返回最終的 newShoppingList，其中包含了除了你不喜歡的食物以外的所有購物項目。

// console.log(newShoppingList);：最後，它將新的購物清單 newShoppingList 輸出到控制台。

// 這樣，你就得到了一個不包括你不喜歡的食物的新購物清單。


// // shoppingList 是一個陣列，包含你的購物清單，其中列出了你想要購買的食品項目。
// const shoppingList = ['apples', 'mangoes', 'onions', 'cereal', 'carrots', 'eggplants'];
// // foodsIDontLike 也是一個陣列，包含了你不喜歡的食物項目。
// const foodsIDontLike = ['onions', 'eggplants'];

// const newShoppingList = shoppingList.reduce((arr, curr) => {
//   if (!foodsIDontLike.includes(curr)) {
//     arr.push(curr);
//   }
  
//   return arr;
// }, []);

// console.log(newShoppingList); // ["apples", "mangoes", "cereal", "carrots"]

// 修正版最終版....
// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// 最終修正版....
// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！



//抓出陣列裡




// const xNumber = numbers.reduce((acc, currentNum) => { ... 這一行程式碼初始化了一個變數 xNumber，用於存儲不合群的數字。reduce 方法用於迭代 numbers 陣列中的每個元素，並將它們逐個傳遞給 currentNum。

// 在 reduce 方法的回調函數中，有一個條件檢查 (evenNum.length === 1 && currentNum % 2 === 0) || (oddNum.length === 1 && currentNum % 2 !== 0)。這個條件檢查在以下情況下返回 true：

// 如果 evenNum 陣列的長度為 1（只有一個偶數），同時 currentNum 是偶數，或者
// 如果 oddNum 陣列的長度為 1（只有一個奇數），同時 currentNum 是奇數。
// 這表示 currentNum 與其他數字不同。
// 如果條件滿足，acc（累積器）被設置為 currentNum，這樣在迭代結束時，xNumber 將包含不合群的數字。

// 最後，return xNumber 返回不合群的數字。

// 兩個示例 console.log 語句分別呼叫 findSomeDifferent 函數，並輸出找到的不合群的數字。





