import styled, { css, keyframes } from 'styled-components';
import { getGrayDarkColor } from 'helpers';
import { Layout } from 'components/providers/Layout';

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

const sizeMap = {
  [Layout.DESKTOP]: 'width:680px, height: 600px;',
  [Layout.TABLET]: 'width:100%; height: 100%;',
  [Layout.MOBILE]: css`
    width:100%;
    min-width: 100%;
    flex-shrink: 0;
  `,
};

export const Skeleton = styled.svg`
  margin-bottom: 32px;
  ${({ theme: { layout } }) => sizeMap[layout]};

  rect, circle {
    stroke: ${getGrayDarkColor};
    fill: ${getGrayDarkColor};
    will-change: fill, stroke, opacity;
    animation: ${fadeAnimation} 1.8s linear infinite;
  }

  rect#border {
    fill: none !important;
  }
`;
