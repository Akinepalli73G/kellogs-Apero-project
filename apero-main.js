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

document.addEventListener("DOMContentLoaded", () => {
  const anchor = document.querySelectorAll(
    "#competition-landing-eight-description p a"
  ); // replace with the appropriate selector
  if (anchor) {
    anchor.forEach((anchorShortendUrl) => {
      anchorShortendUrl.addEventListener("click", (event) => {
        event.preventDefault();
        const currentUrl = anchorShortendUrl.getAttribute("href");
        const urlParts = currentUrl.split("/");
        if (urlParts[7] && urlParts[6]) {
          const language = urlParts[7];
          const country = urlParts[6];
          const fileName = urlParts[urlParts.length - 1];
          const newUrl = `/${language}_${country.toUpperCase()}/pdf/${fileName}`;
          if (currentUrl != newUrl) {
            window.location.href = newUrl;
          }
        } else {
          window.location.href = currentUrl;
        }
      });
    });
  }

  const breadcrumbGoBackText = document.querySelectorAll(
    ".cmp-breadcrumb__list li:nth-last-child(2) a"
  );
  if (breadcrumbGoBackText.length != 0) {
    const currentUrl = breadcrumbGoBackText[0].getAttribute("href");
    let backButtonText = currentUrl.split("/");
    let language = backButtonText[1].split("_")
    if (language[0] == "en") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Back</span>`;
    } else if (language[0] == "fr") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Retour</span>`;
    } else if (language[0] == "es") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Volver</span>`;
    } else if (language[0] == "it") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Indietro</span>`;
    } else if (language[0] == "de") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Zurück</span>`;
    } else if (language[0] == "sq") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Kthehu</span>`;
    } else if (language[0] == "bq") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Назад</span>`;
    } else if (language[0] == "hr") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Natrag</span>`;
    } else if (language[0] == "cs") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Zpět</span>`;
    } else if (language[0] == "da") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Tilbage</span>`;
    } else if (language[0] == "nl") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Terug</span>`;
    } else if (language[0] == "et") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Tagasi</span>`;
    } else if (language[0] == "fi") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Takaisin</span>`;
    } else if (language[0] == "el") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Πίσω</span>`;
    } else if (language[0] == "hu") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Vissza</span>`;
    } else if (language[0] == "is") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Til baka</span>`;
    } else if (language[0] == "lv") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Atpakaļ</span>`;
    } else if (language[0] == "lt") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Atgal</span>`;
    } else if (language[0] == "mk") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Назад</span>`;
    } else if (language[0] == "no") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Tilbake</span>`;
    } else if (language[0] == "pl") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Powrót</span>`;
    } else if (language[0] == "pt") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Voltar</span>`;
    } else if (language[0] == "ro") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Înapoi</span>`;
    } else if (language[0] == "sr") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Nazad</span>`;
    } else if (language[0] == "sk") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Späť</span>`;
    } else if (language[0] == "sl") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Nazaj</span>`;
    } else if (language[0] == "sv") {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Tillbaka</span>`;
    } else {
      breadcrumbGoBackText[0].innerHTML = `<span itemprop="name">Go back</span>`;
    }
  }
});
