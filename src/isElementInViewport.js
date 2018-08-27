// Tracks the user's browser's view
// changes the opacity of the navbar elements
// based on which section is in the view of the user.

// Gets coordinates of relevant element //
function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};

// Viewport Elements //
const strategy_title = document.getElementById('strategy-title')
const uiux_title = document.getElementById('uiux-title')
const dev_title = document.getElementById('dev-title')
const contact_title = document.getElementById('contact-title')

// Navbar Elements //
const navstrategy = document.getElementById('nav-strategy')
const nav_uiux = document.getElementById('nav-uiux')
const nav_dev = document.getElementById('nav-dev')
const nav_contact = document.getElementById('nav-contact')

// Scroll Window //
const scroll = document.querySelector('.scroll-wrapper')

// Strategy Event Listener //
scroll.addEventListener('scroll', event => {
  if (isElementInViewport (strategy_title) === true) {
    navstrategy.classList.add('active')
    console.log("Got Em")
  } else {
    navstrategy.classList.remove('active')
  };
});

// UI/UX Event Listener //
scroll.addEventListener('scroll', event => {
  if (isElementInViewport (uiux_title) === true) {
    nav_uiux.classList.add('active')
    console.log("Got Em")
  } else {
    nav_uiux.classList.remove('active')
  }
});

// Development Event Listener //
scroll.addEventListener('scroll', event => {
    if (isElementInViewport (dev_title) === true) {
    nav_dev.classList.add('active')
    console.log("Got Em")
  } else {
    nav_dev.classList.remove('active')
  }
});

// Contact Event Listener //
scroll.addEventListener('scroll', event => {
    if (isElementInViewport (contact_title) === true) {
    nav_contact.classList.add('active')
    console.log("Got Em")
  } else {
    nav_contact.classList.remove('active')
  }
});
