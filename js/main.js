const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');


//  Клик по кнопкам с подсказками
for (let btn of infoBtns) {
     btn.addEventListener('click', function (e) {
      e.stopPropagation();

      // Скрыть все подсказки
      for (let hint of infoHints) {
         hint.classList.add('none');
      }

      // Показать текущую
      this.parentNode.querySelector('.info-hint').classList.toggle('none');
   });

}

//  Закрываем подсказки при клике по всему документу
document.addEventListener('click', function () {
   for (let hint of infoHints) {
      hint.classList.add('none');
   }
})



// Запрещаем всплытие события наверх при клике на подсказки
for (let hint of infoHints) 
   hint.addEventListener('click', (e)=>e.stopPropagation() );



//  SWIPER SLIDER 
const swiper = new Swiper('.swiper', {
 
   slidesPerView: 1,
   spaceBetween: 42,
 

   breakpoints: {
      600: {
         slidesPerView: 2,
         spacebetween: 20,
      },

      950: {
         slidesPerView: 3,
         spacebetween: 20,
      },
      
      1440: {
         slidesPerView: 4,
         spacebetween: 50,
      },

      },

   // Navigation arrows
   navigation: {
     nextEl: '#sliderPrev',
     prevEl: '#sliderNext',
   },
 
   
   }

 );



//  Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');


for(let btn of tabsBtns) {
   
   btn.addEventListener('click', function() {

      // Убираем активные классы у всех кнопок
      for(let btn of tabsBtns) {
         btn.classList.remove('tab-controls__btn--active')
      }

      // Добавляем активный класс к конкретной кнопке по которой есть клик
      this.classList.add('tab-controls__btn--active')

      // Получаем значение категории товаров кеоторые нужно включить
      this.dataset.tab

      // Отобразить нужные товары и скрыть не нужные товары
      for(let product of tabsProducts) {

         if ( this.dataset.tab === 'all') {
            product.classList.remove('none')
         } else {
            if(product.dataset.tabValue === this.dataset.tab) {
            product.classList.remove('none')
         } else {
            product.classList.add('none')
         }}

         

         // Update Swiper
         swiper.update()
         
      }

   })
}

// Открываем мобильное меню
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');
mobileNavOpenBtn.onclick = function() {
   mobileNav.classList.add('mobile-nav-wrapper--open');
}

// Закрываем мобильное меню
mobileNavCloseBtn.onclick = function() {
   mobileNav.classList.remove('mobile-nav-wrapper--open');
}
