/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const UnlockIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M7 11V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8H15V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V11H18C19.1046 11 20 11.8954 20 13V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V13C4 11.8954 4.89543 11 6 11H7ZM6 21V13H18V21H6ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
        fill={color}
      />
    </svg>
  );
};

export default UnlockIcon;
