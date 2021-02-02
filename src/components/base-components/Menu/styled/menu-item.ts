import styled from 'styled-components';

const elementBorderRadius = '6px';
const elementHeight = '40px';

export const MenuItem = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: ${elementHeight};
  padding: 0 8px;
  color: ${({ theme }) => theme.colors.FONT};
  font-size: 1rem;
  transition: font-size ease-in-out 120ms;

  &:first-child {
    border-top-right-radius: ${elementBorderRadius};
    border-top-left-radius: ${elementBorderRadius};
  }

  &:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: ${elementBorderRadius};
    border-bottom-left-radius: ${elementBorderRadius};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.BRAND_SHADE};
  }

  &:active {
    font-size: 0.95rem;
  }
`;

export const MenuItemIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const MenuItemLabel = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-bottom: 2px;
  }
`;
