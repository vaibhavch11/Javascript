// Immediately Invoked Function Expressions (IIFE)

//first () represent function, & secound () represent function call.

//Q: but why do we need IIFE?
// IIFE in javascript is one of the good ways to hide data from the global scope as it creates its own scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')