import React from 'react';
import styled from 'styled-components';

type Props = {
  color: string;
};

const CarouselSlide = ({ color }: Props) => {
  return (
    <SlideWrapper color={color}>
      <div className="slideBackground"></div>
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
