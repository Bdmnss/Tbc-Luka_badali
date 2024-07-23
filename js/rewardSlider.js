const rewardContainer = document.querySelector(".rewards-slider");
const rewardItems = rewardContainer.querySelectorAll(".rewards-slide");
let rewardItemWidth = rewardItems[0].offsetWidth;

let rewardIsScrolling;

rewardContainer.addEventListener("scroll", () => {
  window.clearTimeout(rewardIsScrolling);

  rewardIsScrolling = setTimeout(() => {
    const scrollLeft = rewardContainer.scrollLeft;
    const index = Math.round(scrollLeft / rewardItemWidth);

    rewardContainer.scrollTo({
      left: index * rewardItemWidth,
      behavior: "smooth",
    });
  }, 100);
});
