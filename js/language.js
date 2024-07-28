document.querySelectorAll(".language-div").forEach((languageDiv) => {
  const geoButton = languageDiv.querySelector(".geo-button");
  const engButton = languageDiv.querySelector(".eng-button");

  geoButton.addEventListener("mouseover", () => {
    engButton.classList.remove("hidden");
  });

  languageDiv.addEventListener("mouseleave", () => {
    engButton.classList.add("hidden");
  });
});
