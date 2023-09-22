
// const tinderUser = new Object(); //This is an singleton object
const tinderUser = {}         //This is not a singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vaibhav",
            lastname: "chauhan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //vaibhav
//there is topic related to this which is called optimal chaining.


//------------------------------------------Merge Objects------------------------------------------------------

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}


// const obj3 = { obj1, obj2 }
// console.log(obj3) 
// O/P: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//It will create object inside object which we don't want.


//    1. using Assign Operator :

const obj3 = Object.assign({}, obj1, obj2) //{} -> target , obj1 & obj2 act as a source.
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//  2. using spread Operator (RECOMMANDED):


const obj4 = {...obj1, ...obj2}
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



//---------------------------------------Important methods in Objects---------------------------------------


console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
//Note that its datatype is array

console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]