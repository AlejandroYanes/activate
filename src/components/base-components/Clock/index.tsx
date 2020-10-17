import React, { FunctionComponent, useEffect, useRef } from 'react';
import { StyledClock, OuterRing, Content, Marker, HourLabel } from './styled/clock';
import getMarkerPositions from './get-marker-positions';

interface Props {
  value: Date;
  onChange: (time: Date) => void;
}

const Clock: FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;
  const outerRingRef = useRef(undefined);

  useEffect(() => {
    const { width } = outerRingRef.current.getBoundingClientRect();
    const positions = getMarkerPositions(width);
    const markers = document.querySelectorAll('div[data-el="marker"]');
    markers.forEach((el, key) => {
      const { top, left } = positions[key];
      const style = `top: ${top}px; left: ${left}px;`;
      el.setAttribute('style', style);
    });
  }, []);

  return (
    <StyledClock data-el="clock-wrapper">
      <OuterRing data-el="outer-ring" ref={outerRingRef}>
        <Content data-el="outer-ring-content">
          <Marker data-el="marker">12</Marker>
          <Marker data-el="marker">1</Marker>
          <Marker data-el="marker">2</Marker>
          <Marker data-el="marker">3</Marker>
          <Marker data-el="marker">4</Marker>
          <Marker data-el="marker">5</Marker>
          <Marker data-el="marker">6</Marker>
          <Marker data-el="marker">7</Marker>
          <Marker data-el="marker">8</Marker>
          <Marker data-el="marker">9</Marker>
          <Marker data-el="marker">10</Marker>
          <Marker data-el="marker">11</Marker>
          <HourLabel>
            <span>11 : 20 PM</span>
          </HourLabel>
        </Content>
      </OuterRing>
    </StyledClock>
  );
};

export default Clock;
