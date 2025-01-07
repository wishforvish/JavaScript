//-----------------Numbers--------------------
const score = "500"
console.log(score); //500, here it can be anything and not just number as the datatype, coz we've not explicitly mentioned to take number only as input

const balance = new Number(100)
console.log(balance); //[Number: 100], but here the datatype of the above balance variable is number only, and suppose if we write-
// const balance = new Number("hi") then the o/p will be [Number: NaN]

console.log(balance.toString()); //output is still 100, but the datatype is changed to string and what happens if we convert into string is that we can access all the string methods, for eg-
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00 , specially used in "e-commerce applications", just to minimize larger values and can limit it to 2 digits after decimal 

const num1 = 23.8966
console.log(num1.toPrecision(3)); //23.9

const num2 = 123.8966
console.log(num2.toPrecision(3)); //124

const num3 = 1123.8966
console.log(num3.toPrecision(3)); //1.12e+3 , automatically converts 1st 3 digits into number and then the 4th number into exponential value e; so it is very important to see when to use precision value 

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 usually as per the us standards the commas are seperated
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 based on Indian standards it will be shown now




//-----------------Maths--------------------

// Maths library is added by default in JavaScript

console.log(Math); //Math M should be capital
console.log(Math.abs(-5)); // 5, negative numbers are converted into positive
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.2)); //5
console.log(Math.min(3,4,5,6)); //3
console.log(Math.max(3,4,5,6)); //6


console.log(Math.random()); //0.4657367648746 , here it always gives output between 0 and 1, why? computer understands only 0 and 1
console.log((Math.random()*10) + 1); //0.364576384756,  we multiply *10 so that the digits shift (3.64576384756) but what if we have 0.03246756 random number, then the output will still be 0.3246756, so hence we add +1 , then the output will be 1.3246756

console.log(Math.floor(Math.random()*10) + 1); // single digit output basically rounds off to the lower value



//suppose we want a random number then, 
const min = 10
const max = 20
// a generic formula to get a number between the given min and max numbers ->
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// here (max - min + 1) is taken coz, 20-10 = 0, and we don't want 0 so add +1 and we're adding min again because we want a random number between the given min and max and not any random numbers 