// Display
updateDisplay('1 + 2');

// update display string
function updateDisplay(displayString) {
  document.querySelector('.display').innerHTML += displayString;
}

// evaluate display string
function evalDisplay() {
  toCalc = document.querySelector('.display').innerHTML;

  if (toCalc === '') {
    alert('Please enter a valid value');
  } else {
    res = eval(toCalc);
    document.querySelector('.display').innerHTML = res;
  }
}
evalDisplay()

// number button implementations
  // get all number buttons using dom
  buttons = document.querySelectorAll('.number-button').forEach((button) => {
    // for each button - onclick
    button.addEventListener('click', () => {
      // get text
      num = button.textContent;
      console.log(num);
      //if number or . or add to calc string
      if (num !== '+/-') {
        // update display
        updateDisplay(num);
        
      } else {
        //do * -1 on rightmost number

      }
      
    });
  });
  

      
// round button implementations


// equals button implementation
  // get display text using dom

  //evaluate and update
