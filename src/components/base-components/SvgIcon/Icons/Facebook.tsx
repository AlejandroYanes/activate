/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const FacebookIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      width={width}
      height={height}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7,12h3.2v10h3.4V12H17V8.7h-3.4V7c0-0.9,0.8-1.7,1.7-1.7H17V2h-1.7c-2.8,0-5.1,2.2-5.1,5v1.7H7V12z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
