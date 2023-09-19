//------------------------------------------Basic Comparison's-----------------------------------------------

/* There output is going to be in boolean either true or false.
 console.log(2 > 1);
 console.log(2 >= 1);
 console.log(2 == 2);
 console.log(2 != 2);
 console.log(2 < 2);
 */


//js convert this "2" & "02" to a number.
/* 
console.log("2" > 1);  --> true
console.log("02" > 1); --> true
*/



//---------------------------------------------unique comparion's-----------------------------------------------

/*
console.log(null > 0)   --> false
console.log(null == 0)  --> false
console.log(null >= 0)  --> true , But why true??

Reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true & null > 0 false.


NOTE: if we compares "undefine" with any value it will always give us false.

*/




//------------------Strict Check  "===" ----------------------

console.log("2" == 2)   // true
console.log("2" === 2)  // false , it also compare its datatype also.