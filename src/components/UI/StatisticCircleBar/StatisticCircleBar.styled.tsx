import styled from "styled-components";
import React from "react";

interface RatioProps {
  $index: number;
  $ratio: number;
  $deg: number;
  $color: string;
}

const AnimatedRatio = styled.div<RatioProps>`
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: ${(props) => `${props.$color}`};
  box-shadow: ${(props) =>
    `0 0 10px ${props.$color}, 0 0 10px ${props.$color}`};
  left: 49.5%;
  transform-origin: 50% 75px;
  opacity: 0;
  animation: animate 0.1s linear forwards;
  transform: rotate(${(props) => props.$deg}deg);
  animation-delay: ${(props) => props.$index / 80}s;

  @keyframes animate {
    to {
      opacity: 1;
    }
  }
`;

export const Ratio: React.FC<RatioProps> = (props) => {
  return <AnimatedRatio {...props} />;
};
