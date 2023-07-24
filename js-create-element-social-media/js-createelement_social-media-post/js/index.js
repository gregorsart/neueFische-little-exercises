"use strict";

console.clear();
console.log("hello, newbie");

// --------------------------------------------

// CREATE ELEMENT
const articleElement = document.createElement("article");
const pElement = document.createElement("p");
const footerElement = document.createElement("footer");
const spanElement = document.createElement("span");
const buttonElement = document.createElement("button");

// FILL CONTENT
pElement.textContent = "I am a super important text";
spanElement.textContent = "@username";
buttonElement.textContent = "♥ Like";

// ADD CLASSES
articleElement.classList.add("post");
pElement.classList.add("post__content");
footerElement.classList.add("post__footer");
buttonElement.classList.add("post__button");

// BUTTON ADD TYPE & DATA-JS
buttonElement.setAttribute("type", "button");
buttonElement.setAttribute("data-js", "like-button");

// APPEND TO DOM
document.body.append(articleElement);
articleElement.append(pElement, footerElement);
footerElement.append(spanElement, buttonElement);

// EVENT

const likeButton = document.querySelectorAll('[data-js="like-button"]');
likeButton.forEach((buttonElement) => {
  buttonElement.addEventListener("click", handleLikeButtonClick);
});

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// Exercise:
// Use document.createElement() and append another social media post to the body.
