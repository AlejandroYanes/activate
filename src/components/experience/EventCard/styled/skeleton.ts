import styled, { keyframes } from 'styled-components';
import { getBgdLighterColor } from 'helpers';

const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;

export const Skeleton = styled.svg`
  margin-bottom: 32px;

  rect, circle {
    stroke: ${getBgdLighterColor};
    fill: ${getBgdLighterColor};
    will-change: fill, stroke, opacity;
    animation: ${fadeAnimation} 1s linear infinite;
  }

  rect#border {
    fill: none !important;
  }
`;
