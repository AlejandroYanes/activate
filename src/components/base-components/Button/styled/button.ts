import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins } from 'components/_base';
import { ButtonProps } from '..';

const getSize = (props: ButtonProps) => {
  const { sm } = props;

  if (sm) {
    return `
      height: 28px;
      min-width: 28px;
      font-size:0.75rem;
      font-weight: bold;
      letter-spacing: 1px;
    `;
  }

  return `
    height: 38px;
    min-width: 36px;
    font-size: 1.15rem;
  `;
};

const getVariantStyles = (props: ButtonProps) => {
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

const getHoveredStyles = (props: ButtonProps) => {
  const { variant, color } = props;

  switch (variant) {
    case 'base':
      return `
        color: ${Colors[`${color.toUpperCase()}_DARK`]};
        background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
      `;
    case 'outline':
      return `
        color: ${Colors[`${color.toUpperCase()}_DARK`]};
        border-color: ${Colors[`${color.toUpperCase()}_DARK`]};
        background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
      `;
    default:
      return `
        background-color: ${Colors[`${color.toUpperCase()}_DARK`]};
        color: ${Colors.WHITE};
      `;
  }
};

const getFocusStyles = (props: ButtonProps) => {
  const { color } = props;
  return `box-shadow: 0px 0px 4px 0px ${Colors[`${color.toUpperCase()}`]};`;
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
  justify-content: center;
  padding: 0 4px;
  cursor: pointer;
  transition: all linear 150ms;
  ${getSize};
  ${getMargins};
  ${getVariantStyles}

  &:active {
    transform: scale(1.07);
  }

  &:hover, &:focus {
      ${getHoveredStyles}
  }

  // &:focus {
  //   ${getFocusStyles}
  // }
`;
