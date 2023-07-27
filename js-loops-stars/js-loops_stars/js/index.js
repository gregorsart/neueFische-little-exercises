"use strict";
console.clear();
console.log("hello newbie");

const starContainer = document.querySelector('[data-js="star-container"]');

for (let counter = 5; counter > 0; counter--) {
  // filled or empty stars
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", "assets/star-empty.svg");

  // EVENT
  imageElement.addEventListener("click", () => {
    renderStar(imageElement);
  });

  starContainer.append(imageElement);
}

function renderStar(imageElement) {
  imageElement.setAttribute("src", "assets/star-filled.svg");
  starContainer.append(imageElement);
}
