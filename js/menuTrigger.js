const menuButton = document.querySelector(".open-close-div");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".menu-close");
const menuOptions = document.querySelector(".menu-trigger-options-closed-div");
menuOpened = false;

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  menuOpened = !menuOpened;
  if (menuOpened) {
    menuIcon.style.opacity = "0";
    closeIcon.style.opacity = "0";
    setTimeout(() => {
      menuIcon.classList.remove("menu-icon");
      menuIcon.classList.add("menu-close");
      closeIcon.classList.remove("menu-close");
      closeIcon.classList.add("menu-icon");
      menuOptions.classList.remove("menu-trigger-options-closed-div");
      menuOptions.classList.add("menu-trigger-options-div");
      menuOptions.style.display = "flex";
      menuOptions.style.flexDirection = "column";
      closeIcon.style.opacity = "1";
    }, 500);
  } else {
    closeIcon.style.opacity = "0";
    menuIcon.style.opacity = "0";
    setTimeout(() => {
      menuIcon.classList.remove("menu-close");
      menuIcon.classList.add("menu-icon");
      closeIcon.classList.remove("menu-icon");
      closeIcon.classList.add("menu-close");
      menuOptions.classList.remove("menu-trigger-options-div");
      menuOptions.classList.add("menu-trigger-options-closed-div");
      menuIcon.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      menuOptions.style.display = "none";
    }, 1000);
  }
});

const contactUsIcon = document.querySelector(".contact-us-icon");
const contactUsHover = document.querySelector(".contact-us-hover");
const numberIcon = document.querySelector(".number-icon");
const numberHover = document.querySelector(".number-hover");
const locationIcon = document.querySelector(".location-icon");
const locationHover = document.querySelector(".location-hover");

contactUsIcon.addEventListener("mouseover", () => {
  contactUsHover.classList.add("show-hover");
});

contactUsIcon.addEventListener("mouseout", () => {
  contactUsHover.classList.remove("show-hover");
});

numberIcon.addEventListener("mouseover", () => {
  numberHover.classList.add("show-hover");
});

numberIcon.addEventListener("mouseout", () => {
  numberHover.classList.remove("show-hover");
});

locationIcon.addEventListener("mouseover", () => {
  locationHover.classList.add("show-hover");
});

locationIcon.addEventListener("mouseout", () => {
  locationHover.classList.remove("show-hover");
});
