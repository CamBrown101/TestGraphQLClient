import React, { useState, useEffect } from 'react';

type Props = {
  interval: number;
};

const Carousel = ({ interval }: Props) => {
  const [slide, setSlide] = useState(0);
  console.log(slide);

  const nextSlide = () => {
    setSlide(slide + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <p>{slide}</p>
      <button onClick={() => nextSlide()}> next </button>
    </div>
  );
};

export default Carousel;
