import React from 'react';
import styled from 'styled-components';

export const CarouselSlide = () => {
  return (
    <SlideWrapper>
      <div className="slideBackground"></div>
    </SlideWrapper>
  );
};

//Styled Component

type ButtonsProps = {
  primary?: string;
};

const Buttons = styled.button<ButtonsProps>`
  color: red;
  background-color: ${(props) =>
    props.primary === 'white' ? 'white' : 'black'};
`;
const SlideWrapper = styled.div`
  width: 100%;
  .slideBackground {
    background-color: ;
  }
`;
