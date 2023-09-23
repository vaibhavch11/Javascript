const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"  //Not a recommended way
accountCity = "Jaipur"  //Also not good.
let accountState;


//Let say we want to change that const variable:
// accountId = 2 // not allowed

//But everything else can change:
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"



/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │   144553    │
│    1    │ 'hc@hc.com' │
│    2    │ '21212121'  │
│    3    │ 'Bengaluru' │
│    4    │  undefined  │
└─────────┴─────────────┘
*/