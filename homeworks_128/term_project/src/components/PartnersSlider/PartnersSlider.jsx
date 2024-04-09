import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './PartnersSlider.scss';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <img
        className="slider-partner"
        src="src/pages/Home/images/brand-icons/buffer.svg"
        alt="buffer-partner"
      />
      <img
        className="slider-partner"
        src="src/pages/Home/images/brand-icons/bigcommerce.svg"
        alt="bigcommerce-partner"
      />
      <img
        className="slider-partner"
        src="src/pages/Home/images/brand-icons/cion.svg"
        alt="cion-partner"
      />
      <img
        className="slider-partner"
        src="src/pages/Home/images/brand-icons/frame.svg"
        alt="partner"
      />
    </Slider>
  );
}
