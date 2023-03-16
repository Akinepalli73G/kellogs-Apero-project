opened = false;
closed = false;
window.onload = function() {
  var clickBurgerMenuClose = document.querySelector('#mobile-burger-menu');
  var clickBurgerMenuOpen = document.querySelector('#burger-close-button');
  clickBurgerMenuClose.addEventListener('click', onBtnClick)
  clickBurgerMenuOpen.addEventListener('click', onBtnClick)
}

function onBtnClick(e) {
  var burgerMenuClose = document.querySelector('#mobile-burger-menu-close');
  var burgerMenuOpen = document.querySelector('#mobile-burger-menu-open');
  burgerMenuClose.classList.toggle('opened');
  burgerMenuOpen.classList.toggle('closed');
  document.querySelector('#competition-landing-main-content-container').classList.toggle('closed');
}