const header = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    if (!header.classList.contains("isHeaderHidden")) {
      header.classList.add("isHeaderHidden");
    }
  } else {
    if (header.classList.contains("isHeaderHidden")) {
      header.classList.remove("isHeaderHidden");
    }
  }

  lastScrollTop = scrollTop;
});
