document.addEventListener("DOMContentLoaded", () => {
  // Crousel component start
  var carouselContainer = document.querySelector(
    ".esg-carousel-container .cmp-container"
  );
  if (carouselContainer) {
    tns({
      container: carouselContainer,
      responsive: {
        768: {
          items: 1,
        },
        1990: {
          items: 5,
        },
      },
      gutter: 62,
      fixedWidth: 100,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
    });
  }

  //carousel end
});

// language seletor start

languageOpened = false;
mobileUpArrow = false;
selectedLanguage = false;
const navLanguageContainer = document.querySelectorAll(
  ".languagenavigation nav li"
);
navLanguageContainer.forEach((navLanguage) => {
  if (navLanguage) {
    const downArrowClickButton = document.createElement("button");
    downArrowClickButton.classList.add("mobile-down-arrow");
    navLanguage.appendChild(downArrowClickButton);
  }
});

const desktopLanguagenavigationClicked = document.querySelectorAll(
  ".languagenavigation #desktop-language-navigation button"
);
const mobileLanguagenavigationClicked = document.querySelectorAll(
  ".languagenavigation #mobile-language-navigation button"
);

desktopLanguagenavigationClicked[0].addEventListener("click", () => {
  document
    .querySelector(".languagenavigation nav ul")
    .classList.toggle("languageOpened");
  desktopLanguagenavigationClicked[0].classList.toggle("mobileUpArrow");
  document.querySelector("body").classList.toggle("languageOpened");
  document
    .querySelector("#esg-main-container")
    .classList.toggle("languageOpened");
  document
    .querySelector("#esg-header-container")
    .classList.toggle("languageOpened");
});

mobileLanguagenavigationClicked[0].addEventListener("click", () => {
  document
    .querySelectorAll(".languagenavigation nav ul")[1]
    .classList.toggle("languageOpened");
  mobileLanguagenavigationClicked[0].classList.toggle("mobileUpArrow");
  document.querySelector("body").classList.toggle("languageOpened");
  document
    .querySelector("#esg-main-container")
    .classList.toggle("languageOpened");
  document
    .querySelector("#esg-header-container")
    .classList.toggle("languageOpened");
});

if (document.querySelectorAll(".languagenavigation")) {
  Array.from(
    document.querySelectorAll(".languagenavigation nav ul li")
  ).forEach((selectedLangugae) => {
    if (window.location.href == selectedLangugae.querySelector("a").href) {
      selectedLangugae.classList.toggle("selectedLanguage");
    }
  });
}

// language seletor end

// clcik on burger menu open start
burgerMenuOpened = false;
burgerMenuClosed = false;

let onBtnClick = () => {
  burgerMenuButton = document.querySelector(
    ".button .cmp-button__icon--esg-burger-icon"
  );
  burgerMenuButton.classList.toggle("burgerMenuOpened");
  langauageNavigationHide = document.querySelectorAll(
    "#burger-menu .languagenavigation"
  );
  langauageNavigationHide[0].classList.toggle("burgerMenuClosed");
  burgerMenuClose = document.querySelectorAll("#burger-close-menu");
  burgerMenuClose[0].classList.toggle("burgerMenuOpened");
  document
    .querySelectorAll("#esg-main-container")[0]
    .classList.toggle("burgerMenuOpened");
  document
    .querySelectorAll("#esg-footer-container")[0]
    .classList.toggle("burgerMenuOpened");
};

document
  .querySelector(".button .cmp-button__icon--esg-burger-icon")
  .addEventListener("click", onBtnClick);
document
  .querySelector(".button .cmp-button__icon--burger-close-icon")
  .addEventListener("click", onBtnClick);

// clcik on burger menu close
