let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (operator, a, b) => {
  if (operator === '+') {
    return total = add(a, b);
  } else if (operator === '-') {
    return total = subtract(a, b);
  } else if (operator === '*') {
    return total = multiply(a, b);
  } else if (operator === '/') {
    return total = divide(a, b);
  }
};

const display = document.querySelector('#display p');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
let firstValue = '';
let secondValue = '';
let operator = '';
let total = '';
let input = '';


// get input 1,
// make display === input 1;
// operator saves input 1, saves operator, starts get input 2;
// make display === input 2;
// equals operates(input 1, input 2, operator);


numbers.forEach((number) => {
  number.addEventListener('click', getInput);
});

numbers.forEach((number) => {
  number.addEventListener('click', displayInput);
});

operators.forEach((operator) => {
  operator.addEventListener('click', saveOperator);
});

operators.forEach((operator) => {
  operator.addEventListener('click', saveInput);
});

equals.addEventListener('click', saveInput);

equals.addEventListener('click', (e) => {
  operate(operator, firstValue, secondValue)
});

equals.addEventListener('click', displayTotal);



function getInput() {
  return input += this.value;
};

function displayInput() {
  display.textContent = input;
};

function saveInput() {
  if (firstValue === '') {
    firstValue = +input;
    input = '';
  } else {
    secondValue = +input
  };
};

function saveOperator() {
  return operator = this.value;
};

function displayTotal() {
  display.textContent = total
  firstValue = total;
};












