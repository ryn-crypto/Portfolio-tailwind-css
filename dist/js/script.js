// Navbar fixed

window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// Hamburger
const hambuerger = document.querySelector('#hamburger');

hambuerger.addEventListener('click', ()=> {
  hambuerger.classList.toggle('hamburger-active');
})