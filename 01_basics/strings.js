const name = "vishaka"
const repoCOunt = 40

// console.log(name + repoCOunt + "value") -> Outdated 

console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`);  
//instead use backtick operator `` and ${} for the use of variable


const gameName = new String('vish-gamer')

console.log(gameName[0]);
console.log(gameName.__proto__); // output is {}, which is object but if we see in console of a browser then we will get the prototype(slice, toUpperCase, trim, split, normalise etc..) as the output 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-9,4); // we can use negative value in this slice method
console.log(anotherString);

const newString1 = "    Vish    "
console.log(newString1);
console.log(newString1.trim()); // trim removes white spaces only 

const url = "https://vish.com/vish%20br" 

// the problem is browser does not understand spaces, for eg: "https://vish.com/vish br" so the space is automatically converted by the browser as %20 between vish and br in this example

console.log(url.replace('%20','-')); //replaces %20 with -

console.log(url.includes('vish')); //true
console.log(url.includes('hlo'));  //false

const gameName1 = new String('vish-gamer-com')

//How to convert the above string into array ? 
// split can be based on - for the above example or can be based on anything 

console.log(gameName1.split('-'));

