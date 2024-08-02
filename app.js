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

