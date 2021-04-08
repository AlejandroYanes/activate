import styled from 'styled-components';

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
  list-style: none;
  //z-index: 1;
  margin: 0;
  padding: 0;
  //position: absolute;
  //top: 12px;
  min-width: 400px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  //box-shadow: 0 0 8px 2px ${({ theme }) => theme.colors.FONT_SHADE};
`;
