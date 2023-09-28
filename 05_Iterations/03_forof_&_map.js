// ------------------------------------------------for of Loop---------------------------------------------

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)    O/P-> 1,2,3,4,5
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

/*O/P:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/


//------------------------------------------------------Maps------------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // It doesn't add duplicate value in map.

console.log(map)

/* O/P:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/* 
IN :- India
USA :- United States of America
Fr :- France
*/



//NOTE: we can't use "for of" loop on object. it cannot be iterable. (for that we use "for In" loop).
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);  //Error
    
}




