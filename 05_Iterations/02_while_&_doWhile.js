

//-----------------------------------------------While Loop--------------------------------------------------
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

/*Output
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/ 


//---------------------------------------------Do-while Loop---------------------------------------------------

let score = 5

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

/* 
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10
*/

//Let's say score = 11, now what's its otput: 
//first it will going to print score = 11 , then check for the condition.