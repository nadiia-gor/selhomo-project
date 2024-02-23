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

function scrollToSection(selector, offset = 0) {
  // $(selector).offset().top
  const elemPos = document.querySelector(selector).getBoundingClientRect().top;
  const offsetPosition = elemPos + window.pageYOffset;

  window.scrollTo({
    top: offsetPosition + offset,
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
      320: {
        slidesPerView: 1,
      },

      992: {
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

let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
});

const form = document.getElementById('feedback-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const errors = [];

  const nameFld = document.getElementById('inputName');
  const emailFld = document.getElementById('inputEmail');
  const name = nameFld.value.trim();
  const email = emailFld.value.trim();
  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  document.querySelectorAll('form-inp').forEach((elem) => {
    elem.onfocus = function () {
      if (this.classList.contains('invalid-inp')) {
        this.classList.remove('invalid-inp');
      }
    };
  });

  if (name === '') {
    errors.push('Enter your name!');
    nameFld.classList.add('invalid-inp');
  } else {
    if (name.length < 2) {
      errors.push('Your name is too short!');
      nameFld.classList.add('invalid-inp');
    }
  }

  if (email === '') {
    errors.push('Enter your email!');
    emailFld.classList.add('invalid-inp');
  } else {
    if (!isValidEmail(email)) {
      errors.push('Incorrect email address!');
      emailFld.classList.add('invalid-inp');
    }
  }

  if (errors.length) {
    toast.error(errors.join(' '));
    return;
  }

  const CHAT_ID = '-1002140946610';
  const BOT_TOKEN = '6937149237:AAGHHsPauycMOw4rdoooRd39fN6zS6frDUo';
  const text = `<b>Name: </b>${name}\r\n<b>Email: </b>${email}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(
    text
  )}&parse_mode=HTML`;

  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp.ok) {
        nameFld.value = '';
        emailFld.value = '';
        toast.success('Your message successfully sent');
      } else {
        toast.error('Some error occured');
      }
    });

  // $.ajax({
  //   url: url,
  //   type: 'post',
  //   dataType: 'json',
  //   success: function (resp) {
  //     if (resp.ok) {
  //       nameFld.value = '';
  //       emailFld.value = '';
  //       toast.success('Your message successfully sent');
  //     } else {
  //       toast.error('Some error occured');
  //     }
  //   },
  //   error: function (err) {
  //     toast.error(err);
  //   },
  // });
  return false;
});
