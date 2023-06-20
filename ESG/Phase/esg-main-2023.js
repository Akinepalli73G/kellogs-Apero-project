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

  const mobileCarosuelAlreadyPlayedPage =
    window.matchMedia("(max-width: 768px)");
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
    "#esg-barcode-validation-container > .container:nth-child(2) > .cmp-container > .button:nth-child(3)"
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

const urlExtract = window.location.href;
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
  document.querySelector("#esg-video-component").style.display = "none";
}

//barcode validation

var barcodeValidation = document.getElementById("esg-barcode-validation");

barcodeValidation.addEventListener('click', function() {
  var urlExtract = window.location.href;
  var urlLanguageCountry = urlExtract.split("/");
  var loginUrl = urlLanguageCountry[3] + "/login.html";
  var succesPageUrl = "https://stage65-betterdays.kelloggs.com/fr_FR/thank-you.html";

  fetch('http://globalpromoservicedev.dmitkellogg.com/promotionservice/api/v1/token/validate?hashcode=123456ef75e4ab2afa4950447059', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic YWVtdXNlcjphZW1AMjAyMA==',
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      if (response.status === 401) {
        // Redirect to login page for authentication failure
        window.location.href = loginUrl;
      } else {
        // Redirect to login page for other API failures
        window.location.href = loginUrl;
      }
    } else {
      return response.json();
    }
  })
  .then(data => {
    // Handle the API response data here
    console.log(data);

    var entryId = data.data.id;
    var isGameCompleted = true; // Set based on the game completion status
    var gameScore = sessionStorage.getItem('gameScore'); // Retrieve gameScore from session storage

    var updateScoreData = {
      "isGameCompleted": isGameCompleted,
      "gameScore": gameScore
    };

    fetch('http://globalpromoservicedev.dmitkellogg.com/promotionservice/api/v1/promotions/entry/' + entryId + '/update/score', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YWRtaW46QTNpWXQ4eVU=',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateScoreData)
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 401) {
          // Redirect to login page for authentication failure
          window.location.href = loginUrl;
        } else {
          // Redirect to login page for other API failures
          window.location.href = loginUrl;
        }
      } else {
        // Redirect to the appropriate URL based on the game result
        if (isGameCompleted && gameScore > 0) {
          // Game completed within the given time frame
          window.location.href = succesPageUrl;
        } else {
          // Invalid entry, not considered for winner selection
          // Redirect to a different page if desired
          window.location.href = loginUrl; // Redirect to the login page as an example
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
  })
  .catch(error => {
    // Redirect to login page in case of API failure
    window.location.href = loginUrl;
  });
});
