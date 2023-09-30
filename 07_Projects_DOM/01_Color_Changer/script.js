const buttons = document.querySelectorAll('.button')
// console.log(buttons)
// NodeList{0: {…}, 1: {…}, 2: {…}, 3: {…}}

const body = document.querySelector('body')
console.log(body)


buttons.forEach((button)=>{
// console.log(button)
  button.addEventListener('click',(e)=>{
    console.log(e.target) //get whole element, on which we will click.

    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor = e.target.id
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id
        break;
      case 'white':
        body.style.backgroundColor = e.target.id
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id
        break;

      default:
         break;
    }
})
})
