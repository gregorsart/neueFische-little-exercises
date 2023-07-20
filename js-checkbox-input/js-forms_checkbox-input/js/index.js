console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosSuccess = document.querySelector('[data-js="success"]');

// Logic

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// Events

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Checkbox", event.target.elements.tos.checked);
  // --v-- write your code here --v--
  if (event.target.elements.tos.checked) {
    hideTosError();
    showTosSuccess();
  } else {
    showTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

  // alert("Form submitted");
});

hideTosError();
