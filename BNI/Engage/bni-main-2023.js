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
let onBtnClick = (e) => {
  const landingPage = document.querySelector("#bni-main-content-container");
  document
    .querySelector("#mobile-burger-menu-close")
    .classList.toggle("opened");
  document.querySelector("#mobile-burger-menu-open").classList.toggle("closed");
  if (landingPage) {
    landingPage.classList.toggle("closed");
  }
  document.querySelector("#bni-faq-main-content-container").classList.toggle("closed");
  document.querySelector("#bni-404-main-content-container").classList.toggle("closed");
  document.querySelector("#bni-receipt-upload-main-content-container").classList.toggle("closed");
  
};
document
  .querySelector("#mobile-burger-menu")
  .addEventListener("click", onBtnClick);
document
  .querySelector("#burger-close-button")
  .addEventListener("click", onBtnClick);

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
      },
    },
    fixedWidth: 250,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
  });
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

const clickNavigationAnchor = document.querySelectorAll(
  "#mobile-burger-menu-close ul li a"
);

if (clickNavigationAnchor) {
  clickNavigationAnchor.forEach((clickNavigation) => {
    const targetEmptey = clickNavigation.getAttribute("target");
    if (!targetEmptey) {
      clickNavigation.addEventListener("click", (event) => {
        if (isInternalLink(clickNavigation)) {
          event.preventDefault();
          const closeButton = document.querySelector(
            ".cmp-button__icon.cmp-button__icon--burger-menu-close"
          );
          closeButton.click();
          const targetId = clickNavigation.getAttribute("href").slice(1);
          const targetElem = document.getElementById(targetId);
          targetElem.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
}

const isInternalLink = (link) => link.getAttribute("href").startsWith("#");

//breadcrumb back button

if (document.querySelector(".breadcrumb")) {
  let liElements = document.querySelectorAll(".breadcrumb ol li");
  let secondToLastIndex = liElements.length - 2;
  let BreadcrumbBackButton = liElements[secondToLastIndex];
  let elementToCut = document.querySelectorAll("#bni-faq-main-content-container > .container:nth-child(1) .text p");
  if (elementToCut) {
    var cutContent = elementToCut[0].innerHTML;
    elementToCut[0].remove();
    const targetElement = BreadcrumbBackButton.querySelector("span");
    targetElement.innerHTML = cutContent;
  }
}
