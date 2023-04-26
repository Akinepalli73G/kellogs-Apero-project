// language seletor start

languageOpened = false;
mobileUpArrow = false;
selectedLanguage = false;
const navLanguageContainer = document.querySelector(".languagenavigation nav");
const downArrowClickButton = document.createElement("button");
downArrowClickButton.classList.add("mobile-down-arrow");
if (navLanguageContainer) {
  navLanguageContainer.insertBefore(
    downArrowClickButton,
    navLanguageContainer.firstElementChild
  );
}

var clickLanguageNavigation = document.querySelectorAll(
  ".languagenavigation nav button"
);
if (clickLanguageNavigation) {
  clickLanguageNavigation.forEach((clickNavigation) => {
    clickNavigation.addEventListener("click", () => {
      document
        .querySelector(".languagenavigation nav ul")
        .classList.toggle("languageOpened");
      document
        .querySelector(".mobile-down-arrow")
        .classList.toggle("mobileUpArrow");
      document.querySelector("body").classList.toggle("languageOpened");
      document
        .querySelector("#esg-main-container")
        .classList.toggle("languageOpened");
    });
  });
}

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
  document.querySelectorAll("#esg-main-container")[0].classList.toggle('burgerMenuOpened');
  document.querySelectorAll("#esg-footer-container")[0].classList.toggle('burgerMenuOpened');
};

document
  .querySelector(".button .cmp-button__icon--esg-burger-icon")
  .addEventListener("click", onBtnClick);
document
  .querySelector(".button .cmp-button__icon--burger-close-icon")
  .addEventListener("click", onBtnClick);

// clcik on burger menu close
