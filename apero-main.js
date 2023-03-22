opened = false;
closed = false;
languageOpened = false;
mobileUpArrow = false;
const  navLanguageContainer = document.querySelector('.languagenavigation nav');
const downArrowClickButton = document.createElement("button");
downArrowClickButton.classList.add('mobile-down-arrow');
navLanguageContainer.insertBefore(downArrowClickButton, navLanguageContainer.firstElementChild)
window.onload = function() {
  var clickBurgerMenuClose = document.querySelector('#mobile-burger-menu');
  var clickBurgerMenuOpen = document.querySelector('#burger-close-button');
  clickBurgerMenuClose.addEventListener('click', onBtnClick);
  clickBurgerMenuOpen.addEventListener('click', onBtnClick);
}

function onBtnClick(e) {
  var burgerMenuClose = document.querySelector('#mobile-burger-menu-close');
  var burgerMenuOpen = document.querySelector('#mobile-burger-menu-open');
  burgerMenuClose.classList.toggle('opened');
  burgerMenuOpen.classList.toggle('closed');
  document.querySelector('#apero-main-content-container').classList.toggle('closed');
  document.querySelector('#competition-landing-main-content-container').classList.toggle('closed');
}

var clickLanguageNavigation = document.querySelector('.languagenavigation nav button');
clickLanguageNavigation.addEventListener('click', () => {
  document.querySelector('.languagenavigation nav ul').classList.toggle('languageOpened');
  document.querySelector('.mobile-down-arrow').classList.toggle('mobileUpArrow');
  mobile-down-arrow
});
