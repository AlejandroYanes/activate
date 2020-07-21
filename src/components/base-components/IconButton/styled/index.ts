import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins } from 'components/base-components/_base';
import { IconButtonProps } from '..';

const getSize = (props: IconButtonProps) => {
  const { sm } = props;

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

const getBackGroundColor = (props: IconButtonProps) => {
  const { variant, color } = props;

  if (variant === 'fill') {
    return `background-color: ${Colors[color.toUpperCase()]}`;
  }

  return 'background-color: transparent';
};

const getBorder = (props: IconButtonProps) => {
  const { variant, color } = props;
  const borderStyle = 'solid 1px';

  if (variant === 'outline' || variant === 'fill') {
    return `border: ${borderStyle} ${Colors[color.toUpperCase()]}`;
  }

  return `border: ${borderStyle} transparent`;
};

const getHoveredStyles = (props: IconButtonProps) => {
  const { color } = props;

  return `
    color: ${Colors[`${color.toUpperCase()}_DARK`]};
    border-color: ${Colors[`${color.toUpperCase()}_DARK`]};
    background-color: ${Colors[`${color.toUpperCase()}_SHADE`]};
    `;
};

const getToggleStyles = (props: IconButtonProps) => {
  const { toggle } = props;

  if (toggle) {
    return getHoveredStyles(props);
  }
  return undefined;
};

export const IconButton = styled.button.attrs((props: IconButtonProps) => props)`
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
  ${getBackGroundColor};
  ${getBorder};
  ${getToggleStyles}

  &:active {
    transform: scale(1.07);
  }

  &:hover, &:focus {
      ${getHoveredStyles}
  }
`;
