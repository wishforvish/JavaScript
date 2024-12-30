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