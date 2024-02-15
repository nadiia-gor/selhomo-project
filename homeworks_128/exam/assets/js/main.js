const jsonData = fetch('../data/news.json')
  .then((response) => response.json())
  .then((jsonDataArray) => fillContentArray(jsonDataArray));

function fillContentArray(dataArray) {
  const sliderContentArray = dataArray.map(
    (item) =>
      `
      <div class="swiper-slide">
      <img src="${item.image}" class="swiper-lazy"><br>
      <div class="news-desc">
      <h4>${item.title}</h4>
          <h5>${item.anons}</h5>
          <div class="author-container">
          <img src="${item.author.avatar}">
              <div class="author-about">
                <h6>${item.author.name}</h6>
                <p>${item.date}</p>   
              </div>
          </div>
      </div>
      <div class="swiper-lazy-preloader"></div>
    </div>
    `
  );
  const targetElement = document.getElementById('content-fill-target');
  targetElement.innerHTML = sliderContentArray.join('');

  new Swiper('.swiper-container', {
    slidesPerView: 3,
    lazy: true,
    loop: true,
    navigation: {
      nextEl: '.news-btn-prev',
      prevEl: '.news-btn-next',
    },
    pagination: {
      el: '.news-pag',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      // disableOnInteraction: true,
    },
  });
}
