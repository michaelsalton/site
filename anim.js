window.addEventListener('scroll', function() {
    var navbarContainer = document.querySelector('.navbar-container');
    if (window.scrollY > 0) {
      navbarContainer.classList.add('navbar-transition');
      navbarContainer.classList.remove('navbar-hidden');
    } else {
      navbarContainer.classList.remove('navbar-transition');
      navbarContainer.classList.add('navbar-hidden');
    }
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    var navbarContainer = document.querySelector('.navbar-container');
    navbarContainer.classList.add('navbar-hidden');
  
    // Trigger a reflow to apply the initial hidden state
    void navbarContainer.offsetWidth;
  });
  