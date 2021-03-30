/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const StarIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M11.0825 2.11573C11.4307 1.31285 12.5693 1.31285 12.9174 2.11573L14.9247 6.74463C15.2145 7.41294 15.8447 7.87083 16.5699 7.93993L21.5925 8.41853C22.4637 8.50155 22.8155 9.58442 22.1595 10.1636L18.3775 13.5031C17.8314 13.9852 17.5907 14.7261 17.7491 15.4371L18.8459 20.3618C19.0362 21.216 18.1151 21.8852 17.3615 21.4403L13.0168 18.8753C12.3895 18.505 11.6105 18.505 10.9832 18.8753L6.63851 21.4403C5.88492 21.8852 4.96378 21.216 5.15404 20.3618L6.25094 15.4371C6.4093 14.7261 6.16857 13.9852 5.62253 13.5031L1.84046 10.1636C1.18446 9.58441 1.53631 8.50155 2.40748 8.41853L7.4301 7.93993C8.15525 7.87083 8.78549 7.41294 9.07529 6.74463L11.0825 2.11573Z"
        strokeWidth="1.8"
        stroke={color}
      />
    </svg>
  );
};

export default StarIcon;
