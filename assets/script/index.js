const sections = document.querySelectorAll(".section");
const night = document.querySelector(".moon");
const day = document.querySelector(".sun");

night.addEventListener("click", () => {
  sections.forEach((section) => {
    section.classList.add("dark-mode");
  });
});

day.addEventListener("click", () => {
  sections.forEach((section) => {
    section.classList.remove("dark-mode");
  });
});
