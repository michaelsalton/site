window.addEventListener('scroll', function() {
    var navbarContainer = document.querySelector('.navbar-container');
    if (window.scrollY > 0) {
      navbarContainer.classList.add('navbar-transition');
      navbarContainer.classList.remove('navbar-hidden');
    } else {
      navbarContainer.classList.remove('navbar-transition');
      navbarContainer.classList.add('navbar-hidden');
    }
    var scrollButton = document.querySelector('.scroll-down-button');
    if (window.scrollY > 0) {
      scrollButton.style.opacity = 0;
    } else {
      scrollButton.style.opacity = 1;
    }
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    var navbarContainer = document.querySelector('.navbar-container');
    navbarContainer.classList.add('navbar-hidden');
  
    // Trigger a reflow to apply the initial hidden state
    void navbarContainer.offsetWidth;

    var scrollButton = document.querySelector('.scroll-down-button');
    scrollButton.addEventListener('click', function() {
      window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });
  