const titles = document.querySelectorAll(".footer-arrow-div-title");
const arrows = document.querySelectorAll(".arrow");
const contents = document.querySelectorAll(".footer-arrow-div-content");
let expendedContent;

const setExpandedState = (elements) => {
  elements.forEach((element) => {
    element.classList.remove("isExpanded");
  });

  if (expendedContent === null) return;
  elements[expendedContent].classList.add("isExpanded");
};

titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    expendedContent = expendedContent !== index ? index : null;

    setExpandedState(arrows);
    setExpandedState(contents);
  });
});
