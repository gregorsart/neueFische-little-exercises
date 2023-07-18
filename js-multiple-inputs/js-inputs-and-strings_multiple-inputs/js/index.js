/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

// sub challenge 1.

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   secondInput.value = firstInput.value;
// });

// sub challenge 2.

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   secondInput.value = firstInput.value.toUpperCase();
// });

// sub challenge 3.

button.addEventListener("click", (event) => {
  event.preventDefault();
  const firstInputTemp = firstInput.value;
  const secondInputTemp = secondInput.value;
  firstInput.value = secondInputTemp;
  secondInput.value = firstInputTemp;
});
