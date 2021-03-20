import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

const sizeMap = {
  1: '32px',
  2: '26px',
  3: '20px',
};

const getColorFromColor = (props) => {
  const { theme: { colors }, color } = props;

  if (color === 'secondary') {
    return `color: ${colors.FONT_SECONDARY}`;
  }

  if (color === 'font') {
    return `color: ${colors.FONT}`;
  }

  const fontColor = colors[`${color.toUpperCase()}_FONT`];
  return `color: ${fontColor}`;
};

const getWeight = ({ bold }) => `font-weight: ${bold ? 600 : 500}`;

const commonStyles = css`
  font-size: ${({ level }: any) => sizeMap[level]};
  text-align: ${({ align }: any) => align};
  ${getColorFromColor};
  ${getWeight};
  ${getPositionStyles};
`;

export const H1 = styled.h1.attrs(anyPropsAttrs)`
  font-family: "MPlus Rounded Thin", sans-serif;
  ${commonStyles};
`;

export const H2 = styled.h2.attrs(anyPropsAttrs)`
  font-family: "MPlus Rounded Light", sans-serif;
  ${commonStyles};
`;

export const H3 = styled.h3.attrs(anyPropsAttrs)`
  font-family: "MPlus Rounded Normal", sans-serif;
  ${commonStyles};
`;
