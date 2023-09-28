
//------------------------------------------Basic for loop-------------------------------------------

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}





//-----------------------------------------------------Break and continue-------------------------------------

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break  // it will came out from the scope after finding 5.
    }
   console.log(`Value of i is ${index}`);
    
}




for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // it will still continue after finding 5.
    }
   console.log(`Value of i is ${index}`);
    
}