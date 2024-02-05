new Splide('#slider1', {
  type: 'loop',
  classes: {
    pagination: 'splide__pagination change-color-pagination',
    page: 'splide__pagination__page change-color-page',
  },
}).mount();

new Splide('#slider2', {
  type: 'loop',
  height: '700px',
}).mount();
