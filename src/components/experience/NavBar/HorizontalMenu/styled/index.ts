import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const NavBar = styled.div`
  display: flex;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  z-index: ${ZLevels.sidePanels};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

