//In js conversion is such a nightmare topic.

let score = 33;

//Now we want to find score type, but why?? we already now its a number.
//But some time it happens like you work on backend, the guy who handled frontend has send some value to you which is coming from a 
//form it might be possible that the value is in string not in number. const {score} = req.body

console.log(typeof(score));  //number


//-------------------------------------------------------------------

let points = "33";
console.log(typeof(points));  //string

//Now we want to convert that points to number.

let valueInNumber = Number(points);
console.log(typeof(valueInNumber));  //number


//--------------------------------------------------------------
//suppose points are "33aa"

let a = "33aa";
console.log(typeof(a));  //string

//Now we want to convert that points to number.

let value = Number(a);
console.log(typeof(value));  //number

//but value should not be converted into number. because it has some characters.
//now console it out.


console.log(value);  //NaN (Not a Number)
//-------------------------------------------------------------------


// "33" => 33 
//"33aa" => NaN
// true => 1 , false => 0

//-----------from string to boolean convertion
// "" => false
// "vaihav" => true



//-----------------------------------------------------------------* Operation *----------------------------------------------------------
/* 

let value = 3;
let negValue = -value;
console.log(negValue);  --> -3

let str1 = "hello";
let str2 = " Vaibhav";
console.log(str1 + str2);  --> hello Vaibhav



******Complex situtations ******

console.log("1" + 2) --> 12
console.log(1 + "2") --> 12
console.log("1" + 2 + 2) --> 122 
console.log(1 + 2 + "2") --> 32 




*****--------------------- Learn about prefix & posfix operation on MDN----------------------------------- *****
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
Expected output: "a:4, b:4"



*/
