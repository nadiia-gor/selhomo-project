const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000,
    // disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// const swiperSecondary = new Swiper('.swiper-secondary', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
