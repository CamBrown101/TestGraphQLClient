import React from 'react';
import styled from 'styled-components';

type Props = {
  color: string;
  slide: number;
};

const CarouselSlide = ({ color, slide }: Props) => {
  return (
    <SlideWrapper color={color}>
      <div className="slideBackground">{slide}</div>
    </SlideWrapper>
  );
};

//Styled Component

type SlideProps = {
  color?: string;
};

const SlideWrapper = styled.div<SlideProps>`
  background-color: ${(props) => {
    return props.color;
  }};
  height: 300px;
  width: 100%;
`;

export default CarouselSlide;
