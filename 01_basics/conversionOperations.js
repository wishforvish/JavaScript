let score = 22
let scores = "33abc"
console.log(typeof score, typeof scores)
console.log(typeof (score), typeof (scores))

let valueInNumber = Number(scores)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// "33" -> 33
// "33abc" -> NaN
// true <-> 1; false <-> 0
// "" -> false
//"vish" -> true



let isLoggedIn = 1 // output : true
//let isLoggedIn = "" // output : false
//let isLoggedIn = "vish"  // output : true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let num = 45
let stringNum = String(num)
console.log(stringNum) //45
console.log(typeof stringNum) // string


// **************Operations****************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)

let str1 = "hello"
let str2 = " Vish"

let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
console.log(+""); //0, not preferred


let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //not ok coz not so readability

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
