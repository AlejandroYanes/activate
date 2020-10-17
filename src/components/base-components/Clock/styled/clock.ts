import styled from 'styled-components';
import Colors from '../../../../styles/colors';

const outerSize = 280;
const markerSize = 36;

export const StyledClock = styled.div`
  height: ${outerSize}px;
  width: ${outerSize}px;
  position: relative;
  margin-left: 100px;
  margin-top: 100px;
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
  background-color: ${Colors.BRAND_SHADE};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Marker = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${Colors.DARK};
  color: ${Colors.WHITE};
  height: ${markerSize}px;
  width: ${markerSize}px;
  font-size: ${markerSize / 2}px;
  line-height: ${markerSize}px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.BRAND_DARK};
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
  color: ${Colors.DARK};
  //background-color: ${Colors.DARK};
  display: flex;
  align-items: center;
  justify-content: center;
`;
