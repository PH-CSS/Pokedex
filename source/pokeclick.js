const clickToOpen = document.querySelector(".innerButton");
const upper = document.querySelector(".upperpart");
const down = document.querySelector(".bottompart");
const capitu = document.querySelector(".pokeBallBody");

clickToOpen.addEventListener("click", () => {
upper.style.animation = "openUp 1.1s ease forwards";
down.style.animation = "openDown 1.1s ease forwards";
capitu.style.animation = "radiusSize 2.5s ease forwards";

})