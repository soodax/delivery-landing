let menuState = false;
let btnMenuDefault = document.querySelector('.btn-menu-default');
let navMenu = document.querySelector('.nav__menu');
let menuIcon = document.querySelector('.menu-icon');

btnMenuDefault.onclick = () => {
    if (menuState) {
        menuState = false;
        navMenu.style.display = 'none';
        menuIcon.src = './img/header/menu.svg';
    } else {
        menuState = true;
        navMenu.style.display = 'block';
        menuIcon.src = './img/header/menu-close.svg';
    }
}