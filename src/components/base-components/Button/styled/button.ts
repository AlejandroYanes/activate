import styled, { css } from 'styled-components';
import { getMargins } from 'helpers';
import { ButtonProps } from '..';

const getSize = (props: ButtonProps) => {
  const { sm, fullWidth } = props;
  const width = fullWidth ? '100%' : undefined;

  if (sm) {
    return `
      height: 28px;
      width: ${width};
      min-width: 28px;
      font-size:0.75rem;
      font-weight: bold;
    `;
  }

  return `
    height: 36px;
    width: ${width};
    min-width: 36px;
    font-size: 1rem;
  `;
};

const getAlignment = (props: ButtonProps) => {
  const { align } = props;
  return align === 'center' ? align : `flex-${align}`;
};

export const getVariantStyles = ({ theme, ...buttonProps }) => {
  const { colors } = theme;
  const { variant, color } = buttonProps as ButtonProps;
  const borderStyle = 'solid 1px ';

  switch (variant) {
    case 'base': {
      const fontColor = color === 'font'
        ? colors.FONT
        : colors[`${color.toUpperCase()}_FONT`];

      const fontHoverColor = color === 'font'
        ? colors.FONT
        : colors[`${color.toUpperCase()}_FONT_HIGHLIGHT`];

      return css`
        color: ${fontColor};
        background-color: ${colors.BACKGROUND};
        border: ${borderStyle} transparent;

        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${colors[`${color.toUpperCase()}_SHADE`]};
        }
      `;
    }
    case 'flat': {
      const fontColor = color === 'font'
        ? colors.FONT
        : colors[`${color.toUpperCase()}_FONT`];

      const fontHoverColor = color === 'font'
        ? colors.FONT
        : colors[`${color.toUpperCase()}_FONT_HIGHLIGHT`];

      return css`
        background-color: transparent;
        color: ${fontColor};
        border: ${borderStyle} transparent;

        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${colors[`${color.toUpperCase()}_SHADE`]};
        }
      `;
    }
    case 'fill': {
      const fontColor = color === 'font' ? colors.BACKGROUND : colors.WHITE;
      const backgroundColor = colors[color.toUpperCase()];
      const backgroundHoverColor = colors[`${color.toUpperCase()}_HIGHLIGHT`];

      return css`
        color: ${fontColor};
        background-color: ${backgroundColor};
        border: ${borderStyle} ${backgroundColor};

        &:hover, &:focus {
          background-color: ${backgroundHoverColor};
          border-color: ${backgroundHoverColor};
          color: ${colors.WHITE};
        }
      `;
    }
  }
};

export const Button = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 100px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: ${getAlignment};
  padding: 0 8px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: all linear 150ms;
  ${getSize};
  ${getMargins};
  ${getVariantStyles};

  &:active {
    transform: scale(0.9);
  }
`;
