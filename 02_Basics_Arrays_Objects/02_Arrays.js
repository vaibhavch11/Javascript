
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]




//------------------------------------------------spread operator---------------------------------------------

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//NOTE: Its better to use Spread Operator than concat.


//---------------------------------------------------flat-------------------------------------------------------

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]


//------------------------------------------------------------------------------------------------------------

console.log(Array.isArray("Vaibhav")) //false, it's not a array.
console.log(Array.from("Vaibhav"))   // ['V', 'a', 'i','b', 'h', 'a','v']

console.log(Array.from({name: "hitesh"})) // interesting, but didn't understand yet.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));