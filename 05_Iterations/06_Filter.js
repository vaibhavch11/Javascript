
//-------------------------------Something More about For Each Loop----------------------------------------
//Note: For Each loop don't do returns.

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    return item  //if we do return , it still don't work.
} )

//values variable just didn't get anything.
console.log(values);  //undefine



//------------------------------------------------Filter------------------------------------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )

console.log(newNums) // [ 5, 6, 7, 8, 9, 10 ]


//------Same operations using For Each-----
const newNums123 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums123.push(num)
    }
} )

console.log(newNums123); //[ 5, 6, 7, 8, 9, 10 ]



//---------------------------------------------Books Data for Filter------------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks)

  /* Output:
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */


userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  /* 
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
  */

