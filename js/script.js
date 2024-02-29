'use strict';
//підключення бургера//

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__body-menu');
const body = document.body;
burger.addEventListener('click', function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});


const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
   if (this.scrollY > 0) {
      header.classList.add('scrolled')
   }
   else {
      header.classList.remove('scrolled')
   }
});

const headerLink = document.querySelectorAll('.header-link');

headerLink.forEach(function (item) {
   item.addEventListener('click', function () {
      menu.classList.toggle('active');
      body.classList.toggle('lock');
      burger.classList.toggle('active');
   })
});

// Створюємо новий Intersection Observer з параметром threshold
//const observer = new IntersectionObserver(entries => {
//entries.forEach(entry => {
// if (entry.isIntersecting) {
//  entry.target.classList.add('animated')
// }
//});
//}, {
//   threshold: 0.7 // Встановлюємо відсоток видимості на 50%
//});

// Вибираємо елемент, який ми хочемо відстежувати
//const elementToTrack = document.querySelector('.decor');

// Починаємо відстеження елемента
//observer.observe(elementToTrack);









