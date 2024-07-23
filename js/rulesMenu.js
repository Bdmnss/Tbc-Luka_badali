const rulesMenu = document.querySelector(".rules-menu");
const rulesCloseIcon = document.querySelector(".rules-menu-close-div");
const rulesButton = document.querySelector(".rules-button");
const rulesOverlay = document.querySelector(".overlay");

rulesButton.addEventListener("click", function () {
  rulesMenu.classList.add("isOpened");
  rulesOverlay.classList.add("isOpened");
});

rulesCloseIcon.addEventListener("click", function () {
  rulesMenu.classList.remove("isOpened");
  rulesOverlay.classList.remove("isOpened");
});

rulesOverlay.addEventListener("click", function () {
  rulesMenu.classList.remove("isOpened");
  rulesOverlay.classList.remove("isOpened");
});
