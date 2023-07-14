"use strict";
console.clear();

// GLOBAL VARIABLES

let pizzaSizeLeft = 24;
let pizzaSizeRight = 24;

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// PIZZA 1
pizzaInput1.addEventListener("input", (ele) => {
  // Get Percentage
  pizzaSizeLeft = ele.target.value;
  output.textContent = Math.round(
    calculatePizzaGain(pizzaSizeLeft, pizzaSizeRight)
  );
  // Update UI
  updatePizzaDisplay(pizza1, pizzaSizeLeft);
  updateOutputColor(pizzaSizeLeft, pizzaSizeRight);
});

// PIZZA 2
pizzaInput2.addEventListener("input", (ele) => {
  // Get Percentage
  pizzaSizeRight = ele.target.value;
  output.textContent = Math.round(
    calculatePizzaGain(pizzaSizeLeft, pizzaSizeRight)
  );
  // Update UI
  updatePizzaDisplay(pizza2, pizzaSizeRight);
  updateOutputColor(pizzaSizeLeft, pizzaSizeRight);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const pizzaLeft = areaCircle(diameter1);
  const pizzaRight = areaCircle(diameter2);

  const pizzaGain = ((pizzaLeft - pizzaRight) / pizzaRight) * 100;
  return pizzaGain;
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaELement, newSize) {
  pizzaELement.style.width = `${(newSize / 24) * 100}px`;
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(sizeLeft, sizeRight) {
  outputSection.style.backgroundColor = "var(--green)";
  if (sizeLeft < sizeRight) {
    outputSection.style.backgroundColor = "var(--red)";
  }
}

// HELPER FUNCTIONS
function areaCircle(diameter) {
  return Math.PI * diameter;
}

// CALL FUNCTIONS (TEST)
