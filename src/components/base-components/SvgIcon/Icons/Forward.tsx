/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const ForwardIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M12 2.79623V8.02302C5.45134 8.33141 2 11.7345 2 18V20.4142L3.70711 18.7071C5.95393 16.4603 8.69021 15.5189 12 15.8718V21.2038L22.5186 12L12 2.79623ZM14 10V7.20377L19.4814 12L14 16.7962V14.1529L13.1644 14.0136C9.74982 13.4445 6.74443 14.0145 4.20125 15.7165C4.94953 11.851 7.79936 10 13 10H14Z"
        fill={color}
      />
    </svg>
  );
};

export default ForwardIcon;
