import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Default = () => <Carousel interval={3000} numberOfSlides={5} />;
