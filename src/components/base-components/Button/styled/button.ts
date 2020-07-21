import styled from 'styled-components';
import Colors from '../../../../styles/colors';
import { ButtonProps } from '..';

const getSize = (props: ButtonProps) => {
  const { sm } = props;

  if (sm) {
    return `
      height: 28px;
      font-size:0.75rem;
      font-weight: bold;
      letter-spacing: 1px;
    `;
  }

  return `
    height: 38px;
    font-size: 1.15rem;
  `;
};

const getMargins = (props: ButtonProps) => {
  const { mT, mR, mB, mL } = props;
  const margins = [
    mT ? '1rem' : '0',
    mR ? '1rem' : '0',
    mB ? '1rem' : '0',
    mL ? '1rem' : '0',
  ];

  return `margin: ${margins.join(' ')};`;
};

const getBackgroundColor = (props: ButtonProps) => {
  const { variant, color } = props;

  if (variant === 'fill') {
    return Colors[color.toUpperCase()];
  }

  return 'transparent';
};

const getFontColor = (props: ButtonProps) => {
  const { variant, color } = props;

  if (variant === 'fill') {
    switch (color) {
      case 'white':
        return Colors.DARK;
      default:
        return Colors.WHITE;
    }
  }

  return Colors[color.toUpperCase()];
};

const getBorder = (props: ButtonProps) => {
  const { variant, color } = props;
  const borderStyle = 'solid 1px ';

  if (variant === 'outline' || variant === 'fill') {
    return `${borderStyle} ${Colors[color.toUpperCase()]}`;
  }

  return `${borderStyle} transparent`;
};

const getHoveredStyles = (props: ButtonProps) => {
  const { variant, color } = props;

  if (variant === 'base') {
    return `
    border-color: ${Colors[color.toUpperCase()]};
    background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
    `;
  }

  if (variant === 'outline') {
    return `
    color: ${Colors[`${color.toUpperCase()}_DARK`]};
    border-color: ${Colors[`${color.toUpperCase()}_DARK`]};
    background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
    `;
  }

  if (variant === 'fill') {
    return `
    background-color: ${Colors[`${color.toUpperCase()}_DARK`]};
    color: ${Colors.WHITE};
    `;
  }
  return '';
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
  color: ${getFontColor};
  background-color: ${getBackgroundColor};
  border: ${getBorder};

  &:active {
    transform: scale(1.07);
  }

  &:hover, &:focus {
      ${getHoveredStyles}
  }
`;
