//PRIMARY FUNCTIONS

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (operator, a, b) => {
  if (operator === '+') {
    total = add(a, b);
    return roundedTotal = total.toFixed(6);
  } else if (operator === '-') {
    total = subtract(a, b);
    return roundedTotal = total.toFixed(6);
  } else if (operator === '*') {
    total = multiply(a, b);
    return roundedTotal = total.toFixed(6);
  } else if (operator === '/') {
    total = divide(a, b);
    return roundedTotal = total.toFixed(6);
  }
};

//DEFAULT VALUES
const display = document.querySelector('#display p');
const numbers = document.querySelectorAll('.number');
const ariths = document.querySelectorAll('.arith');
const equals = document.querySelector('#equals');
const clearAll = document.querySelector('#clearAll');
const backspace = document.querySelector('#backspace');
const decimal = document.querySelector('#decimal');
let firstValue = '';
let secondValue = '';
let operator = '';
let total = 0;
let input = '';
let roundedTotal = '';
let equalsPressed = 'no';
display.textContent = '0';  //display value before any input

//EVENT LISTENERS
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    getInput(number);
  });
});

numbers.forEach((number) => {
  number.addEventListener('click', displayInput);
});

decimal.addEventListener('click', (e) => {
    if (!input.includes('.')) {
    getInput(decimal);
    displayInput();
    };
});


ariths.forEach((arith) => {
  arith.addEventListener('click', (e) => {
    if (operator !== '' && equalsPressed === 'no') {  //if an arith button has already been clicked, then on next arith click it functions like clicking 'equals'
      saveInput();
      operate(operator, firstValue, secondValue);
      displayTotal();
      saveOperator(arith);   //passes the arith button clicked as a parameter to saveOperator so that saveOperator knows what to save as operator
      unmarkEquals();  //toggle how arith behaves depending on if equals pressed, because if equals pressed then secondValue set to '' and next time arith is pressed it operates with secondValue = '' causing problems.
    } else {
      saveOperator(arith);   //same as above
      saveInput();
      unmarkEquals();
    };
  });
});

equals.addEventListener('click', (e) => {
  if (operator !== '') {
    saveInput();
    operate(operator, firstValue, secondValue);
    displayTotal();
    markEquals();
  };
});

clearAll.addEventListener('click', clearValues)

backspace.addEventListener('click', (e) => {
  deleteLast();
  displayInput();
});



//HELPER FUNCTIONS

function getInput(button) {
  return input += button.value;
};

function displayInput() {
  display.textContent = input;
};

function saveInput() {
  if (firstValue === '') {
    firstValue = +input;
    input = '';
  } else {
    secondValue = +input;
    input = '';
  };
};

function saveInputEquals() {
  secondValue = +input;
};

function saveOperator(arith) {    //saves the value of the arith button that was clicked, needs the parameter passed to it from the event listener
  return operator = arith.value;
};

function displayTotal() {
  if (roundedTotal === 'Infinity') {
    display.textContent = 'yeah nah';
  } else {
  display.textContent = +roundedTotal;
  firstValue = +roundedTotal;
  secondValue = '';
  };
};

function markEquals() {
  equalsPressed = 'yes';
};

function unmarkEquals() {
  equalsPressed = 'no';
};

function clearValues() {
  firstValue = '';
  secondValue = '';
  operator = '';
  total = 0;
  input = '';
  roundedTotal = '';
  equalsPressed = 'no';
  display.textContent = '0';
};

function deleteLast() {
  input = input.slice(0, input.length -1);
};












