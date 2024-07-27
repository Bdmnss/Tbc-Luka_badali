function handleCookiesAccept() {
  localStorage.setItem("acceptCookies", "true");

  const cookiesBlock = document.querySelector(".cookies-block");
  if (cookiesBlock) {
    cookiesBlock.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const acceptButton = document.querySelector(".cookies-accept-button");
  if (acceptButton) {
    acceptButton.addEventListener("click", handleCookiesAccept);
  }

  if (localStorage.getItem("acceptCookies") === "true") {
    const cookiesBlock = document.querySelector(".cookies-block");
    if (cookiesBlock) {
      cookiesBlock.style.display = "none";
    }
  }
});
