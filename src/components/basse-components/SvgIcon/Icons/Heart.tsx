import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const HeartIcon: FunctionComponent<IconProps> = (props) => {
  const { strokeColor, height, width, className, style } = props;

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
        d="M11.9996 21.0541C-8 10 5.99999 -2 11.9996 5.58806C18 -2 32 10 11.9996 21.0541Z"
        stroke={strokeColor}
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default HeartIcon;
