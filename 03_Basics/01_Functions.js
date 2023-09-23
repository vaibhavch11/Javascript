//function is a set of statements that performs a task or calculates a value, but for a procedure 
//to qualify as a function.


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName //This is reference it to the sayMyName function. O/P- nothing
sayMyName() // calling the sayMyName function, O/P - HITESH




function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

addTwoNumbers(3, "5") //35
addTwoNumbers(3, "a") //3a
addTwoNumbers(3, null) //3




function loginUserMessage(username){
    if(username === undefined){    //base case if we didn't pass anything in argument.
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Vaibhav"))  //Vaibhav just logged in
