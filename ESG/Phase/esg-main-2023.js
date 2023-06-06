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
  if (document.querySelector("#esg-main-container")) {
    const charity = document.querySelectorAll(
      "#esg-main-container.cmp-container > .container:nth-child(6) > .cmp-container > .container:nth-child(2)"
    );
    if (charity.length == 0) {
      document
        .querySelectorAll(
          "#esg-main-container.cmp-container > .container:nth-child(6) > .cmp-container > .container:nth-child(1)"
        )[0]
        .classList.add("esg-charity");
    }
  }
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
  if (document.querySelector("#esg-main-container")) {
    document
      .querySelectorAll(".root .container .cmp-container")[0]
      .children[2].children[0].classList.toggle("languageOpened");
  } else {
    document
      .querySelectorAll(".root .container .cmp-container")[0]
      .children[1].children[0].classList.toggle("languageOpened");
  }
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
  if (document.querySelector("#esg-main-container")) {
    document
      .querySelectorAll(".root .container .cmp-container")[0]
      .children[2].children[0].classList.toggle("languageOpened");
  } else {
    document
      .querySelectorAll(".root .container .cmp-container")[0]
      .children[1].children[0].classList.toggle("languageOpened");
  }
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
  if (document.querySelector("#esg-main-container")) {
    document
      .querySelectorAll(".root .container .cmp-container")[0]
      .children[2].children[0].classList.toggle("burgerMenuOpened");
  } else {
    document
      .querySelectorAll(".root .container .cmp-container")[0]
      .children[1].children[0].classList.toggle("burgerMenuOpened");
  }
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

// click on burger menu close

// youtube video component

const videoOverlay = document.querySelector(
  "#esg-main-container.cmp-container > .container:nth-child(5) > .cmp-container > .text:nth-child(2)"
);

var textOverlay = document.querySelector(
  "#esg-main-container.cmp-container > .container:nth-child(5) > .cmp-container > .text:nth-child(2)"
);

// Attach a click event listener to the text overlay
if (textOverlay && videoOverlay) {
  textOverlay.addEventListener("click", function () {
    textOverlay.style.display = "none";
    var playVideo = document.querySelector(
      ".ytp-large-play-button.ytp-button.ytp-large-play-button-red-bg"
    );
    playVideo.click();
  });
}
