
//-------------------------------------------------For In Loop---------------------------------------------

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);      /*O/P:->  js ,cpp ,rb, swift */
}

//to get Value.
for (const key in myObject) {
    console.log(myObject[key]);      /*O/P:->  javascript,C++,ruby,swift by apple */
}



//Can we use For In loop on array.




//----------------------------------Map is Not iterable using for loop--------------------------------------------
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
