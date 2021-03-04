import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const StyledTalksModal = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  z-index: ${ZLevels.backdrop};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 16px 20px;
  height: 42px;
`;

export const Body = styled.main`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
