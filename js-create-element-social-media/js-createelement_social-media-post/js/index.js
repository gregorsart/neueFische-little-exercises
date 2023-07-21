"use strict";

console.clear();
console.log("hello, newbie");

// --------------------------------------------

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// CREATE ELEMENT

const articleEle = document.createElement("article");
const pEle = document.createElement("p");
const footerEle = document.createElement("footer");
const spanEle = document.createElement("span");
const buttonEle = document.createElement("button");

// FILL

pEle.textContent = "I am a super important text";
spanEle.textContent = "@username";
buttonEle.textContent = " ♥ Like";

// CLASSES
articleEle.classList.add("post");
pEle.classList.add("post__content");
footerEle.classList.add("post__footer");
buttonEle.classList.add("post__button");

// APPEND

document.body.append(articleEle);
articleEle.append(pEle, footerEle);
footerEle.append(spanEle, buttonEle);

// Exercise:
// Use document.createElement() and append another social media post to the body.
