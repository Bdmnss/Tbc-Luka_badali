const sliders = document.querySelectorAll(".slider-container");

sliders.forEach((slider) => {
  let isScrolling;
  slider.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      const itemWidth = slider.querySelector(".slide").offsetWidth;
      const scrollLeft = slider.scrollLeft;
      const index = Math.round(scrollLeft / itemWidth);

      slider.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }, 100);
  });
});
