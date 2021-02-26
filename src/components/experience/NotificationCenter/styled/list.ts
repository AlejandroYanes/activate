import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';

export const Notifications = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: ${ZLevels.notifications};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
