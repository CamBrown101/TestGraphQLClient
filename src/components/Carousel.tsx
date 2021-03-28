import React, { useState } from 'react';

type Props = {
  interval: number;
};

const Carousel = ({ interval }: Props) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    let slideCopy = slide;
    setSlide(slideCopy + 1);
  };

  console.log(interval);
  const slideTimer = (interval: number) => {
    const nxtSlide = setInterval(() => nextSlide(), interval);
  };

  slideTimer(interval);
  return (
    <div>
      <p>{slide}</p>
      <button onClick={() => nextSlide()}> next </button>
    </div>
  );
};

export default Carousel;
