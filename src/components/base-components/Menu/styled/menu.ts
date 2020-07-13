import styled from 'styled-components';
import Colors from 'styles/colors';
import { elementBorderRadius } from 'styles/variables';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 12px;
  min-width: 250px;
  border-radius: ${elementBorderRadius};
  background-color: ${Colors.LIGHT_GRAY};
  box-shadow:
    2px 2px 4px ${Colors.MEDIUM_GRAY};
`;
