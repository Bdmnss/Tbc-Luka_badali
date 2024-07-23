const offerContainer = document.querySelector(".offers-slider");
const offerItems = offerContainer.querySelectorAll(".offers-slide");
let offerItemWidth = offerItems[0].offsetWidth;

let offerIsScrolling;

offerContainer.addEventListener("scroll", () => {
  window.clearTimeout(offerIsScrolling);

  offerIsScrolling = setTimeout(() => {
    const scrollLeft = offerContainer.scrollLeft;
    const index = Math.round(scrollLeft / offerItemWidth);

    offerContainer.scrollTo({
      left: index * offerItemWidth,
      behavior: "smooth",
    });
  }, 100);
});
