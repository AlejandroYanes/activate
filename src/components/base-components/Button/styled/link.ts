import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { elementHeight } from 'styles/variables';
import { getPositionStyles } from 'helpers';
import { getVariantStyles } from './utils';

const getHeightStyles = (props) => {
  const { variant } = props;

  if (variant !== 'text') {
    return `
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${elementHeight};
    `;
  }

  return '';
};

export const StyledLink = styled(Link)`
  font-family: Nunito-Regular, sans-serif;
  text-decoration: none;
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 100px;
  letter-spacing: 1px;
  text-align: center;
  padding: 6px 12px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  transition: all linear 150ms;
  ${getHeightStyles};
  ${getVariantStyles};
  ${getPositionStyles};

  &:active {
    transform: scale(0.9);
  }
`;
