const form = document.querySelector('form');
// console.log(form)

form.addEventListener('submit', (e) => {
  //  console.log(e)

  e.preventDefault(); // don't get refresh after click osn Calculate button.

  const height = parseInt(document.querySelector('#height').value);
  console.log(height)
  //  Note that we will get string value from form. need to add parseInt.

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //height == NaN is old way of checking value.
  //isNaN(height) is a new way to check value.(recommanded).

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter valid height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter valid height';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    switch (bmi) {
        case bmi<18.6:
            results.innerHTML = `<span>${bmi} ,underweight</span>`;
            break;
      
        case bmi > 24.9:
            results.innerHTML = `<span>${bmi}, Normal</span>`;
            break;

        default:
            results.innerHTML = `<span>${bmi}, Overweight</span>`;
                break;
        }
      }
  }

  
);







