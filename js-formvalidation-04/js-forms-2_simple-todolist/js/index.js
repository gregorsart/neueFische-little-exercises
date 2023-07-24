"use strict";
console.clear();
console.log("hello newbie");

// VARIABLES
const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

// EVENTS
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const headlineInput = event.target.elements.headline.value;
  const taskInput = event.target.elements.task.value;

  console.log(headlineInput, taskInput);
  addTodo(headlineInput, taskInput);
  form.reset();
  event.target.elements.headline.focus();
});

// LOGIC
function addTodo(headline, task) {
  const todo = document.createElement("li");
  todo.textContent = `${headline} –– ${task}`;
  todoList.append(todo);
}
