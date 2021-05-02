import React from "react";
import styled from "styled-components";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

type Props = {
  direction?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CarouselButton = ({ direction, onClick }: Props) => {
  return (
    <Button onClick={(e) => onClick(e)}>
      {direction === "next" ? <ChevronRight /> : <ChevronLeft />}
    </Button>
  );
};

const Button = styled.button`
  color: white;
  border: none;
  width: 80px;
  padding: 0;
  background-color: rgba(1, 1, 1, 0);
  cursor: pointer;
`;

export default CarouselButton;
