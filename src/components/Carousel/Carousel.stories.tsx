import React from 'react';
import { Story, Meta } from '@storybook/react';

import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Default = () => <Carousel interval={3000} numberOfSlides={5} />;
