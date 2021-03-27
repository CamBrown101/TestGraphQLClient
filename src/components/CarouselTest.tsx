import React from 'react';
import './CarouselTest.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselTest = () => {
  return (
    <Carousel
      interval={2000}
      autoPlay={true}
      centerMode={true}
      infiniteLoop={true}
      showIndicators={false}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </Carousel>
  );
};

export default CarouselTest;
