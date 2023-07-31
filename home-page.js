//HOME PAGE

const hamburgerMenu = document.querySelector('.hamburger-menu');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

hamburgerMenu.addEventListener('click', () => {
    line1.classList.toggle('close');
    line2.classList.toggle('gone');
    line3.classList.toggle('close-2');
});