import styled from "styled-components";
import React from "react";

interface RatioProps {
  $index: number;
  $ratio: number;
}

const AnimatedRatio = styled.div<RatioProps>`
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: ${(props) =>
    props.$index < props.$ratio ? "var(--secondary)" : "var(--primary)"};
  box-shadow: ${(props) =>
    props.$index < props.$ratio
      ? "0 0 15px var(--secondary), 0 0 30px var(--secondary)"
      : "none"};
  left: 49.5%;
  transform-origin: 50% 75px;
  opacity: 0;
  animation: animate 0.1s linear forwards;
  transform: rotate(${(props) => props.$index * 3.6}deg);
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
