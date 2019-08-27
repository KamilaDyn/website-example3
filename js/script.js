let menuItems = document.querySelector('.header__list-items');
let menuItemOpen = document.querySelector('#open');
let menuItemClose = document.querySelector('#close');

menuItemClose.style.display = 'none';

const Open = () => {
  menuItemClose.style.display = 'block';
  menuItemOpen.style.display = 'none';
  menuItems.style.display = 'flex';
}


const Close = () => {
  menuItemOpen.style.display = 'block';
  menuItemClose.style.display = 'none';
  menuItems.style.display = 'none';
}
menuItemOpen.addEventListener('click', Open);

menuItemClose.addEventListener('click', Close);