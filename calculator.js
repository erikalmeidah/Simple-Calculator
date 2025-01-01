// Display
// update display string
function updateDisplay(displayString) {
  if (displayString === 'CE') {
    document.querySelector('.display').innerHTML = document.querySelector('.display').innerHTML.slice(0, -1);
  } else {
    document.querySelector('.display').innerHTML += displayString;
  }
}

// evaluate display string
function evalDisplay() {
  // get string to calculate
  toCalc = document.querySelector('.display').innerHTML;
  toCalc = toCalc.replace('x', '*').replace('÷', '/').replace('√', 'Math.sqrt');
  // calculate
  let res = Function('return ' + toCalc)();
  res = parseFloat(res.toFixed(2));
  // display the result
  document.querySelector('.display').innerHTML = res;
}

// reset display
function resetDisplay() {
  document.querySelector('.display').innerHTML = '';
}

// Number buttons
  // get all number buttons using dom
  buttons = document.querySelectorAll('.number-button').forEach((button) => {
    // for each button - onclick
    button.addEventListener('click', () => {
      // get text
      num = button.textContent.trim();
      //if number or . or add to calc string
      switch (num) {
        case '.':
          updateDisplay(num);
          break;
        case '+/-':
          // TODO
          // reverse loop through display string until you find beginning or operation sign, then add - in front
          break;
        default:
          updateDisplay(num);
          break;
      }
    });
  });
       
// Round buttons
buttons = document.querySelectorAll('.round-button').forEach((button) => {
  // for each button - onclick
  button.addEventListener('click', () => {
    operation = button.textContent.trim();
    switch (operation) {
      case 'C':
        resetDisplay();
        break;
      case 'CE':
        updateDisplay('CE');
        break;
      case '√':
        //TODO
        break;
      default:
        updateDisplay(operation);
        break;
    }
  });
});

// Equals button
equalsButton = document.querySelectorAll('.equals-button').forEach((button) => {
  button.addEventListener('click', () => {
    evalDisplay();
  });
});
