/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const LockIcon: FunctionComponent<IconProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7V10H6C4.93165 10 4 10.7764 4 11.8333V20.1667C4 21.2236 4.93165 22 6 22H18C19.0684 22 20 21.2236 20 20.1667V11.8333C20 10.7764 19.0684 10 18 10H17V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7ZM15 7V10H9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM6 20V12H18V20H6ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
        fill={color}
      />
    </svg>
  );
};

export default LockIcon;
