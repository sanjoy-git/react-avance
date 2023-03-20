import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from '../images/bg-6.jpg';
import image2 from '../images/bg-3.jpg';
import image3 from '../images/bg-4.jpg';

import './ReactSlick.css';

export default function ReactSlick() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='react-slick-slider'>
      <h2>Auto Play</h2>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
      </Slider>      
    </div>
  )
}
