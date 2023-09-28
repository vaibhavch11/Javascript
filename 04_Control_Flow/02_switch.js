
/*This is the syntax of switch case 

 switch (key) {
     case value:
        
         break;

     default:
         break;
 }
*/


const months = "march"

switch (months) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march"); 
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/* 
Note: what happen if we remove that break statement, it will log the all nexts case's. except default.
*/



const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march"); 
        // break; -- suppose remove this break. what its O/P -march , april
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}