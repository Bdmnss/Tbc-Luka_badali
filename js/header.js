const main = document.querySelector("main");
const footer = document.querySelector("footer");
const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
isMenuOpen = false;
let lastScrollTop = 0;

burgerIcon.addEventListener("click", function () {
  if (burgerMenu.style.display === "none" || burgerMenu.style.display === "") {
    showElementWithTransition(burgerMenu);
    hideElementWithTransition(main);
    hideElementWithTransition(footer);
    burgerIcon.classList.add("closeIcon");
    header.style.backgroundColor = "#f9fafa";
  } else {
    hideElementWithTransition(burgerMenu);
    console.log(burgerMenu);
    showElementWithTransition(main);
    console.log(main);
    showElementWithTransition(footer);
    console.log(footer);
    burgerIcon.classList.remove("closeIcon");
    header.style.backgroundColor = "#fff";
  }
});

function showElementWithTransition(element) {
  element.style.display = "block";
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
