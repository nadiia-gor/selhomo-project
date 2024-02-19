// window.addEventListener('scroll', function () {
//   const header = document.getElementById('monticello-header');
//   if (window.scrollY >= 800) {
//     header.style.animation = 'changeBackground 0.3s ease forwards';
//     if (!header.classList.contains('scrolled')) {
//       header.classList.add('scrolled');
//     }
//   } else {
//     header.style.animation = 'none';
//     if (header.classList.contains('scrolled')) {
//       header.classList.remove('scrolled');
//     }
//   }
// });

$(window).on('scroll', function () {
  const header = $('#monticello-header');
  if ($(window).scrollTop() >= 800) {
    header.css('animation', 'changeBackground 0.3s ease forwards');
    if (!header.hasClass('scrolled')) {
      header.addClass('scrolled');
    }
  } else {
    header.css('animation', 'none');
    if (header.hasClass('scrolled')) {
      header.removeClass('scrolled');
    }
  }
});

function scrollToSection(selector) {
  // $(selector).offset().top
  const top = document.querySelector(selector).offsetTop;

  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
}

const jsonData = fetch('./data/news.json')
  .then((response) => response.json())
  .then((jsonDataArray) => fillContentArray(jsonDataArray));

function fillContentArray(dataArray) {
  const sliderContentArray = dataArray.map(
    (item) =>
      `
      <div class="swiper-slide">
      <img src="${item.image}" loading="lazy"><br>
      <div class="news-desc">
      <h4>${item.title}</h4>
          <h5>${item.anons}</h5>
          <div class="author-container">
          <img src="${item.author.avatar}" loading="lazy">
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
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });
}

// const getBreakpointFromDOM = () =>
//   window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');

//   function resizeCallback() {
//     const currentBreakpoint = getBreakpointFromDOM();
//     if (sliderInitBreakpoint !== currentBreakpoint) {
//       constructSlidersWithParams(currentBreakpoint);
//       sliderInitBreakpoint = currentBreakpoint;
//     }
//   }
//   window.addEventListener('resize', resizeCallback);
