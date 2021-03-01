import styled, { css } from 'styled-components';
import { anyPropsAttrs, getMargins } from 'helpers';

const sizeMap = {
  small: '13px',
  medium: '16px',
  large: '20px',
};

const getEllipsisStyles = (props) => {
  const { ellipsis } = props;

  if (ellipsis) {
    return css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `;
  }

  return null;
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
    return `color: ${colors.BACKGROUND}`;
  }

  if (color === 'white') {
    return `color: ${colors.WHITE}`;
  }

  const fontColor = colors[`${color.toUpperCase()}_FONT`];
  return `color: ${fontColor}`;
};

export const Text = styled.span.attrs(anyPropsAttrs)`
  font-size: ${({ size }) => sizeMap[size]};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  ${getColor};
  ${getEllipsisStyles};
  ${getMargins};
`;
