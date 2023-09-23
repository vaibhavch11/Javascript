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