import styled from 'styled-components';

export const StyledNotification = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 10px;
  transition: all 250ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
  }
`;

export const UnReadDot = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  top: 48px;
  left: 22px;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.ACCENT};
`;
