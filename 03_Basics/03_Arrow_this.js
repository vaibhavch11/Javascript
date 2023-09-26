//-------------------------------------------This---------------------------------------------------------
//Browser have a global object as window.


/*
Q: What is this? 
Ans: It will refer to the current context.
*/

const user = {
    username : "Vaibhav",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`) 
        // console.log(`${username} , welcome to website`)  Error: username is not defined

        //Let's console log this, to check what its stand for.
        console.log(this)
        /*Output :
        {
            username: 'Vaibhav',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}

user.welcomeMessage() //Vaibhav , welcome to website

//Now suppose we want to change our username. let say sam
user.username = "sam"
user.welcomeMessage() //sam , welcome to website 


//Let console log this outside the user object:
console.log(this) // Output : {}



//--------------------------------------------------Functions------------------------------------------------------

function chai(){
    let username = "Vaibhav"
    console.log(this); // it will give you hell lots of data.
    console.log(this.username); //undefine
}

chai()




//------ explicit returns--------------

const addTwo = (num1, num2) => {
    return num1 + num2
}

//---------- Implicit returns-------------

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )


//---------------object return------------

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))