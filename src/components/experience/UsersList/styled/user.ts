import styled from 'styled-components';

export const AvatarSection = styled.div`
  pointer-events: none;
  position: relative;
  display: flex;
`;

export const ActiveDot = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  bottom: 2px;
  right: -2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.SUCCESS};
  border: 3px solid ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Info = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 0 8px;
  margin: 0;
  border: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & > span {
    width: 100%;
  }
`;

export const Talk = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  margin: 0 0 6px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 150ms linear;

  &:hover, &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.BACKGROUND};

    ${ActiveDot} {
      border-color: ${({ theme }) => theme.colors.BACKGROUND};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;
