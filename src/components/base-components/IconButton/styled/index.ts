import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins } from 'helpers';
import { IconButtonProps } from '..';

const getSize = (props: IconButtonProps) => {
  const { sm } = props;

  if (sm) {
    return `
      height: 28px;
      width: 28px;
      min-width: 28px;
    `;
  }

  return `
    height: 32px;
    width: 32px;
    min-width: 32px;
  `;
};

const getVariantStyles = (props: IconButtonProps) => {
  const { variant, color } = props;
  const borderStyle = 'solid 1px ';

  switch (variant) {
    case 'base':
      return `
        color: ${Colors[color.toUpperCase()]};
        background-color: transparent;
        border: ${borderStyle} transparent;
      `;
    case 'outline':
      return `
        color: ${Colors[color.toUpperCase()]};
        background-color: transparent;
        border: ${borderStyle} ${Colors[color.toUpperCase()]};
      `;
    default: {
      const fontColor = color === 'white' ? Colors.DARK : Colors.WHITE;

      return `
        color: ${fontColor};
        background-color: ${Colors[color.toUpperCase()]};
        border: ${borderStyle} ${Colors[color.toUpperCase()]};
      `;
    }
  }
};

const getHoveredStyles = (props: IconButtonProps) => {
  const { variant, color } = props;

  switch (variant) {
    case 'base':
      return `
        background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
      `;
    case 'outline':
      return `
        border-color: ${Colors[`${color.toUpperCase()}_DARK`]};
        background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
      `;
    default:
      return `
        background-color: ${Colors[`${color.toUpperCase()}_DARK`]};
      `;
  }
};

const getToggleStyles = (props: IconButtonProps) => {
  const { toggle } = props;

  if (toggle) {
    return getHoveredStyles(props);
  }
  return undefined;
};

export const StyledIconButton = styled.button.attrs((props: IconButtonProps) => props)`
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 120ms;
  ${getMargins};
  ${getSize};
  ${getVariantStyles}
  ${getToggleStyles}

  &:active {
    transform: scale(1.07);
  }

  &:hover, &:focus {
      ${getHoveredStyles}
  }
`;
