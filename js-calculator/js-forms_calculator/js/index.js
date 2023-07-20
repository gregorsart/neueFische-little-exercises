console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const operator = event.target.elements.operator.value;
  // unary operator "+" instead pf parseInt
  const inputA = +event.target.elements.numberA.value;
  const inputB = +event.target.elements.numberB.value;

  console.log(inputA, inputB);

  if (operator === "addition") {
    console.log("addition");
    result = add(inputA, inputB);
  } else if (operator === "subtraction") {
    console.log("subtraction");
    result = subtract(inputA, inputB);
  } else if (operator === "multiplication") {
    console.log("multiplication");
    result = multiply(inputA, inputB);
  } else if (operator === "division") {
    console.log("division");
    result = divide(inputA, inputB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
