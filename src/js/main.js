let home = document.getElementById('home');
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');
let navigation = document.getElementById('navigation');
let menuButton = document.getElementById('menu-button');


let mainRouter = async function (route) {

  if (route == '#menu_about') {
    home.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
    about.classList.remove('hidden');
  }
  else if (route == '#menu_portfolio') {
    home.classList.add('hidden');
    about.classList.add('hidden');
    contact.classList.add('hidden');
    portfolio.classList.remove('hidden');
  }
  else if (route == '#menu_contact') {
    home.classList.add('hidden');
    about.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.remove('hidden');
  }
  else {
    about.classList.add('hidden');
    portfolio.classList.add('hidden');
    contact.classList.add('hidden');
    home.classList.remove('hidden');
  }
  // navigation.classList.toggle('mobile-hide');
}

async function routFunction(params) {
  var route = window.location.hash;
  await mainRouter(route);
}

window.addEventListener("hashchange", function () {
  routFunction();
});

// menuButton.addEventListener('click', function () {
//   navigation.classList.toggle('mobile-hide');
// });


