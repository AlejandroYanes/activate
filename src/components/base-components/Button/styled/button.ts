import styled from 'styled-components';
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

  if (align === 'center') {
    return align;
  }

  return `flex-${align}`;
};

export const getVariantStyles = ({ theme, ...buttonProps }) => {
  const { useDarkStyle, colors } = theme;
  const { variant, color } = buttonProps as ButtonProps;
  const borderStyle = 'solid 1px ';

  switch (variant) {
    case 'base': {
      const fontColor = useDarkStyle
        ? `${colors[`${color.toUpperCase()}_LIGHT`]}`
        : `${colors[`${color.toUpperCase()}`]}`;

      return `
        color: ${fontColor};
        background-color: ${colors.BACKGROUND};
        border: ${borderStyle} transparent;
      `;
    }
    case 'flat': {
      const fontColor = useDarkStyle
        ? `${colors[`${color.toUpperCase()}_LIGHT`]}`
        : `${colors[`${color.toUpperCase()}`]}`;

      return `
        background-color: transparent;
        color: ${fontColor};
        border: ${borderStyle} transparent;
      `;
    }
    default: {
      const fontColor = color === 'font' ? colors.BACKGROUND : colors.WHITE;
      const backgroundColor = useDarkStyle
        ? `${colors[`${color.toUpperCase()}_DARK`]}`
        : `${colors[`${color.toUpperCase()}`]}`;

      return `
        color: ${fontColor};
        background-color: ${backgroundColor};
        border: ${borderStyle} ${backgroundColor};
      `;
    }
  }
};

export const getHoveredStyles = ({ theme, ...buttonProps }) => {
  const { useDarkStyle, colors } = theme;
  const { variant, color } = buttonProps as ButtonProps;

  switch (variant) {
    case 'base':
      return `
        color: ${colors[`${color.toUpperCase()}_${useDarkStyle ? 'LIGHT' : 'DARK'}`]};
        background-color: ${colors[`${color.toUpperCase()}_SHADE`]};
      `;
    case 'flat':
      return `
        color: ${colors[`${color.toUpperCase()}_${useDarkStyle ? 'LIGHT' : 'DARK'}`]};
        background-color: ${colors[`${color.toUpperCase()}_SHADE`]};
      `;
    default: {
      const backgroundColor = useDarkStyle
        ? `${colors[`${color.toUpperCase()}`]}`
        : `${colors[`${color.toUpperCase()}_DARK`]}`;

      return `
        background-color: ${backgroundColor};
        border-color: ${backgroundColor};
        color: ${colors.WHITE};
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
  transition: all linear 150ms;
  flex-shrink: 0;
  position: relative;
  ${getMargins};
  ${getSize};
  ${getVariantStyles}

  &:active {
    transform: scale(0.9);
  }

  &:hover, &:focus {
    ${getHoveredStyles}
  }
`;
