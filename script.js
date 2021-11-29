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
const ariths = document.querySelectorAll('.arith');
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



ariths.forEach((arith) => {
  arith.addEventListener('click', (e) => {
    if (operator !== '') {  //if an arith button has already been clicked, then on next arith click it functions like clicking 'equals'
      saveInput();
      operate(operator, firstValue, secondValue);
      displayTotal();
      saveOperator(arith);   //passes the arith button clicked as a parameter to saveOperator so that saveOperator knows what to save as operator
    } else {
      saveOperator(arith);   //same as above
      saveInput();
    };
  });
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
    secondValue = +input;
    input = '';
  };
};

function saveOperator(arith) {    //saves the value of the arith button that was clicked, needs the parameter passed to it from the event listener
  return operator = arith.value;
};

function displayTotal() {
  display.textContent = total
  firstValue = total;
};












