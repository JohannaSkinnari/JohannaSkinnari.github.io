let home = document.getElementById('home');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');

let homeLink = document.getElementById('home-link');
let aboutLink = document.getElementById('about-link');
let portfolioLink = document.getElementById('portfolio-link');
let contactLink = document.getElementById('contact-link');

let homeIcon = document.getElementById('home-icon');
let aboutIcon = document.getElementById('about-icon');
let portfolioIcon = document.getElementById('portfolio-icon');
let contactIcon = document.getElementById('contact-icon');



let mainRouter = async function (route) {

  if (route == '#menu_about') {
    home.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
    about.classList.remove('hidden');

    aboutLink.classList.add('background-primary');
    homeLink.classList.remove('background-primary');
    portfolioLink.classList.remove('background-primary');
    contactLink.classList.remove('background-primary');

    aboutIcon.classList.add('dark-icon');
    homeIcon.classList.remove('dark-icon');
    portfolioIcon.classList.remove('dark-icon');
    contactIcon.classList.remove('dark-icon');
  }
  else if (route == '#menu_portfolio') {
    home.classList.add('hidden');
    about.classList.add('hidden');
    contact.classList.add('hidden');
    portfolio.classList.remove('hidden');

    portfolioLink.classList.add('background-primary');
    homeLink.classList.remove('background-primary');
    aboutLink.classList.remove('background-primary');
    contactLink.classList.remove('background-primary');

    portfolioIcon.classList.add('dark-icon');
    homeIcon.classList.remove('dark-icon');
    aboutIcon.classList.remove('dark-icon');
    contactIcon.classList.remove('dark-icon');
  }
  else if (route == '#menu_contact') {
    home.classList.add('hidden');
    about.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.remove('hidden');

    contactLink.classList.add('background-primary');
    homeLink.classList.remove('background-primary');
    aboutLink.classList.remove('background-primary');
    portfolioLink.classList.remove('background-primary');

    contactIcon.classList.add('dark-icon');
    homeIcon.classList.remove('dark-icon');
    aboutIcon.classList.remove('dark-icon');
    portfolioIcon.classList.remove('dark-icon');
  }
  else {
    about.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
    home.classList.remove('hidden');

    homeLink.classList.add('background-primary');
    aboutLink.classList.remove('background-primary');
    portfolioLink.classList.remove('background-primary');
    contactLink.classList.remove('background-primary');

    homeIcon.classList.add('dark-icon');
    aboutIcon.classList.remove('dark-icon');
    portfolioIcon.classList.remove('dark-icon');
    contactIcon.classList.remove('dark-icon');
  }
}

async function routFunction(params) {
  var route = window.location.hash;
  await mainRouter(route);
}

window.addEventListener("hashchange", function () {
  routFunction();
});



