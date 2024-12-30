"use strict";
 /* treat all JS code as newer version , treats all the older version code as new version, also we don't really have to write this line since JS automatically does its work  */


 // alert("hello") 
 /*here we're using node js not browser so no pop up of alert message */

 //maintain the code readability high and no need to use semicolon ; all the time

let name = "vish" //string datatype ""; 2^53 - 1 elements
let age = 21 //number datatype (range =  2^64 - 2^53 + 3) and for NAN -> (2^53 - 2) distinct “Not-a-Number” values 
//BigInt used for large numbers such as trade numbers or so
let isLoggedIn = true // boolean datatype = true or false
let state = null //null -> standalone value, representation of empty value or has exactly one value, called null.
let marks; //undefined -> when value of any variable is not defined 
//symbol -> unique
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