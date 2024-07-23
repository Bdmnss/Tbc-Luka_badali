const productContainer = document.querySelector(".products-slider");
const productItems = productContainer.querySelectorAll(".products-slide");
let productItemWidth = productItems[0].offsetWidth;

let productIsScrolling;

productContainer.addEventListener("scroll", () => {
  window.clearTimeout(productIsScrolling);

  productIsScrolling = setTimeout(() => {
    const scrollLeft = productContainer.scrollLeft;
    const index = Math.round(scrollLeft / productItemWidth);

    productContainer.scrollTo({
      left: index * productItemWidth,
      behavior: "smooth",
    });
  }, 100);
});
