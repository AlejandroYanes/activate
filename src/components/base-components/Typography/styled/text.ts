import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  small: '13px',
  medium: '16px',
  large: '20px',
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
  white-space: normal;
  font-family: Comfortaa, sans-serif;
  font-size: ${({ size }) => sizeMap[size]};
  line-height: ${({ size }) => `calc(${sizeMap[size]} + 4px)`};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  ${getColor};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;
