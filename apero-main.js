opened = false;
closed = false;
languageOpened = false;
mobileUpArrow = false;
const navLanguageContainer = document.querySelector(".languagenavigation nav");
const downArrowClickButton = document.createElement("button");
downArrowClickButton.classList.add("mobile-down-arrow");
if (navLanguageContainer) {
  navLanguageContainer.insertBefore(
    downArrowClickButton,
    navLanguageContainer.firstElementChild
  );
}

window.onload = function () {
  if (document.querySelector("#mobile-burger-menu")) {
    document
      .querySelector("#mobile-burger-menu")
      .addEventListener("click", onBtnClick);
    document
      .querySelector("#burger-close-button")
      .addEventListener("click", onBtnClick);
  }
};

let onBtnClick = (e) => {
  const apero = document.querySelector("#apero-main-content-container");
  const errorPage = document.querySelector("#error-page-template-child-one");
  const landingPage = document.querySelector(
    "#competition-landing-main-content-container"
  );
  document
    .querySelector("#mobile-burger-menu-close")
    .classList.toggle("opened");
  document.querySelector("#mobile-burger-menu-open").classList.toggle("closed");
  if (apero) {
    apero.classList.toggle("closed");
  }
  if (errorPage) {
    errorPage.classList.toggle("closed");
  }
  if (landingPage) {
    landingPage.classList.toggle("closed");
  }
};

var clickLanguageNavigation = document.querySelector(
  ".languagenavigation nav button"
);
if (clickLanguageNavigation) {
  clickLanguageNavigation.addEventListener("click", () => {
    document
      .querySelector(".languagenavigation nav ul")
      .classList.toggle("languageOpened");
    document
      .querySelector(".mobile-down-arrow")
      .classList.toggle("mobileUpArrow");
  });
}

if (document.querySelectorAll(".languagenavigation")) {
  Array.from(
    document.querySelectorAll(".languagenavigation nav ul li")
  ).forEach((selectedLangugae) => {
    if (window.location.href == selectedLangugae.querySelector("a").href) {
      selectedLangugae.classList.add("selected-language");
    }
  });
}

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
      1990: {
        item: 4,
      }
    },
    fixedWidth: 250,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
  });
}

const breadcrumbGoBackText = document.querySelectorAll(
  ".cmp-breadcrumb__list li:nth-last-child(2) a"
);
if (breadcrumbGoBackText.length != 0) {
  breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Go back</span>`;
}

var modal = document.querySelector(".container #receipt-upload-child-two");
var trigger = document.querySelector(".button #dont-have-a-receipt-button");
var closeButton = document.querySelector(
  "#receipt-upload-child-two .teaser .cmp-teaser__image .cmp-image__image"
);
var understoodButton = document.querySelector(
  "#receipt-upload-child-two .teaser .cmp-teaser__action-container .cmp-teaser__action-link"
);

let toggleModal = () => {
  modal.classList.toggle("show-modal");
};

let windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

if (modal || trigger || closeButton || understoodButton) {
  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  understoodButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}
