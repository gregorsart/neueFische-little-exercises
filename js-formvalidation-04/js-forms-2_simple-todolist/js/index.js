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
  const infoText = document.querySelector('[data-js="info-text"]');
  if (headline && task) {
    infoText.setAttribute("hidden", "");
    // create ELEMENT
    const todo = document.createElement("li");
    const removeButton = document.createElement("button");

    // EVENT
    removeButton.addEventListener("click", (event) => {
      console.log("Click", event.target.parentNode);
      event.target.parentNode.remove();
    });

    removeButton.setAttribute("type", "button");
    removeButton.textContent = "Remove";
    todo.textContent = `${headline} –– ${task}`;
    // append to DOM
    todoList.append(todo);
    todo.append(removeButton);
  } else {
    infoText.removeAttribute("hidden");
  }
}

function removeTodo() {}
