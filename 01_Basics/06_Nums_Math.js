//------------------------------------Number----------------------------------------------------------

const score = 400; //so JS detect it as a number.
console.log(score) //400    

//But we want to sure about that score is a number. so for that:
const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //100.00 kind of precision value.



const anotherNumber = 23.9899
console.log(anotherNumber.toPrecision(3)); //24.0 making round of values after decimal.


const lakh = 100000
console.log(lakh.toLocaleString('en-IN')) //1,00,000





//--------------------------------------------------Math-----------------------------------------------------

console.log(Math);  //Object [Math] {}
//its an object with lots of properties.

console.log(Math.abs(-4)); // +4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); // 5 , in ceil if value in decimal is more than 4.0 than it will convert it to 5.
console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


//------------------Math Random---------------------------

console.log(Math.random()); //It's value is always going to in between 0 to 1.

//now suppose we want values to be in single digit only.

console.log((Math.random()*10) + 1); //10.657254702890999, we want to remove that precisions.

console.log(Math.floor(Math.random()*10) + 1); 



//Now suppose we want to create a math.random between certain range for that.
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) ) //now we don't get that number in a range. so for that add min in it.

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //In between min & max

