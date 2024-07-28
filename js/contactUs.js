const contactUsButton = document.querySelector(".contact-us-icon");
const contactUsForm = document.querySelector(".contact-us-section");
const contactUsCloser = document.querySelector(".contact-us-close-div");
const contactUsOverlay = document.querySelector(".overlay");

contactUsButton.addEventListener("click", function () {
  showElementWithTransition(contactUsForm);
  overlay.style.display = "block";
});

contactUsCloser.addEventListener("click", function () {
  hideElementWithTransition(contactUsForm);
  overlay.style.display = "none";
});

contactUsOverlay.addEventListener("click", function () {
  hideElementWithTransition(contactUsForm);
  overlay.style.display = "none";
});

function showElementWithTransition(element) {
  element.style.display = "block";
  setTimeout(() => {
    element.classList.remove("hide-element");
    element.classList.add("show-element");
  }, 10);
}

function showElementWithFlexTransition(element) {
  element.style.display = "flex";
  setTimeout(() => {
    element.classList.remove("hide-element");
    element.classList.add("show-element");
  }, 10);
}

function hideElementWithTransition(element) {
  element.classList.remove("show-element");
  element.classList.add("hide-element");
  setTimeout(() => {
    element.style.display = "none";
  }, 10);
}

const nameSurnameInput = document.querySelector("#name-surname-input");
const nameSurnameLabel = document.querySelector(".name-surname-label");
const nameSurnameError = document.querySelector(".name-surname-error");
let isNameSurnameError = true;

nameSurnameInput.addEventListener("focus", function () {
  nameSurnameInput.style.border = "1px solid #007aff";
  nameSurnameInput.style.outline = "none";
  nameSurnameLabel.classList.add("is-focused");
});

nameSurnameInput.addEventListener("blur", () => {
  if (nameSurnameInput.value === "") {
    nameSurnameLabel.classList.remove("is-focused");
  }

  if (nameSurnameInput.value.trim() === "") {
    nameSurnameError.style.display = "block";
    nameSurnameInput.style.border = "1px solid red";
    isNameSurnameError = true;
  } else {
    nameSurnameError.style.display = "none";
    nameSurnameInput.style.border = "1px solid #ccc";
    isNameSurnameError = false;
  }
});

nameSurnameInput.addEventListener("input", () => {
  if (nameSurnameInput.value.trim() !== "") {
    nameSurnameError.style.display = "none";
    nameSurnameInput.style.border = "1px solid #007aff";
  }
  enableSubmitButton();
});

const numberInput = document.querySelector("#number-input");
const numberLabel = document.querySelector(".number-label");
const numberError = document.querySelector(".number-error");
let isNumberError = true;

numberInput.addEventListener("focus", function () {
  numberInput.style.border = "1px solid #007aff";
  numberInput.style.outline = "none";
  numberLabel.classList.add("is-focused");
});

numberInput.addEventListener("blur", () => {
  if (numberInput.value === "") {
    numberLabel.classList.remove("is-focused");
  }

  if (numberInput.value.trim() === "") {
    numberError.style.display = "block";
    numberInput.style.border = "1px solid red";
    numberError.textContent = "აუცილებელი ველი";
    isNumberError = true;
  } else if (numberInput.value.length < 9) {
    numberError.style.display = "block";
    numberInput.style.border = "1px solid red";
    numberError.textContent =
      "ტელეფონის ნომრის მინიმალური სიგრძე უნდა იყოს 9 ციფრი";
    isNumberError = true;
  } else {
    numberError.style.display = "none";
    numberInput.style.border = "1px solid #ccc";
    isNumberError = false;
  }
});

numberInput.addEventListener("input", () => {
  if (numberInput.value.trim() !== "") {
    numberError.style.display = "none";
    numberInput.style.border = "1px solid #007aff";
    enableSubmitButton();
  } else if (!numberInput.value.length < 9) {
    numberError.style.display = "none";
    numberInput.style.border = "1px solid #007aff";
    enableSubmitButton();
  }
});

const emailInput = document.querySelector("#email-input");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".email-error");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isEmailError = true;

