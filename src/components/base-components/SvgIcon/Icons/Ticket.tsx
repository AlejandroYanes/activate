/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const TicketIcon: FunctionComponent<IconProps> = (props) => {
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
      <path
        transform="rotate(90,12,12)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V14.8881L1.49927 14.5993C2.42113 14.066 3 13.084 3 12C3 10.916 2.42113 9.934 1.49927 9.40073L1 9.11192V6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V9.11192L22.5007 9.40073C21.5789 9.934 21 10.916 21 12C21 13.084 21.5789 14.066 22.5007 14.5993L23 14.8881V18ZM19 12C19 10.3995 19.759 8.93039 21 7.99947V6H15C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6H3V7.99947C4.24101 8.93039 5 10.3995 5 12C5 13.6005 4.24101 15.0696 3 16.0005V18H13C13 17.4477 13.4477 17 14 17C14.5523 17 15 17.4477 15 18H21V16.0005C19.759 15.0696 19 13.6005 19 12ZM14 16C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16ZM15 12C15 12.5523 14.5523 13 14 13C13.4477 13 13 12.5523 13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12ZM14 10C14.5523 10 15 9.55228 15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9C13 9.55228 13.4477 10 14 10Z"
        fill={color}
      />
    </svg>
  );
};

export default TicketIcon;
