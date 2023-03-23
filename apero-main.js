// var tinySliderJs = document.createElement("script");
// var tinySliderCSS = document.createElement("link");
// tinySliderJs.setAttribute(
//   "src",
//   "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"
// );
// tinySliderCSS.setAttribute("rel", "stylesheet");
// tinySliderCSS.setAttribute(
//   "href",
//   "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
// );
// document.body.appendChild(tinySliderJs);
// document.head.appendChild(tinySliderCSS);

opened = false;
closed = false;
languageOpened = false;
mobileUpArrow = false;
const navLanguageContainer = document.querySelector(".languagenavigation nav");
const downArrowClickButton = document.createElement("button");
downArrowClickButton.classList.add("mobile-down-arrow");
navLanguageContainer.insertBefore(
  downArrowClickButton,
  navLanguageContainer.firstElementChild
);
window.onload = function () {
  document.querySelector("#mobile-burger-menu").addEventListener("click", onBtnClick);
  document.querySelector("#burger-close-button").addEventListener("click", onBtnClick);
  // setTimeout(() => {
   
  // }, 500);
};

function onBtnClick(e) {
  document.querySelector("#mobile-burger-menu-close").classList.toggle("opened");
  document.querySelector("#mobile-burger-menu-open").classList.toggle("closed");
  document.querySelector("#apero-main-content-container").classList.toggle("closed");
  document.querySelector("#competition-landing-main-content-container").classList.toggle("closed");
}

var clickLanguageNavigation = document.querySelector(
  ".languagenavigation nav button"
);
clickLanguageNavigation.addEventListener("click", () => {
  document
    .querySelector(".languagenavigation nav ul")
    .classList.toggle("languageOpened");
  document
    .querySelector(".mobile-down-arrow")
    .classList.toggle("mobileUpArrow");
});

Array.from(
  document.querySelectorAll(".languagenavigation nav ul li a")
).forEach((selectedLangugae) => {
  if (window.location.href == selectedLangugae.href) {
    selectedLangugae.classList.add("selected-language");
  }
});

var carouselContainer = document.querySelector(
  "#carousel-container.cmp-container"
);

tns({
  container: carouselContainer,
  responsive: {
    768: {
      items: 2,
    },
  },
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
});