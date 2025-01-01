// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);   //true 
console.log("02" > 1); //true 
//but make sure to make both the datatypes same 


console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* The reason is that an equality check == and comparisons >, <, >=, <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false. */


console.log(undefined > 0);    //false
console.log(undefined == 0);   //false
console.log(undefined < 0);    //false

// above all 6 comparisons based on null and undefined should always be avoided 

// === this strictly compares with datatypes 
console.log("2" === 2); //false


