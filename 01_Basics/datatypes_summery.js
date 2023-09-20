/*There are two types of data types in JS

1. Primitive  --> String, Number , Boolean, null , undefine , Symbol , BigInt



Q. is javascript is dynamic or static language?
Ans. JavaScript is a dynamically typed language, which means that data types of variables are 
determined by the value they hold at runtime and can change throughout the program as we assign 
different values to them.


What does it mean?? example:
suppose.
let score = 100;  
let score = true/false;
let score = "vaibhav";
or score should be true/false. or some name "vaibhav" so we are assigning it with different value.
*/



//NOTE : Datatype of null is object .

//symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //false



//----------------------------------------------------------------------------------------------------
//2. Non-Primitive --> Arrays , Object , functions


const heros = ["saktiman","hanuman","arjun"];  //arrays

let Obj = {  //object
    name : "vaibhav",
    age : 22
}

const myfunc = function(){
    console.log("Hello world")
}

console.log(typeof myfunc); //function



//--------------------------------------------------Summery------------------------------------------------------
/* 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



                  
