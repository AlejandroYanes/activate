import styled from 'styled-components';
import { getBgdLighterColor } from 'helpers';

export const StyledNotification = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 10px;
  transition: all 250ms linear;

  &:hover {
    background-color: ${getBgdLighterColor};
  }
`;

export const UnReadDot = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  top: 50px;
  left: 30px;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.ACCENT};
`;
