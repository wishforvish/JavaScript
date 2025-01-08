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

let myCreatedDate = new Date(2025,0,23) //(Year starts from 0, JAN)
console.log(myCreatedDate.toDateString());//Thu Jan 23 2025 

let myCreatedDate1 = new Date(2025,0,23,5,3) //year, month, date, (time) hours, seconds
console.log(myCreatedDate1.toLocaleString()); //1/23/2025, 5:03:00 AM

let myCreatedDate2 = new Date("2025-01-24") 
console.log(myCreatedDate2.toLocaleString()); //1/24/2025, 12:00:00 AM

let myCreatedDate3 = new Date("01-24-2025") 
console.log(myCreatedDate3.toLocaleString()); //1/24/2025, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1736327440525, milliseconds

console.log(myCreatedDate.getTime()); //1737590400000, to compare milliseconds to the date assigned

console.log(Math.floor(Date.now()/1000)); // gives seconds values and here if we directly divide with 1000 then we get decimal value so we're using Math.floor


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //1, since it starts from 0, so that users don't get confused 1 is added
console.log(newDate.getDay());//3


const dates = newDate.toLocaleDateString('default', {
    weekday: "long",
}) //can customize, here weekday: "long" tells the method to include the full name of the weekday (e.g., "Monday", "Tuesday") in the output
console.log(dates);//Wednesday
