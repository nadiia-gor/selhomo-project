const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000,
    // disableOnInteraction: true,
  },
  pagination: {
    el: '.first-pagination',
    clickable: true,
  },
});
