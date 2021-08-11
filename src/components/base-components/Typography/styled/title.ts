import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  1: '36px',
  2: '28px',
  3: '20px',
};

const weightMap = {
  'normal': css`font-family: Nunito-Regular, sans-serif;`,
  'light': css`font-family: Nunito-ExtraLight, sans-serif; font-weight: lighter;`,
  'bold': css`font-family: Nunito-ExtraBold, sans-serif; font-weight: bold;`,
};

const getTextStyles = (props) => {
  const { level, align, weight } = props;

  return css`
    ${weightMap[weight]};
    font-size: ${sizeMap[level]};
    text-align: ${align};
  `;
};

const getColor = (props) => {
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


export const Heading = styled.h1.attrs(anyPropsAttrs)`
  white-space: normal;
  ${getTextStyles};
  ${getColor};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;
