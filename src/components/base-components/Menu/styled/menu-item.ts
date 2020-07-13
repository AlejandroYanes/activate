import styled from 'styled-components';
import Colors from 'styles/colors';
import { elementHeight, elementBorderRadius } from 'styles/variables';

export const MenuItem = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  height: ${elementHeight};
  padding: 0 8px;
  color: ${Colors.DARK};
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
    background-color: ${Colors.MEDIUM_GRAY};
    // box-shadow:
    //   inset -2px -2px 4px ${Colors.WHITE},
    //   inset 2px 2px 4px ${Colors.MEDIUM_GRAY};
  }

  &:active {
    font-size: 1.15rem;
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
