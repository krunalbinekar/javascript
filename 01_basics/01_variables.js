const accountId = 42343
let accountEmail = "123@yopmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2  //not allowed

accountEmail = "75@yopmail.com"
accountPassword = "212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])