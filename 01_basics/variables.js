const accountId = 87364
let accountEmail = "ram@gmail.com"
var accountPassword = "12345" 
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "vk@vk.com"
accountPassword = "21121"
accountCity = "Bangalore"

console.log(accountId)

/* prefer not to use var 
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])