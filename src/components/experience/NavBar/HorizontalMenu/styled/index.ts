import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const NavBar = styled.div`
  display: flex;
  align-items: stretch;
  padding: 16px;
  z-index: ${ZLevels.sidePanels};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

