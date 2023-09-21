//suppose we have two varibale and we want them to concatinate them.

let myName = "vaibhav";
let repoCount = 50;

// console.log(myName + repoCount + " Value"); vaibhav50 Value, But that not a good way.

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`) // Best/recommended way.


//One more way to declare a string.
const gameName = new String('Vaibhav');  
console.log(gameName) // [String: 'Vaibhav']



//----------------------------------------Prototype in String-----------------------------------------------------

console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //VAIBHAV
console.log(gameName.charAt(0)); //V
console.log(gameName.indexOf('a')); //1


const anotherString = gameName.slice(0,4) //VAIB


const newStringOne = "    hitesh. ";
console.log(newStringOne.trim()); //it will remove all the empty spaces from string.



console.log(newStringOne.replace('i','a'));



