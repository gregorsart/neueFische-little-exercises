"use strict";

console.clear();
console.log("hello newbie");

// ------------------------------------

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //  way 1
  const legalCheckbox = event.target.elements.tos.checked;
  console.log("Terms of Service (tos)", legalCheckbox);
  //   way 2
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("The converted form data object:", data);

  //   bonus (age badness sum)
  const age = event.target.elements.age.value;
  const badness = event.target.elements.badness.value;

  const sumAgeBadness = age + badness;
  console.log("Age Badness Sum:", sumAgeBadness);
});
