import React from 'react';
import CarouselSlide from './CarouselSlide';

export default {
  title: 'Carousel Slide',
  component: CarouselSlide,
};

export const Default = () => (
  <CarouselSlide numberOfSlides={5} slide={1} color="yellow" />
);
