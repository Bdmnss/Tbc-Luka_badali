const menuItems = document.querySelectorAll(".desktop-header-menu-item");
const menuLines = document.querySelectorAll(".menu-line");
const desktopMenu = document.querySelector(".desktop-menu");
const digitalBankMenu = document.querySelector(
  ".digital-bank-desktop-menu-div"
);
const productsMenu = document.querySelector(".products-desktop-menu-div");
const offersMenu = document.querySelector(".offers-desktop-menu-div");
const conceptSpaceMenu = document.querySelector(
  ".concept-space-desktop-menu-div"
);

const menuMap = {
  0: productsMenu,
  1: offersMenu,
  2: conceptSpaceMenu,
};

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    closeMenus();
    desktopMenu.style.display = "block";
    const line = menuItem.querySelector(".menu-line");
    line.classList.add("menu-line_opened");
    menuMap[index].style.opacity = "100%";
  });
});

function closeMenus() {
  desktopMenu.style.display = "none";
  menuLines.forEach((line, index) => {
    line.classList.remove("menu-line_opened");
    menuMap[index].style.opacity = "0";
  });
}

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    desktopMenu.contains(event.target) || header.contains(event.target);

  if (!isClickInsideMenu) {
    closeMenus();
  }
});
