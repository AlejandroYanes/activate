/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const CalendarFilledIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round">
        <path d="M20.5 8H3.5M4 7H20M20 6H4M6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21Z" />
        <path d="M7.5 6.75V2.75" strokeLinejoin="round" />
        <path d="M16.5 6.75V2.75" strokeLinejoin="round" />
        <path d="M8.25 17.5H6.75M8.25 14.5H6.75M8.25 11.5H6.75M12.75 17.5H11.25M12.75 14.5H11.25M12.75 11.5H11.25M17.25 17.5H15.75M17.25 14.5H15.75M17.25 11.5H15.75" />
      </g>
    </svg>
  );
};

export default CalendarFilledIcon;
