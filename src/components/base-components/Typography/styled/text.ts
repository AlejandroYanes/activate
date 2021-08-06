import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles, getEllipsisStyles } from 'helpers';

const sizeMap = {
  small: '12px',
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

const getItalicStyle = (props) => {
  const { italic } = props;

  if (italic) {
    return css`font-style: italic`;
  }

  return '';
};

const weightMap = {
  'normal': css`font-family: Nunito-Light, sans-serif;`,
  'light': css`font-family: Nunito-ExtraLight, sans-serif; font-weight: lighter;`,
  'bold': css`font-family: Nunito-ExtraBold, sans-serif; font-weight: bold;`,
};

export const Text = styled.span.attrs(anyPropsAttrs)`
  white-space: normal;
  box-sizing: border-box;
  ${({ weight }) => weightMap[weight]};
  font-size: ${({ size }) => sizeMap[size]};
  text-align: ${({ align }) => align};
  ${getItalicStyle};
  ${getColor};
  ${getEllipsisStyles};
  ${getPositionStyles};
`;
