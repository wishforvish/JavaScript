"use strict";
 /* treat all JS code as newer version , treats all the older version code as new version, also we don't really have to write this line since JS automatically does its work  */


 // alert("hello") 
 /*here we're using node js not browser so no pop up of alert message */

 //maintain the code readability high and no need to use semicolon ; all the time

let name = "vish" //string datatype ""; 2^53 - 1 elements
let age = 21 //number datatype (range =  2^64 - 2^53 + 3) and for NAN -> (2^53 - 2) distinct “Not-a-Number” values 
let isLoggedIn = true // boolean datatype = true or false
let state = null //null -> standalone value, representation of empty value or has exactly one value, called null.
let marks; //undefined -> when value of any variable is not defined 

//BigInt used for large numbers such as scientific values or trade numbers so on. Ex- 9837472638489
//symbol -> used to make any value unique
//object -> An Object is logically a collection of properties



//two ways we can see the type of a data
/*
1)Directly specifying
2)Using the variables assigned
*/
console.log(typeof "rama")
console.log(typeof age)
console.log(typeof null) //o/p: object
console.log(typeof undefined) // o/p: undefined


/* Summary of Datatypes

-> In the official documentation, datatypes are divided into 2 parts, based on "how data is stored in memory and accessed", this datatypes are categorised into - "Primitive" and "Non-Primitive"

1) Primitive datatypes - 
     7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
2) Non-Primitive or Reference -
     3 types : Array, Objects, Functions

     1) Array: Represents a list-like collection of values, indexed by numbers (integer indices). Ex- [1,2,3,4]

     2) Objects: Represents a collection of key-value pairs(properties and methods). Ex- {name: "John", age: 30}

     3) Functions: Represents a reusable block of code that can be invoked or called with arguments. Ex- function add(x,y) {return x+y;}
------------------------------------------------------------------------

-> Is JavaScript Dynamically typed language or statically typed??
Ans:     JavaScript is a Dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different values to a variable during its lifetime.
For ex, in JS u can do:
  let x = 10;  // x is now a number
  x = "hello"; // x is now a string 
  x = true;    // x is now a boolean 
On the other hand, statically typed languages require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type string
String name = "John"; //name is a variable of type string 

JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity (using too many words) and strictness. 
------------------------------------------------------------------------

-> 




*/