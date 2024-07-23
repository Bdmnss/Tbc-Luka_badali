const container = document.querySelector(".offers-slider");
const items = container.querySelectorAll(".offers-slide");
let itemWidth = items[0].offsetWidth;

let isScrolling;

container.addEventListener("scroll", () => {
  window.clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / itemWidth);
    console.log(index);

    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  }, 100);
});
