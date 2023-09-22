//Arrays

/* 

 () --> Parantheses
 [] --> square bracket
 {} --> curly brackets

 */

// const Arrays = [0 , 1 , 2 , 3 , 4 , true , "vaibhav"] //this is also true


//Is array in js has a fixed size?
//Ans: 'No'. It is not possible to create a native javascript Array with a fixed length.


//JavaScript array-copy operations create shallow copies.
/* 
  1. Shallow Copies : 
    A shallow copy of an object is a copy whose properties share the same references as those of the source 
    object from which the copy was made.
    As a result, when you change either the source or the copy, you may also cause the other object to change too.

  2. Deep copy :
    A deep copy of an object is a copy whose properties do not share the same references as those of the source 
    object from which the copy was made.
    As a result, when you change either the source or the copy, you can be assured you're not causing the other 
    object to change too. 

*/

 const myArr = [0 , 1 , 2 , 3 , 4]

 const myArr2 = new Array(1,2,3,4)


//---------------------------------------------Arrays Methods--------------------------------------------


myArr.push(5)  //5 got added at last.
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

myArr.pop()  // last value from array got pop.
console.log(myArr); // [ 0, 1, 2, 3, 4 ]

myArr.unshift(9)  // value added at front.
console.log(myArr); // [ 9, 0, 1, 2, 3, 4 ]

myArr.shift()  // pop value from front.
console.log(myArr); // [ 0, 1, 2, 3, 4 ]


//-------------------------------------------------------Join()--------------------------------------------



//Join() will Adds all the elements of an array into a string.
const newArr = myArr.join();

console.log(myArr)  //[ 0, 1, 2, 3, 4 ]
console.log(newArr) //0,1,2,3,4 
console.log(typeof newArr) //string




//-------------------------------------------------------Slice & Splice--------------------------------------------

//Slice --> Returns a copy of a section of an array.

console.log("Original Array ", myArr) //[ 0, 1, 2, 3, 4 ]

const myn1 = myArr.slice(1 , 3)
console.log("Slice O/P",myn1) //[ 1, 2 ]
console.log("after using Slice, Original Array",myArr)  //[ 0, 1, 2, 3, 4 ]


//Splice --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const myn2 = myArr.splice(1,3)
console.log("Splice O/P",myn2) //[ 1, 2, 3 ]
console.log("after using Splice, Original Array",myArr) //[ 0, 4 ]



