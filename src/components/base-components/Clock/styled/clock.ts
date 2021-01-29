import styled from 'styled-components';

const outerSize = 280;
const markerSize = 36;

export const StyledClock = styled.div`
  height: ${outerSize}px;
  width: ${outerSize}px;
  position: relative;
`;

export const OuterRing = styled.div`
  height: ${outerSize}px;
  width: ${outerSize}px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const getActiveStyles = (props) => {
  const { active, theme } = props;

  if (active) {
    return `
      background-color: ${theme.colors.BRAND};
      color: ${theme.colors.WHITE};
    `;
  }
  return `
    background-color: transparent;
    color: ${theme.colors.FONT};
  `;
};

export const Marker = styled.button`
  outline: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.FONT};
  height: ${markerSize}px;
  width: ${markerSize}px;
  font-size: ${markerSize / 2}px;
  line-height: ${markerSize}px;
  cursor: pointer;
  ${getActiveStyles};
  transition: all 150ms linear;

  &:active {
    background-color: ${({ theme }) => theme.colors.BRAND};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;

export const HourLabel = styled.div`
  position: absolute;
  padding: 6px;
  font-size: 26px;
  top: 0;
  bottom: 0;
  margin: auto 25%;
  height: 40px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.FONT};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HourButton = styled.button.attrs((props: any) => props)`
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 2px;
  margin: 2px;
  font-size: 26px;
  ${getActiveStyles};
  transition: all 150ms linear;

  &:active {
    background-color: ${({ theme }) => theme.colors.BRAND};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
