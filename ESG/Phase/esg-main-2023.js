var mobileCarosuelAlreadyPlayedPage = window.matchMedia("(max-width: 768px)");
document.addEventListener("DOMContentLoaded", () => {
  // Crousel component start
  var carouselContainer = document.querySelector(
    ".esg-carousel-container .cmp-container"
  );
  if (!mobileCarosuelAlreadyPlayedPage.matches) {
    if (carouselContainer) {
      tns({
        container: carouselContainer,
        responsive: {
          768: {
            items: 8,
          },
          1990: {
            items: 8,
          },
        },
        gutter: 62,
        fixedWidth: 100,
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
      });
    }
  }

  if (mobileCarosuelAlreadyPlayedPage.matches) {
    const carouselCards = document.querySelector(
      "#esg-our-story > .container:nth-child(2) > .cmp-container > .container:nth-child(2) > .cmp-container"
    );
    if (carouselCards) {
      tns({
        autoWidth: true,
        items: 1.5,
        slideBy: 1.5,
        gutter: 20,
        mouseDrag: true,
        lazyload: true,
        container: carouselCards,
        swipeAngle: false,
        speed: 400,
      });
    }
  }
  // carousel end
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

var desktopLanguagenavigationClicked = document.querySelectorAll(
  ".languagenavigation #desktop-language-navigation button"
);
var mobileLanguagenavigationClicked = document.querySelectorAll(
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

document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {
    if (!sessionStorage.getItem("codeExecuted")) {
      var urlExtractOverlay = window.location.href;
      var urlLanguageCountryOverlay = urlExtractOverlay.split("/");

      if (urlLanguageCountryOverlay[4] == "home.html") {
        if (
          desktopLanguagenavigationClicked.length > 1 ||
          mobileLanguagenavigationClicked.length > 1
        ) {
          if (mobileCarosuelAlreadyPlayedPage.matches) {
            document
              .querySelector(
                ".languagenavigation #mobile-language-navigation button"
              )
              .click();
          } else {
            document
              .querySelector(
                ".languagenavigation #desktop-language-navigation button"
              )
              .click();
          }
        }
      }
      sessionStorage.setItem("codeExecuted", "true");
    }
  };
});

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

//breadcrumb back button

if (document.querySelector(".breadcrumb")) {
  let liElements = document.querySelectorAll(".breadcrumb ol li");
  let secondToLastIndex = liElements.length - 2;
  let BreadcrumbBackButton = liElements[secondToLastIndex];
  let elementToCut = document.querySelector(
    "#esg-faq-container > .text:nth-child(2) p"
  );
  let elementToCutBarcode = document.querySelector(
    "#esg-barcode-validation-container > .container:nth-child(1) > .cmp-container > .container:nth-child(3) > .cmp-container > .text:nth-child(2) p"
  );
  if (elementToCut) {
    var cutContent = elementToCut.innerHTML;
    elementToCut.remove();
    const targetElement = BreadcrumbBackButton.querySelector("span");
    targetElement.innerHTML = cutContent;
  }
  if (elementToCutBarcode) {
    var cutContent = elementToCutBarcode.innerHTML;
    elementToCutBarcode.remove();
    const targetElement = BreadcrumbBackButton.querySelector("span");
    targetElement.innerHTML = cutContent;
  }
}

// don't have receipt with upload

var modal = document.querySelector(".container #esg-dont-have-receipt-upload");
var trigger = document.querySelector(
  "#esg-receipt-upload-container > .container:nth-child(2) > .button"
);
var okButton = document.querySelector(
  "#esg-dont-have-receipt-upload .teaser .cmp-teaser__action-container .cmp-teaser__action-link"
);

let toggleModal = () => {
  modal.classList.toggle("show-modal");
};

let windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
  }
};

if (modal || trigger || okButton) {
  trigger.addEventListener("click", toggleModal);
  okButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}

// esg-dont-have-a-cereal-box

var modalBarcode = document.querySelector(
  ".container #esg-dont-have-a-cereal-box"
);
const ghost = document.querySelector(
  "#esg-barcode-validation-container > .container:nth-child(2) > .cmp-container > .ghost"
);
if (ghost) {
  var triggerBarcode = document.querySelector(
    "#esg-barcode-validation-container > .container:nth-child(2) > .cmp-container > .button:nth-child(4)"
  );
} else {
  var triggerBarcode = document.querySelector(
    "#esg-barcode-validation-container > .container:nth-child(2) > .cmp-container > .button:nth-child(2)"
  );
}

var okButtonBarcode = document.querySelector(
  "#esg-dont-have-a-cereal-box .teaser .cmp-teaser__action-container .cmp-teaser__action-link"
);

let toggleModalBarcode = () => {
  modalBarcode.classList.toggle("show-modal");
};

let windowOnClickBarcode = (event) => {
  if (event.target === modalBarcode) {
    toggleModal();
  }
};

if (modalBarcode || triggerBarcode || okButtonBarcode) {
  triggerBarcode.addEventListener("click", toggleModalBarcode);
  okButtonBarcode.addEventListener("click", toggleModalBarcode);
  window.addEventListener("click", windowOnClickBarcode);
}

