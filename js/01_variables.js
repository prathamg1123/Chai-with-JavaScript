const accountId = 42820
let accountEmail = "pratham@google.com"
var accountPassward = "@pratham"
accountCity = "~"


// accountId = 8242 => not allowed
accountEmail = "bairagi@google.com"
accountPassward = "@bairagi"
accountCity = "Indore"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassward);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassward, accountCity])

console.log(typeof(accountCity));
 
/*
Prefer not to use var 
because if issue in block scope and functional scope
*/