import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { addHours, getHours, getMinutes, subHours, setHours, setMinutes } from 'date-fns';
import { StyledClock, OuterRing, Content, Marker, HourLabel, HourButton } from './styled/clock';
import getMarkerPositions from './get-marker-positions';

interface Props {
  value: Date;
  onChange: (time: Date) => void;
}

enum Selection {
  Hour,
  Minutes,
}

const Clock: FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;
  const [selectionMode, setSelectionMode] = useState<Selection>(Selection.Hour);
  const outerRingRef = useRef(undefined);
  const isPast12 = getHours(value) > 12;
  const midDayMarker = isPast12 ? 'PM' : 'AM';
  const hours = `00${isPast12 ? getHours(value) - 12 : getHours(value)}`.slice(-2);
  const minutes = `00${getMinutes(value)}`.slice(-2);

  const handleMarkerClick = (event) => {
    if (selectionMode === Selection.Minutes) {
      const { min } = event.target.dataset;
      onChange(setMinutes(value, parseInt(min, 10)));
    } else {
      const { hour: nextHour } = event.target.dataset;
      const parsedHour = parseInt(nextHour, 10);
      const nextDate = setHours(value, isPast12 ? parsedHour + 12 : parsedHour);
      setSelectionMode(Selection.Minutes);
      onChange(nextDate);
    }
  };

  const handleMidDayMarkerChange = () => {
    const hoursModifier = getHours(value) > 12 ? subHours : addHours;
    onChange(hoursModifier(value, 12));
  };

  useEffect(() => {
    const { width } = outerRingRef.current.getBoundingClientRect();
    const positions = getMarkerPositions(width);
    const markers = document.querySelectorAll('button[data-el="marker"]');
    markers.forEach((element, key) => {
      const { top, left } = positions[key];
      const style = `top: ${top}px; left: ${left}px;`;
      element.setAttribute('style', style);
    });
  }, []);

  const showMinutes = selectionMode === Selection.Minutes;
  const multiplier = showMinutes ? 5 : 1;

  return (
    <StyledClock data-el="clock">
      <OuterRing data-el="outer-ring" ref={outerRingRef}>
        <Content data-el="outer-ring-content">
          <Marker
            data-el="marker"
            data-hour={12}
            data-min={0}
            onClick={handleMarkerClick}
          >
            {showMinutes ? '00' : 12}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={1}
            data-min={5}
            onClick={handleMarkerClick}
          >
            {showMinutes ? '05' : 1}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={2}
            data-min={10}
            onClick={handleMarkerClick}
          >
            {2 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={3}
            data-min={15}
            onClick={handleMarkerClick}
          >
            {3 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={4}
            data-min={20}
            onClick={handleMarkerClick}
          >
            {4 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={5}
            data-min={25}
            onClick={handleMarkerClick}
          >
            {5 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={6}
            data-min={30}
            onClick={handleMarkerClick}
          >
            {6 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={7}
            data-min={35}
            onClick={handleMarkerClick}
          >
            {7 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={8}
            data-min={40}
            onClick={handleMarkerClick}
          >
            {8 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={9}
            data-min={45}
            onClick={handleMarkerClick}
          >
            {9 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={10}
            data-min={50}
            onClick={handleMarkerClick}
          >
            {10 * multiplier}
          </Marker>
          <Marker
            data-el="marker"
            data-hour={11}
            data-min={55}
            onClick={handleMarkerClick}
          >
            {11 * multiplier}
          </Marker>
          <HourLabel>
            <HourButton
              active={selectionMode === Selection.Hour}
              onClick={() => setSelectionMode(Selection.Hour)}
            >
              {hours}
            </HourButton>
            <span>:</span>
            <HourButton
              active={selectionMode === Selection.Minutes}
              onClick={() => setSelectionMode(Selection.Minutes)}
            >
              {minutes}
            </HourButton>
            <HourButton onClick={handleMidDayMarkerChange}>
              {midDayMarker}
            </HourButton>
          </HourLabel>
        </Content>
      </OuterRing>
    </StyledClock>
  );
};

export default Clock;
