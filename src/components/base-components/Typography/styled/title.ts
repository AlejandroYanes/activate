import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  1: '36px',
  2: '28px',
  3: '20px',
};

const getTextStyles = (props) => {
  const { level, align, weight } = props;

  return `
    font-size: ${sizeMap[level]};
    text-align: ${align};
    font-weight: ${weight};
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
