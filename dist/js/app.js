const swiperPhoto = new Swiper('.slider-photo', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
});

const swiperNumber = new Swiper('.slider-number', {
  navigation: {
    nextEl: '.number-slider__next',
    prevEl: '.number-slider__prev',
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});

const swiperNumberFooter = new Swiper('.footer-number-slider', {
  navigation: {
    nextEl: '.footer-number-button-next',
    prevEl: '.footer-number-button-prev',
  },
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
});