const productTitle = document.querySelector(
  ".desktop-header-menu-product-title"
);
const offerTitle = document.querySelector(".desktop-header-menu-offer-title");
const conceptSpaceTitle = document.querySelector(
  ".desktop-header-menu-concept-title"
);

const desktopMenu = document.querySelector(".desktop-menu");
const digitalBankMenu = document.querySelector(
  ".digital-bank-desktop-menu-div"
);
const productsMenu = document.querySelector(".products-desktop-menu-div");
const offersMenu = document.querySelector(".offers-desktop-menu-div");
const conceptSpaceMenu = document.querySelector(
  ".concept-space-desktop-menu-div"
);

function openMenu(menu, title) {
  closeMenus();
  desktopMenu.style.display = "block";
  digitalBankMenu.style.display = "block";
  menu.style.display = "flex";
  title.style.borderBottom = "2px solid #182cc0";
}

function closeMenus() {
  desktopMenu.style.display = "none";
  digitalBankMenu.style.display = "none";
  productsMenu.style.display = "none";
  offersMenu.style.display = "none";
  conceptSpaceMenu.style.display = "none";
  productTitle.style.borderBottom = "none";
  offerTitle.style.borderBottom = "none";
  conceptSpaceTitle.style.borderBottom = "none";
}

productTitle.addEventListener("click", () => {
  if (productsMenu.style.display === "flex") {
    closeMenus();
  } else {
    openMenu(productsMenu, productTitle);
  }
});

offerTitle.addEventListener("click", () => {
  if (offersMenu.style.display === "flex") {
    closeMenus();
  } else {
    openMenu(offersMenu, offerTitle);
  }
});

conceptSpaceTitle.addEventListener("click", () => {
  if (conceptSpaceMenu.style.display === "flex") {
    closeMenus();
  } else {
    openMenu(conceptSpaceMenu, conceptSpaceTitle);
  }
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    desktopMenu.contains(event.target) ||
    digitalBankMenu.contains(event.target) ||
    productsMenu.contains(event.target) ||
    offersMenu.contains(event.target) ||
    conceptSpaceMenu.contains(event.target) ||
    productTitle.contains(event.target) ||
    offerTitle.contains(event.target) ||
    conceptSpaceTitle.contains(event.target);

  if (!isClickInsideMenu) {
    closeMenus();
  }
});
