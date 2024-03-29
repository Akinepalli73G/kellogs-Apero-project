opened = false;
closed = false;
languageOpened = false;
mobileUpArrow = false;

document.addEventListener("DOMContentLoaded", function() {
  const navLanguageContainer = document.querySelector(".languagenavigation nav ul li");
  
  if (navLanguageContainer) {
    const downArrowClickButton = document.createElement("button");
    downArrowClickButton.classList.add("mobile-down-arrow"); // Add the class
    navLanguageContainer.appendChild(downArrowClickButton);

    downArrowClickButton.addEventListener("click", () => {
      const languageUl = document.querySelector(".languagenavigation nav ul");
      const mobileArrow = document.querySelector(".mobile-down-arrow");

      if (languageUl && mobileArrow) {
        languageUl.classList.toggle("languageOpened");
        mobileArrow.classList.toggle("mobileUpArrow");
      }
    });
  }
});


let onBtnClick = (e) => {
  const landingPage = document.querySelector("#bni-main-content-container");
  document
    .querySelector("#mobile-burger-menu-close")
    .classList.toggle("opened");
  document.querySelector("#mobile-burger-menu-open").classList.toggle("closed");
  if (landingPage) {
    landingPage.classList.toggle("closed");
  }
  if (document.querySelector("#bni-faq-main-content-container")) {
    document
      .querySelector("#bni-faq-main-content-container")
      .classList.toggle("closed");
  }
  if (document.querySelector("#bni-404-main-content-container")) {
    document
      .querySelector("#bni-404-main-content-container")
      .classList.toggle("closed");
  }
  if (document.querySelector("#bni-receipt-upload-main-content-container")) {
    document
      .querySelector("#bni-receipt-upload-main-content-container")
      .classList.toggle("closed");
  }
};
if (document.querySelector("#mobile-burger-menu")) {
  document
    .querySelector("#mobile-burger-menu")
    .addEventListener("click", onBtnClick);
}

if (document.querySelector("#burger-close-button")) {
  document
    .querySelector("#burger-close-button")
    .addEventListener("click", onBtnClick);
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

const isInternalLink = (link) => link.getAttribute("href").startsWith("#");

//breadcrumb back button

if (document.querySelector(".breadcrumb")) {
  let liElements = document.querySelectorAll(".breadcrumb ol li");
  let secondToLastIndex = liElements.length - 2;
  let BreadcrumbBackButton = liElements[secondToLastIndex];
  let elementToCut = document.querySelectorAll(
    "#bni-faq-main-content-container > .container:nth-child(1) .text p"
  );
  if (elementToCut) {
    var cutContent = elementToCut[0].innerHTML;
    elementToCut[0].remove();
    const targetElement = BreadcrumbBackButton.querySelector("span");
    targetElement.innerHTML = cutContent;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const clickNavigationAnchorToHome = document.querySelectorAll(
    ".navigationV2 ul li a"
  );

  if (clickNavigationAnchorToHome) {
    clickNavigationAnchorToHome.forEach((clickNavigationHome) => {
      const targetEmptey = clickNavigationHome.getAttribute("target");
      if (!targetEmptey) {
        clickNavigationHome.addEventListener("click", (event) => {
          if (isInternalLinkWithHash(clickNavigationHome)) {
            let urlExtract = window.location.href;
            let urlLanguageCountry = urlExtract.split("/");
            if (urlLanguageCountry[4] !== "home.html") {
              event.preventDefault();
              var newHrefHome = clickNavigationHome.hash;
              const newURL =
                window.location.origin +
                "/" +
                urlLanguageCountry[3] +
                "/home.html" +
                newHrefHome;
              window.location.replace(newURL);
              const closeButton = document.querySelector(
                ".button .cmp-button__icon--burger-menu-close"
              );
              closeButton.click();
            }
          }
        });
      }
    });
  }

  window.addEventListener("hashchange", () => {
    const targetElem = document.querySelector(window.location.hash);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth" });
    }
  });

  const isInternalLinkWithHash = (link) =>
    link.getAttribute("href").startsWith("#");
});

if (
  document.querySelector("#bni-receipt-upload-main-content-container") ||
  document.querySelector(
    "#bni-thank-you-and-already-played-template-container"
  ) ||
  document.querySelector("#bni-ready-to-play-template-container")
) {
  const addingLogoutContainer = document.querySelector(
    "#Mobile-header-container .container"
  );
  addingLogoutContainer.classList.add("bni-logout");
  const cutLogoutCmp = document.querySelector(".logout-v6");
  addingLogoutContainer.appendChild(cutLogoutCmp);
}

var urlExtract = window.location.href;
var urlLanguageCountry = urlExtract.split("/");
if (urlLanguageCountry[4] === "home.html") {
  let addTriangleBNI = document.querySelector(
    "#bni-main-content-container .container h1"
  );
  if (addTriangleBNI) {
    addTriangleBNI.classList.add("bni-triangle");
  }
}
if (urlLanguageCountry[3] === "sl_SL" && urlLanguageCountry[4] === "ready-to-play.html") {
  document.querySelector('#bni-main-content-container .bni-gold').classList.add('bni-small-h1');
}
// let addingExtraPadding = document.querySelector(
//   "#mobile-burger-menu-open ul:not(:has(li:nth-child(2)))"
// );
// if (addingExtraPadding) {
//   document
//     .querySelector("#mobile-burger-menu-open .image")
//     .classList.add("bni-extra-padding");
// }
