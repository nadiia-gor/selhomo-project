const sliderOptions = {
  slider1: {},
  slider2: {
    perPage: {
      sm: 1,
      md: 3,
      lg: 5,
      xl: 5,
    },
  },
  slider3: {
    perPage: {
      sm: 2,
      md: 6,
      lg: 9,
      xl: 9,
    },
  },
};

const splideInstances = [];

const getBreakpointFromDOM = () =>
  window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');

let sliderInitBreakpoint = getBreakpointFromDOM();

constructSlidersWithParams(sliderInitBreakpoint);

function resizeCallback() {
  const currentBreakpoint = getBreakpointFromDOM();
  if (sliderInitBreakpoint !== currentBreakpoint) {
    constructSlidersWithParams(currentBreakpoint);
    sliderInitBreakpoint = currentBreakpoint;
  }
}

function destroySliders() {
  splideInstances.forEach((instance) => {
    instance.destroy();
  });
}

function constructSlidersWithParams(breakpoint) {
  destroySliders();

  const slider1 = new Splide('#slider1', {
    type: 'loop',
    classes: {
      pagination: 'splide__pagination change-color-pagination',
      page: 'splide__pagination__page change-color-page',
    },
    autoplay: true,
    interval: 7000,
    pauseOnHover: true,
    speed: 4000,
  }).mount();

  const slider2 = new Splide('#slider2', {
    type: 'loop',
    gap: '20px',
    perPage: sliderOptions.slider2.perPage[breakpoint],
    perMove: 1,
    trimSpace: 'move',
  }).mount();

  const slider3 = new Splide('#slider3', {
    type: 'loop',
    gap: '20px',
    perPage: sliderOptions.slider3.perPage[breakpoint],
    perMove: 1,
    trimSpace: 'move',
    height: '70px',
    fixedWidth: '200px',
    padding: 100,
  }).mount();

  splideInstances.push(slider1, slider2, slider3);
}
window.addEventListener('resize', resizeCallback);