emailInput.addEventListener("focus", function () {
  emailInput.style.border = "1px solid #007aff";
  emailInput.style.outline = "none";
  emailLabel.classList.add("is-focused");
});

emailInput.addEventListener("blur", () => {
  if (emailInput.value === "") {
    emailLabel.classList.remove("is-focused");
  }

  if (emailInput.value.trim() === "") {
    emailError.style.display = "block";
    emailInput.style.border = "1px solid red";
    emailError.textContent = "აუცილებელი ველი";
    isEmailError = true;
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.style.display = "block";
    emailInput.style.border = "1px solid red";
    emailError.textContent = "ელფოსტის მისამართი არ არის ვალიდური";
    isEmailError = true;
  } else {
    emailError.style.display = "none";
    emailInput.style.border = "1px solid #ccc";
    isEmailError = false;
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    emailError.style.display = "none";
    emailInput.style.border = "1px solid #007aff";
    enableSubmitButton();
  } else if (emailRegex.test(emailInput.value)) {
    emailError.style.display = "none";
    emailInput.style.border = "1px solid #007aff";
    enableSubmitButton();
  }
});

const companyInput = document.querySelector("#company-input");
const companyLabel = document.querySelector(".company-label");

companyInput.addEventListener("focus", function () {
  companyInput.style.border = "1px solid #007aff";
  companyInput.style.outline = "none";
  companyLabel.classList.add("is-focused");
});

companyInput.addEventListener("blur", () => {
  if (companyInput.value === "") {
    companyLabel.classList.remove("is-focused");
  }
});

const textarea = document.querySelector("#textarea");
const textareaLabel = document.querySelector(".textarea-label");
const textareaError = document.querySelector(".textarea-error");
let isTextareaError = true;

textarea.addEventListener("focus", function () {
  textarea.style.border = "1px solid #007aff";
  textarea.style.outline = "none";
  textareaLabel.classList.add("is-focused");
});

textarea.addEventListener("blur", () => {
  if (textarea.value === "") {
    textareaLabel.classList.remove("is-focused");
  }

  if (textarea.value.trim() === "") {
    textareaError.style.display = "block";
    textarea.style.border = "1px solid red";
    isTextareaError = true;
  } else {
    textareaError.style.display = "none";
    textarea.style.border = "1px solid #ccc";
    isTextareaError = false;
  }
});

textarea.addEventListener("input", () => {
  if (textarea.value.trim() !== "") {
    textareaError.style.display = "none";
    textarea.style.border = "1px solid #007aff";
    isTextareaError = false;
    enableSubmitButton();
  }
});

const checkbox = document.querySelector("#checkbox");
let isChecked = false;
checkbox.addEventListener("change", () => {
  isChecked = checkbox.checked;
  enableSubmitButton();
});

const contactUsSubmitButton = document.querySelector(".contact-us-button");

function enableSubmitButton() {
  if (
    !isNameSurnameError &&
    !isNumberError &&
    !isEmailError &&
    !isTextareaError &&
    isChecked
  ) {
    contactUsSubmitButton.disabled = false;
  } else {
    contactUsSubmitButton.disabled = true;
  }
}

const contactUsSuccess = document.querySelector(".success-div");
const form = document.querySelector(".form");

contactUsSubmitButton.addEventListener("click", function (event) {
  event.preventDefault();
  hideElementWithTransition(form);
  showElementWithFlexTransition(contactUsSuccess);
  setTimeout(() => {
    hideElementWithTransition(contactUsSuccess);
    showElementWithFlexTransition(form);
  }, 3000);
});

const contactUsRulesButton = document.querySelector(".contact-us-rules");
const contactUsRulesDiv = document.querySelector(".contact-us-rules-div");
const contactUsBackButton = document.querySelector(".contact-us-back-button");

contactUsRulesButton.addEventListener("click", function () {
  hideElementWithTransition(form);
  showElementWithTransition(contactUsRulesDiv);
});

contactUsBackButton.addEventListener("click", function () {
  hideElementWithTransition(contactUsRulesDiv);
  showElementWithTransition(form);
});
