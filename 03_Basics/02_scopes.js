//{} -> this is known as scope in (function,if else). Note- not object, because that's object declaration.



if (true) {   //every thing inside this is block scope & everything outside this is global scope.
    let a = 10
    const b = 20
    var c = 30

    x = 40
}

//let & const only work inside the scope.

// console.log(a);  a is not defined
// console.log(b);  b is not defined
console.log(c)  //30 , var work outside the scope which is not good. if we are working in a team.
console.log(x) //40




//-------------------------------------Scope level and mini hoisting---------------------------------------


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); Error out of scope.

     two()

}
one()




// ++++++++++++++++++ interesting for interview ++++++++++++++++++

//Two ways of writing function in JS


function addone(num){
    return num + 1
}
console.log("After function declaration addone :" +addone(5)) //6



const addTwo = function(num){
    return num + 2
}
console.log("After function declaration addTwo :" , addTwo(5)) //7


//-----------------------------------------Let's change it a little bit:-------------------------------

console.log("Before function declaration addone1 :" +addone1(5)) //work completlly fine O/P- 6
function addone1(num){
    return num + 1
}



console.log("Before function declaration addTwo2 :" , addTwo2(5)) //causes an error
const addTwo2 = function(num){
    return num + 2
}


//Later on there is a concept called Hosting in which it tell how to declare a function, where to put it and all.

