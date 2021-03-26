import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';
import { getEllipsisStyles } from './text';

const sizeMap = {
  1: '32px',
  2: '26px',
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

const commonStyles = css`
  ${getTextStyles};
  ${getColor};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;

export const H1 = styled.h1.attrs(anyPropsAttrs)`
  padding: 12px 0;
  ${commonStyles};
`;

export const H2 = styled.h2.attrs(anyPropsAttrs)`
  padding: 10px 0;
  ${commonStyles};
`;

export const H3 = styled.h3.attrs(anyPropsAttrs)`
  padding: 8px 0;
  ${commonStyles};
`;
