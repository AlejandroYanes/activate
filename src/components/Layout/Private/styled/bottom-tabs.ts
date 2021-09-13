import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const TabBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 54px;
  box-sizing: border-box;
  padding: 8px;
  margin: 0 6px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: ${ZLevels.bottomTabBar};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;
