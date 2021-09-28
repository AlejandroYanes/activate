import styled from 'styled-components';
import { getAccentColor, getBgdLightColor, getBgdLighterColor } from 'helpers';

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
  box-sizing: content-box;
  background-color: ${getAccentColor};
  border: 3px solid ${getBgdLightColor};
`;

export const Info = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 0 8px;
  margin: 0 auto 0 0;
  border: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & > span {
    width: 100%;
  }
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  margin: 0 0 8px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 150ms linear;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover, &:focus {
    outline: none;
    background-color: ${getBgdLighterColor};

    ${ActiveDot} {
      border-color: ${getBgdLighterColor};
    }
  }

  &:active {
    transform: scale(0.99);
  }
`;
