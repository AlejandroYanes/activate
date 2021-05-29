import styled, { css } from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';
import { ButtonProps } from '../Button';

const getSize = (props: ButtonProps) => {
  const { sm, fullWidth } = props;
  const width = fullWidth ? '100%' : undefined;

  if (sm) {
    return `
      height: 28px;
      width: ${width};
      min-width: 28px;
      font-size: 13px;
      font-weight: bold;
    `;
  }

  return `
    height: 36px;
    width: ${width};
    min-width: 36px;
    font-size: 16px;
  `;
};

const getAlignment = (props: ButtonProps) => {
  const { align } = props;
  return align === 'center' ? align : `flex-${align}`;
};

export const getVariantStyles = (props) => {
  const { theme, ...buttonProps } = props;
  const { variant, color } = buttonProps as ButtonProps;
  const { colors } = theme;

  switch (variant) {
    case 'text': {
      const colorInScheme = color.toUpperCase();
      const fontColor = color === 'background'
        ? colors.FONT
        : colors[`${colorInScheme}_FONT`];
      const fontHoverColor = color === 'background'
        ? colors.BRAND_FONT_HIGHLIGHT
        : colors[`${colorInScheme}_FONT_HIGHLIGHT`];

      return css`
        padding: 0;
        font-weight: bold;
        color: ${fontColor};
        background-color: transparent;
        &:hover, &:focus {
          color: ${fontHoverColor};
        }
      `;
    }
    case 'outline': {
      const colorInScheme = color.toUpperCase();
      const fontHoverColor = color === 'background'
        ? colors.FONT
        : colors[`${colorInScheme}_FONT_HIGHLIGHT`];

      return css`
        color: ${colors[`${colorInScheme}_FONT`]};
        background-color: transparent;
        border: 1px solid ${colors[colorInScheme]};

        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${colors[`${colorInScheme}_SHADE`]};
          border-color: ${fontHoverColor};
        }
      `;
    }
    case 'flat': {
      const colorInScheme = color.toUpperCase();
      const fontColor = (
        color === 'background'
          ? colors.FONT
          : colors[`${colorInScheme}_FONT`]
      );
      const fontHoverColor = (
        color === 'background'
          ? colors.FONT
          : colors[`${colorInScheme}_FONT_HIGHLIGHT`]
      );
      const backgroundHoverColor = (
        color === 'background'
          ? colors.BACKGROUND
          : colors[`${colorInScheme}_SHADE`]
      );

      return css`
        background-color: transparent;
        color: ${fontColor};

        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${backgroundHoverColor};
        }
      `;
    }
    case 'fill': {
      const fontColor = (
        color === 'background' ? colors.FONT : colors.WHITE
      );
      const backgroundColor = (
        color === 'background'
          ? colors.BACKGROUND
          : colors[color.toUpperCase()]
      );

      const fontHoverColor = (
        color === 'background'
          ? colors.BRAND_FONT_HIGHLIGHT
          : colors.WHITE
      );
      const backgroundHoverColor = (
        color === 'background'
          ? colors.BRAND_SHADE
          : colors[`${color.toUpperCase()}_HIGHLIGHT`]
      );

      return css`
        color: ${fontColor};
        background-color: ${backgroundColor};

        &:hover, &:focus {
          color: ${fontHoverColor};
          background-color: ${backgroundHoverColor};
        }
      `;
    }
  }
};

export const Button = styled.button.attrs(anyPropsAttrs)`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 100px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: ${getAlignment};
  padding: 0 12px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: all linear 150ms;
  ${getSize};
  ${getVariantStyles};
  ${getPositionStyles};

  &:active {
    transform: scale(0.9);
  }

  & > svg * {
    transition: all linear 150ms;
  }
`;
