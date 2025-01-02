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
  toCalc = toCalc.replace('x', '*').replace('÷', '/').replace('√', 'Math.sqrt(');
  toCalc = processSqrt(toCalc);
  // calculate
  let res = eval(toCalc)
  res = parseFloat(res.toFixed(2)); // wont return trailing zeros
  // display the result
  document.querySelector('.display').innerHTML = res;
}

// reset display
function resetDisplay() {
  document.querySelector('.display').innerHTML = '';
}

// sqrt helper
function processSqrt(toCalc) {
  // loop through string
  for (let i = 0; i < toCalc.length; i += 1) {
    // if 'M' found, add 10 to i ('Math.sqrt(' offset))
    if (toCalc[i] === 'M') {
      i += 10;
      // loop until not in same number or end of string
      while (i <= toCalc.length) {
        // add )
        if (!'0123456789.'.includes(toCalc[i])) {
          toCalc = toCalc.slice(0, i) + ')' + toCalc.slice(i);
          break;
        }
        i += 1;
      }
    }
  }
  return toCalc;
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
          // get display string
          toCalc = document.querySelector('.display').innerHTML.trim();
          
           // reverse loop through the string
          for (let i = toCalc.length - 1; i >= 0; i -= 1) {
            if (!'0123456789.'.includes(toCalc[i])) {
              //looped through last number, replace sign
              switch (toCalc[i]) {
                case '+':
                  toCalc = toCalc.slice(0, i) + '-' + toCalc.slice(i + 1);
                  break;
                case '-':
                  toCalc = toCalc.slice(0, i) + '+' + toCalc.slice(i + 1);
                  break;
                default:
                  toCalc = toCalc.slice(0, i + 1) + '-' + toCalc.slice(i + 1);
                  break;
              }
              break;
            }
          }
          resetDisplay();
          updateDisplay(toCalc);
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
