const privacyMenu = document.querySelector(".privacy-menu");
const privacyCloseIcon = document.querySelector(".privacy-menu-close-div");
const privacyButton = document.querySelector(".privacy-button");
const overlay = document.querySelector(".overlay");

privacyButton.addEventListener("click", function () {
  privacyMenu.classList.add("isOpened");
  overlay.classList.add("isOpened");
});

privacyCloseIcon.addEventListener("click", function () {
  privacyMenu.classList.remove("isOpened");
  overlay.classList.remove("isOpened");
});
