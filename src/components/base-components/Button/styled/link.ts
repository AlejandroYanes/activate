import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getPositionStyles } from 'helpers';
import { getVariantStyles } from './button';

export const StyledLink = styled(Link)`
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
  ${getVariantStyles};
  ${getPositionStyles};

  &:active {
    transform: scale(0.9);
  }
`;
