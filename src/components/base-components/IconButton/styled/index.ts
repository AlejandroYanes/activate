import styled from 'styled-components';
import { getMargins } from 'helpers';
import { getHoveredStyles, getVariantStyles } from 'components/base-components/Button/styled';
import { IconButtonProps } from '..';

const getSize = (props: IconButtonProps) => {
  const { size } = props;

  switch (size) {
    case 'small':
      return `
        height: 28px;
        width: 28px;
        min-width: 28px;
      `;
    case 'medium':
      return `
        height: 32px;
        width: 32px;
        min-width: 32px;
      `;
    case 'large':
      return `
        height: 46px;
        width: 46px;
        min-width: 46px;
      `;
    case 'x-large':
      return `
        height: 46px;
        width: 46px;
        min-width: 46px;
      `;
    default:
      return `
        height: 32px;
        width: 32px;
        min-width: 32px;
      `;
  }
};

const getToggleStyles = (props) => {
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
    transform: scale(0.9);
  }

  &:hover, &:focus {
      ${getHoveredStyles}
  }
`;
