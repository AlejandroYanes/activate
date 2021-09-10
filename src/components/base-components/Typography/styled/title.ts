import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  1: '48px',
  2: '28px',
  3: '20px',
};

const weightMap = {
  'normal': css`font-family: Raleway, sans-serif;`,
  'light': css`font-family: Raleway, sans-serif; font-weight: lighter;`,
  'bold': css`font-family: Raleway, sans-serif; font-weight: bold;`,
};

const getTextStyles = (props) => {
  const { level, align, weight, inline } = props;

  return css`
    ${weightMap[weight]};
    font-size: ${sizeMap[level]};
    text-align: ${align};
    ${inline ? 'display: inline;' : ''}
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

  if (color === 'background') {
    return `color: ${colors.BACKGROUND_LIGHTER}`;
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
