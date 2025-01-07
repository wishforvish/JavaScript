/*
- JavaScript DATE objects represent a single moment in time in a platform-independent format. 
- Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970.

- Date in JS is complex.
- Future Proposal for the date is TEMPORAL, a global object (like Math)
*/

//Dates

let myDate = new Date()
console.log(myDate); //2025-01-07T13:23:07.242Z
console.log(myDate.toString()); //Tue Jan 07 2025 13:24:24 GMT+0000 (Coordinated Universal Time), converting into string 
console.log(myDate.toDateString()); //Tue Jan 07 2025
console.log(myDate.toLocaleDateString()); //1/7/2025
console.log(myDate.toLocaleString()); //1/7/2025, 1:29:19 PM
console.log(myDate.toLocaleTimeString()); //1:29:19 PM
console.log(myDate.toTimeString()); //13:29:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); //Tue, 07 Jan 2025 13:29:19 GMT
console.log(myDate.toISOString()); //2025-01-07T13:29:19.922Z
console.log(myDate.toJSON()); //2025-01-07T13:29:19.922Z


console.log(typeof myDate);  // "object" 

