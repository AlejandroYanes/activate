import styled from 'styled-components';
import { elementBorderRadius } from 'styles/variables';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TriggerContainer = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuList = styled.ul`
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 12px;
  min-width: 200px;
  border-radius: ${elementBorderRadius};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.BRAND_SHADE};
`;
