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
      menuOptions.style.display = "block";
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
