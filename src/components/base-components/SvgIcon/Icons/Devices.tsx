/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const DevicesIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M3 6V15H1V18C1 19.1046 1.89543 20 3 20H16H21C22.1046 20 23 19.1046 23 18V9C23 7.89543 22.1046 7 21 7V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6ZM19 7V6H5V15H14V9C14 7.89543 14.8954 7 16 7H19ZM3 17H14V18H3V17ZM21 18H16V9H21V18Z"
        fill={color}
      />
    </svg>
  );
};

export default DevicesIcon;