const clickNavigationAnchor = document.querySelectorAll(
  "#burger-close-menu .navigationV2 ul li a"
);

if (clickNavigationAnchor) {
  clickNavigationAnchor.forEach((clickNavigation) => {
    const targetEmptey = clickNavigation.getAttribute("target");
    if (!targetEmptey) {
      clickNavigation.addEventListener("click", (event) => {
        if (isInternalLink(clickNavigation)) {
          event.preventDefault();
          const targetId = clickNavigation.getAttribute("href").slice(1);
          const targetElem = document.getElementById(targetId);
          const closeButton = document.querySelector(
            ".button .cmp-button__icon--burger-close-icon"
          );
          closeButton.click();
          targetElem.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
}

const isInternalLink = (link) => link.getAttribute("href").startsWith("#");

const showYotubeVideo = document.querySelector(
  "#esg-video-component > .container:nth-child(3) > .cmp-container"
);
if (showYotubeVideo) {
  showYotubeVideo.addEventListener("click", () => {
    showYotubeVideo.style.zIndex = "-11";
    const showImage = document.querySelector("#esg-video-component > .image");
    showImage.style.zIndex = "-1";
    showImage.style.position = "relative";
    document.querySelector("#esg-video-component > .embed").style.zIndex = "11";
  });
}

var urlExtract = window.location.href;
var urlLanguageCountry = urlExtract.split("/");
if (
  urlLanguageCountry[3] === "de_AT" ||
  urlLanguageCountry[3] === "da_DK" ||
  urlLanguageCountry[3] === "fi_FI" ||
  urlLanguageCountry[3] === "de_DE" ||
  urlLanguageCountry[3] === "pt_PT" ||
  urlLanguageCountry[3] === "es_ES" ||
  urlLanguageCountry[3] === "sv_SE" ||
  urlLanguageCountry[3] === "de_CH" ||
  urlLanguageCountry[3] === "fr_CH"
) {
  if (document.querySelector("#esg-video-component")) {
    document.querySelector("#esg-video-component").style.display = "none";
  }
}

if (urlLanguageCountry[3] === "fr_BE" || urlLanguageCountry[3] === "nl_BE") {
  if (urlLanguageCountry[4] == "register.html") {
    document
      .getElementById("esg-login-register-container")
      .classList.add("esg-top-be");
  }
}

if (urlLanguageCountry[3] === "pt_PT") {
  if (urlLanguageCountry[4] == "login.html") {
    document
      .getElementById("esg-login-register-container")
      .classList.add("esg-top-pt");
  }
}

if (document.querySelector("#esg-hero-teaser")) {
  var removeSpaceHome = urlLanguageCountry[3].split("_");
  if (
    urlLanguageCountry[8] === "da" ||
    urlLanguageCountry[8] === "de" ||
    urlLanguageCountry[8] === "fr" ||
    removeSpaceHome[0] === "da" ||
    removeSpaceHome[0] === "de" ||
    removeSpaceHome[0] === "fr"
  ) {
    document
      .querySelector(
        "#esg-hero-teaser > .container:nth-child(2) > .cmp-container"
      )
      .classList.add("esg-home-translation-hero-teaser");
  }
  if (urlLanguageCountry[8] === "el" || removeSpaceHome[0] === "el") {
    document
      .querySelector(
        "#esg-hero-teaser > .container:nth-child(2) > .cmp-container"
      )
      .classList.add("esg-home-translation-hero-teaser-extra-small");
  }
}

if (mobileCarosuelAlreadyPlayedPage.matches) {
  if (document.querySelector("#esg-hero-teaser")) {
    var removeSpaceHome = urlLanguageCountry[3].split("_");
    if (
      urlLanguageCountry[8] === "en" ||
      urlLanguageCountry[8] === "fr" ||
      removeSpaceHome[0] === "en" ||
      removeSpaceHome[0] === "fr"
    ) {
      document
        .querySelector(
          "#esg-hero-teaser > .container:nth-child(2) > .cmp-container"
        )
        .classList.add("esg-home-translation-hero-teaser-smaller");
    }
  }
}

if (urlLanguageCountry[3] === "fr_FR") { 
  document.querySelector("#esg-hero-teaser").classList.add("esg-home-banner-fr");
}

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
          if (urlLanguageCountry[4] != "home.html") {
            event.preventDefault();
            var newHrefHome = clickNavigationHome.hash;
            clickNavigationHome.href =
              window.location.origin +
              "/" +
              urlLanguageCountry[3] +
              "/home.html" +
              newHrefHome;
            const closeButton = document.querySelector(
              ".button .cmp-button__icon--burger-close-icon"
            );
            if (mobileCarosuelAlreadyPlayedPage && closeButton) {
              closeButton.click();
              const targetElem = document.querySelector(newHrefHome);
              targetElem.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      });
    }
  });
}

const isInternalLinkWithHash = (link) =>
  link.getAttribute("href").startsWith("#");
