const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const logo = document.querySelector(".logo");

const handleClick = () => {
  hamburger.classList.toggle('hamburger-active');
  nav.classList.toggle('navigation-active');
  logo.classList.toggle('logo-active');
}

hamburger.addEventListener('click', handleClick);