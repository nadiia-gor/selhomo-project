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

$(document).ready(function () {
  $('#lightgallery').lightGallery();
});

function initMap(link) {
  link.remove();
  const map = L.map('map').setView([52.23363152918378, 21.015953047039517], 15);

  L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    }
  ).addTo(map);

  const customMarker = L.icon({
    iconUrl: 'assets/img/Pin.svg',
    // shadowUrl: 'leaf-shadow.png',

    iconSize: [106, 106],
    // shadowSize:   [50, 64],
    iconAnchor: [52.23363152918378, 21.015953047039517],
    // shadowAnchor: [4, 62],
    // popupAnchor:  [-3, -76]
  });

  L.marker([52.23363152918378, 21.015953047039517], {
    icon: customMarker,
  }).addTo(map);
  // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  // .openPopup();
}
