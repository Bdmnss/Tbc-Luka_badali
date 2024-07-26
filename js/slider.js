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

// const rewardSlider = document.querySelector(".rewards-slider");
// const indicators = document.querySelector(".rewards-indicator");
// const slideWidth =
//   document.querySelector(".rewards-slide").offsetWidth +
//   parseFloat(getComputedStyle(rewardSlider).gap);

// let isDown = false;
// let startX;
// let scrollLeft;

// rewardSlider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   startX = e.pageX - rewardSlider.offsetLeft;
//   scrollLeft = rewardSlider.scrollLeft;
// });

// rewardSlider.addEventListener("mouseleave", () => {
//   if (isDown) {
//     slideToNearestSlide();
//   }
//   isDown = false;
// });

// rewardSlider.addEventListener("mouseup", () => {
//   if (isDown) {
//     slideToNearestSlide();
//   }
//   isDown = false;
// });

// rewardSlider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - rewardSlider.offsetLeft;
//   const walk = x - startX;
//   rewardSlider.scrollLeft = scrollLeft - walk;

//   updateIndicator();
// });

// function updateIndicator() {
//   const maxScrollLeft = rewardSlider.scrollWidth - rewardSlider.clientWidth;
//   const indicatorWidth = (rewardSlider.clientWidth / maxScrollLeft) * 100;
//   const percentageScrolled = (rewardSlider.scrollLeft / maxScrollLeft) * 100;
//   const leftPosition = (percentageScrolled * (100 - indicatorWidth)) / 100;
//   indicators.style.left = `${leftPosition}%`;
//   console.log(indicatorWidth);
// }

// function slideToNearestSlide() {
//   const currentScroll = rewardSlider.scrollLeft;

//   const exactScrollPosition = currentScroll / slideWidth;
//   const currentSlideIndex = Math.round(exactScrollPosition);

//   const newScrollLeft = currentSlideIndex * slideWidth;

//   rewardSlider.scrollTo({
//     left: newScrollLeft,
//     behavior: "smooth",
//   });
// }
