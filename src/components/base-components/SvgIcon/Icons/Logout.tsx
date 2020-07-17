/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const LogoutIcon: FunctionComponent<IconProps> = (props) => {
  const { strokeColor, fillColor, height, width, className, style } = props;

  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 471.2 471.2"
      className={className}
      style={style}
      height={height}
      width={width}
      fill={fillColor}
      stroke={strokeColor}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            stroke={strokeColor}
            d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
  s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
  S235.019,444.2,227.619,444.2z"
          />
          <path
            stroke={strokeColor}
            d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
  s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
  C455.319,239.9,455.319,231.3,450.019,226.1z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoutIcon;
