const jsonData = fetch('../data/news.json')
  .then((response) => response.json())
  .then((jsonDataArray) => fillContentArray(jsonDataArray));

function fillContentArray(dataArray) {
  const sliderContentArray = dataArray.map(
    (item) =>
      `
      <div class="swiper-slide">
      <img src="${item.image}"><br>
          ${item.title}<br>
          ${item.anons}<br>
          <div class="author-container">
          <img src="${item.author.avatar}">
              <div class="author-about">
                ${item.author.name}<br>
                ${item.date}   
              </div>
          </div>
    </div>
    `
  );
  const targetElement = document.getElementById('content-fill-target');
  targetElement.innerHTML = sliderContentArray.join('');

  new Swiper('.swiper-secondary', {
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: true,
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    pagination: {
      el: '.secondary-pagination',
      clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });
}
