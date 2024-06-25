const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const promo = document.querySelector('#promo');
const closeMenu = document.querySelector('#close');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  promo.classList.toggle('opacity');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
  promo.classList.remove('opacity');
});
