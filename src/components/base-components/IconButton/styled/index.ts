import styled from 'styled-components';
import { IconButtonProps } from '../index';
import Colors from '../../../../styles/colors';

const getSize = (props) => {
  const { sm } = props as IconButtonProps;

  if (sm) {
    return `
      height: 28px;
      width: 28px
    `;
  }

  return `
    height: 38px;
    width: 38px;
  `;
};

const getMargins = (props) => {
  const { mT, mR, mB, mL } = props as IconButtonProps;
  const margins = [
    mT ? '1rem' : '0',
    mR ? '1rem' : '0',
    mB ? '1rem' : '0',
    mL ? '1rem' : '0',
  ];

  return `margin: ${margins.join(' ')};`;
};

const getBackGroundColor = (props) => {
  const { variant, color } = props as IconButtonProps;

  if (variant === 'fill') {
    return `${Colors[color.toUpperCase()]}`;
  }

  return 'transparent';
};

const getBorder = (props) => {
  const { variant, color } = props as IconButtonProps;
  const borderStyle = 'solid 1px ';

  if (variant === 'outline' || variant === 'fill') {
    return `${borderStyle} ${Colors[color.toUpperCase()]}`;
  }

  return `${borderStyle} transparent`;
};

const getHoveredStyles = (props) => {
  const { color } = props as IconButtonProps;

  return `
    color: ${Colors[`${color.toUpperCase()}_DARK`]};
    border-color: ${Colors[`${color.toUpperCase()}_DARK`]};
    background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
    `;
};

export const IconButton = styled.button`
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
  ${getSize};
  ${getMargins};
  background-color: ${getBackGroundColor};
  border: ${getBorder};

  &:active {
    transform: scale(1.07);
  }

  &:hover, &:focus {
      ${getHoveredStyles}
  }
`;
