import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const SideMenu = styled.aside`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 32px 32px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: ${ZLevels.sidePanels};
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`;
