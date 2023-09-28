const coding = ["js", "ruby", "java", "python", "cpp"]


//--------------------------------------Normal Function---------------------------------------
coding.forEach( function (val){
    console.log(val);
} )


//--------------------------------------Arrow Function---------------------------------------
coding.forEach( (item) => {
    console.log(item);
} )


//---------------------------------Object for Each---------------------------------------------------------

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )