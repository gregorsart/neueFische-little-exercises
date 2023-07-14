"use strict";

console.clear();

console.log("hello newbie");

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

// function getCurrentHour() {
//   const now = new Date();
//   const currentHour = now.getHours();
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }
// }

// ARROW FUNCTION EXPRESSIONS I

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour === 0) return "12am";
  else if (currentHour === 12) return "12pm";
  else if (currentHour <= 11) return currentHour + "am";
  else return currentHour - 12 + "pm";
};

// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }

// ARROW FUNCTION EXPRESSIONS II

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

// function cleanInput(string) {
//   return string.toLowerCase().trim();
// }

// ARROW FUNCTION EXPRESSIONS III

const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   return true;
// };

// CLASSIC FUNCTION I

function isOddAndSmall(number) {
  if (number > 10) return false;
  if (number % 2 === 0) return false;
  return true;
}

// const add3 = (a, b, c) => a + b + c;

// CLASSIC FUNCTION II

function add3(a, b, c) {
  return a + b + c;
}

// const repeat10 = (string) => string.repeat(10);

// CLASSIC FUNCTION III

function repeat10(string) {
  return string.repeat(10);
}

// ME EXPERIMENTING

// Step I

// function shellFunc(callbackFunc) {
//   callbackFunc();
// }

// function myCallbackFunc() {
//   console.log("Callback Func works!");
// }

// shellFunc(myCallbackFunc);

// Step 2

function shellFunc(name, callbackFunc) {
  callbackFunc(name);
}

function myCallbackFunc(argument) {
  console.log("Callback Func works, ", argument, "!");
}

shellFunc("newbie", myCallbackFunc);
