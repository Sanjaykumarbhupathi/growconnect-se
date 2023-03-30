import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TextCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1500,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="text-box">
        <h3>First slide</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="text-box">
        <h3>Second slide</h3>
        <p>Nulla nec turpis sed ipsum efficitur dictum vel ac ligula.</p>
      </div>
      <div className="text-box">
        <h3>Third slide</h3>
        <p>Quisque tincidunt mi vel leo tristique,</p>
      </div>
      <div className="text-box">
        <h3>Fourth slide</h3>
        <p>Cras rhoncus mauris sed metus bibendum,</p>
      </div>
      <div className="text-box">
        <h3>Fifth slide</h3>
        <p>Morbi ultricies nulla ac metus commodo, </p>
      </div>
      <div className="text-box">
        <h3>Sixth slide</h3>
        <p>Aliquam vel elit quis risus </p>
      </div>
    </Slider>
  );
}

export default TextCarousel;
