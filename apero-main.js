opened = false;
closed = false;
languageOpened = false
window.onload = function() {
  var clickBurgerMenuClose = document.querySelector('#mobile-burger-menu');
  var clickBurgerMenuOpen = document.querySelector('#burger-close-button');
  var clickLanguageNavigation = document.querySelector('.languagenavigation nav ul');
  clickBurgerMenuClose.addEventListener('click', onBtnClick);
  clickBurgerMenuOpen.addEventListener('click', onBtnClick);
  clickLanguageNavigation.addEventListener('click', onLanguageDropdownClick);
}


function onBtnClick(e) {
  var burgerMenuClose = document.querySelector('#mobile-burger-menu-close');
  var burgerMenuOpen = document.querySelector('#mobile-burger-menu-open');
  burgerMenuClose.classList.toggle('opened');
  burgerMenuOpen.classList.toggle('closed');
  document.querySelector('#competition-landing-main-content-container').classList.toggle('closed');
  document.querySelector('#apero-main-content-container').classList.toggle('closed');
}

function onLanguageDropdownClick (e) {
  document.querySelector('.languagenavigation nav')[0].classList.toggle('languageOpened');
}