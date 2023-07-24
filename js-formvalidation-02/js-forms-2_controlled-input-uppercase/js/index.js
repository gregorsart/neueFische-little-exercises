"use strict";
console.clear();
console.log("hello newbie");

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const uppercase = event.target.value.toUpperCase();
  event.target.value = uppercase;
});
