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
  activeSection.style.display = "block";

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




  // Generation Link

  document.addEventListener('DOMContentLoaded', function () {
    const content = "Тут будет ссылка сгенирированная";
    document.getElementById("output-field").textContent = content;
  });
}



// Radio Button

document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener('click', function () {
    if (this.checked && this.previousChecked) {
      this.checked = false;
    }
    this.previousChecked = this.checked;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let currentCardIndex = 0;
  const cards = document.querySelectorAll('.card__item');

  cards[currentCardIndex].classList.add("active");

  const arrowsNext = document.querySelectorAll('.card-arrow');
  arrowsNext.forEach(arrow => {
    arrow.addEventListener('click', function () {
      cards[currentCardIndex].classList.remove("active");

      currentCardIndex = (currentCardIndex + 1) % cards.length;

      cards[currentCardIndex].classList.add("active");
    });
  });

  const arrowsBack = document.querySelectorAll('.card-arrow-back');
  arrowsBack.forEach(arrow => {
    arrow.addEventListener('click', function () {
      cards[currentCardIndex].classList.remove("active");

      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;

      cards[currentCardIndex].classList.add("active");
    });
  });
});



// Opacity Effect

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, div, span');
  textElements.forEach(el => observer.observe(el));
});




// // Dots Slider

document.addEventListener('DOMContentLoaded', function () {
  function removeBrTags() {
    const section = document.querySelector('.master__section');
    if (section) {
      const brElements = section.querySelectorAll('br');
      brElements.forEach(br => br.remove());
    }
  }

  function initSlider() {
    if (window.innerWidth <= 1366) {
      let currentIndex = 0;
      const items = document.querySelectorAll('.master__list-item');
      const totalItems = items.length;
      let startX, endX;

      function showItem(index) {
        items.forEach(item => item.style.display = 'none');
        if (items[index]) {
          items[index].style.display = 'flex';
          updateDots(index);
        }
      }

      function updateDots(index) {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }

      function createDots() {
        const dotsContainer = document.querySelector('.slider-dots');
        if (dotsContainer.children.length === 0) {
          for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === currentIndex) {
              dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
              currentIndex = i;
              showItem(currentIndex);
            });
            dotsContainer.appendChild(dot);
          }
        }
      }

      showItem(currentIndex);
      createDots();

      document.querySelector('.master__list').addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
      });

      document.querySelector('.master__list').addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
          currentIndex = (currentIndex + 1) % totalItems;
        } else if (endX - startX > 50) {
          currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }
        showItem(currentIndex);
      });
    } else {
      document.querySelectorAll('.master__list-item').forEach(item => item.style.display = 'flex');
      document.querySelector('.slider-dots').innerHTML = ''; // Clear dots
    }
  }

  removeBrTags();
  initSlider();

  window.addEventListener('resize', function () {
    removeBrTags();
    initSlider();
  });
});



// Tutorial IMG

document.addEventListener('DOMContentLoaded', function () {
  function updateImages() {
    const images = document.querySelectorAll('.tutorial__img img');
    const tutorialImages = document.querySelectorAll('.tutorial__img');

    if (window.innerWidth <= 1366) {
      // Удаление всех инлайновых стилей при ширине экрана <= 1366 пикселей
      tutorialImages.forEach(imgContainer => {
        imgContainer.removeAttribute('style');
      });

      images.forEach((img, index) => {
        if (index < images.length) {
          // Для всех элементов, кроме последнего
          img.dataset.originalSrc = img.src; // Сохраняем оригинальный URL
          img.src = 'img/tutorialTG/arrow2.png'; // Устанавливаем новое изображение
          img.classList.add('scaled-image'); // Добавляем класс для масштабирования
        } else {
          // Для последнего элемента
          img.classList.remove('scaled-image'); // Удаляем масштабирование, если оно было
          // Не меняем источник изображения
        }
      });
    } else {
      images.forEach(img => {
        if (img.dataset.originalSrc) {
          img.src = img.dataset.originalSrc; // Восстанавливаем оригинальный URL
          img.classList.remove('scaled-image'); // Удаляем класс масштабирования
        }
      });
    }
  }

  // Обновляем изображения при загрузке страницы
  updateImages();

  // Обновляем изображения при изменении размера окна
  window.addEventListener('resize', function () {
    updateImages();
  });
});
