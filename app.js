// Loader

window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


// CrocoLoad

document.addEventListener('DOMContentLoaded', function () {
  let croco = document.getElementsByClassName("croco")[0];
  if (croco) {
    croco.classList.add('ready');
  }
});


// Burger


function burger() {
  let burgerSection = document.getElementsByClassName("burger__section")[0];
  let burger = document.getElementsByClassName("burger")[0];
  let area = document.getElementsByClassName("burger-area")[0];

  burgerSection.classList.add("off");


  if (burgerSection && burger && area) {
    burger.classList.toggle("active");
    burgerSection.classList.toggle("active");
    area.classList.add("off");
  }
}

        // Balance Function

function Balance() {
  let sections = document.querySelectorAll('.section');
  let button = document.getElementById("balance");
  let activeElements = document.querySelectorAll('.active');
  let activeSection = document.querySelector(".balance__content");


  for (let section of sections) {
    if (section.style.display !== 'none') {
      section.style.display = 'none';
      break;
    }
  }

  activeElements.forEach(function (element) {
    element.classList.remove('active');
  });
  button.classList.add("active");
  activeSection.style.display = "flex";

}

          // Offers Function

function Offers() {
  let sections = document.querySelectorAll('.section');
  let button = document.getElementById("offers");
  let activeElements = document.querySelectorAll('.active');
  let activeSection = document.querySelector(".offers__content");


  for (let section of sections) {
    if (section.style.display !== 'none') {
      section.style.display = 'none';
      break;
    }
  }

  activeElements.forEach(function (element) {
    element.classList.remove('active');
  });
  button.classList.add("active");
  activeSection.style.display = "flex";

}

            // Profile Function

function Profile() {
  let sections = document.querySelectorAll('.section');
  let button = document.getElementById("profile");
  let activeElements = document.querySelectorAll('.active');
  let activeSection = document.querySelector(".profile__content");


  for (let section of sections) {
    if (section.style.display !== 'none') {
      section.style.display = 'none';
      break;
    }
  }

  activeElements.forEach(function (element) {
    element.classList.remove('active');
  });
  button.classList.add("active");
  activeSection.style.display = "flex";

}

              // Generation Function

function Generation() {
  let sections = document.querySelectorAll('.section');
  let button = document.getElementById("generation");
  let activeElements = document.querySelectorAll('.active');
  let activeSection = document.querySelector(".generation__content");


  for (let section of sections) {
    if (section.style.display !== 'none') {
      section.style.display = 'none';
      break;
    }
  }

  activeElements.forEach(function (element) {
    element.classList.remove('active');
  });
  button.classList.add("active");
  activeSection.style.display = "flex";

}