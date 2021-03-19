import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const NavBar = styled.div`
  display: flex;
  align-items: stretch;
  padding: 8px;
  margin: 0 6px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${ZLevels.sidePanels};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

