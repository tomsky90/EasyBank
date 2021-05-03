// mobile nav
const hamburger = document.querySelector('.hamburger');
const hamburgerClosed = document.querySelector('.hamburger.closed');
const mobileNav = document.querySelector('.mobile-nav');
const screenBlur = document.querySelector('.blur');
const body = document.querySelector('body');

const toggleMobileNav = () => {
    hamburger.classList.toggle('unactive');
    hamburgerClosed.classList.toggle('active');
    mobileNav.classList.toggle('active');
    screenBlur.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

hamburger.addEventListener('click', toggleMobileNav);
hamburgerClosed.addEventListener('click', toggleMobileNav);