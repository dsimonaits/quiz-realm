/* eslint-disable no-undef */
import styled from "styled-components";

export const Ratio = styled.div<{ $index: number; $ratio: number }>`
  position: absolute;
  width: 2px;
  height: 10px;
  background: "accent";
  left: 49.5%;
  /* top: 5%; */
  transform-origin: 50% 75px;

  opacity: 0;
  animation: animate 0.1s linear forwards;
  animation-delay: ${(props) => props.$index / 50}s;

  background-color: ${(props) =>
    props.$index < props.$ratio ? "var(--secondary)" : "var(--primary)"};

  box-shadow: ${(props) =>
    props.$index < props.$ratio
      ? "0 0 15px var(--secondary), 0 0 30px var(--secondary)"
      : "none"};

  transform: rotate(${(props) => props.$index * 3.6}deg);

  @keyframes animate {
    to {
      opacity: 1;
    }
  }
`;
