//Singleton
//-> Whenever we declare as a litrals so there is no singleton, if variable created using constructore
//so its always singleton.


//----------------------------------------Object Literal-------------------------------------------------------
const jsUser = {
    myName : "Vaibhav",
    age: 18,
    location: "Jaipur",
    email: "vaibhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "full name" : "Vaibhav Chauhan"
}

//NOTE: myName,age...ect are track behind the scene as string"".

//-------------------------------------How to Access objects:---------------------------------------------------

//1.This is the first way to access object.
console.log(jsUser.email) //vaibhav@google.com

//2. secound to access object data.
console.log(jsUser["email"]) //vaibhav@google.com


//Suppose we want to access, "full name" from jsUser. But we can't access it using . operator. so we have to use square notation.
console.log(jsUser["full name"]) //Vaibhav Chauhan





/* 

Creating symbol

const mySym = SYmbol("Key1")


const jsUser = {
    myName : "Vaibhav",
    [mySym]: "mykey1",    //This is how we access symbol datatype.
    age: 18,
    location: "Jaipur",
    email: "vaibhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "full name" : "Vaibhav Chauhan"
}
*/


//Suppose we want to change my email
jsUser.email = "vashu202@gmail.com"
console.log(jsUser["email"]) //vashu202@gmail.com



//Now want to lock the object for that:
Object.freeze(jsUser);  //after that what ever changes we have that doesn't get change in jsUser
