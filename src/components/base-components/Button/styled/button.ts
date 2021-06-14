import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';
import { ButtonProps } from '../Button';
import { getVariantStyles } from './utils';

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

export const Button = styled.button.attrs(anyPropsAttrs)`
  font-family: Comfortaa, sans-serif;
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 100px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: ${getAlignment};
  padding: 0 18px;
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
