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
  document.querySelectorAll(".languagenavigation nav ul li")
).forEach((selectedLangugae) => {
  if (window.location.href == selectedLangugae.querySelector('a').href) {
    selectedLangugae.classList.add("selected-language");
  }
});

var carouselContainer = document.querySelector(
  "#carousel-container.cmp-container"
);
if (carouselContainer) {
  tns({
    container: carouselContainer,
    responsive: {
      768: {
        items: 2,
      },
    },
    fixedWidth: 250,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
  });
}

const breadcrumbGoBackText = document.querySelectorAll('.cmp-breadcrumb__list li:nth-last-child(2) a');
if (breadcrumbGoBackText) {
  breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Go back</span>`;
}

