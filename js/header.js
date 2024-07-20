const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
isMenuOpen = false;
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    if (!header.classList.contains("isHeaderHidden")) {
      header.classList.add("isHeaderHidden");
    }
  } else {
    if (header.classList.contains("isHeaderHidden")) {
      header.classList.remove("isHeaderHidden");
    }
  }

  lastScrollTop = scrollTop;
});

burgerIcon.addEventListener("click", function () {
  main.classList.toggle("isMenuOpen");
  footer.classList.toggle("isMenuOpen");
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    burgerMenu.classList.remove("isMenuOpen");
    burgerIcon.classList.add("closeIcon");
    header.style.backgroundColor = "#f9fafa";
  } else {
    burgerMenu.classList.add("isMenuOpen");
    burgerIcon.classList.remove("closeIcon");
  }
});
