/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const UsersIcon: FunctionComponent<IconProps> = (props) => {
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
      <circle cx="9" cy="7" r="4.5" stroke={color} strokeWidth="1.8" />
      <path d="M15 11.5C17.4853 11.5 19.5 9.48528 19.5 7C19.5 4.51472 17.4853 2.5 15 2.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14.5C5 14.5 2 16.5 2 19C2 20.5 5 22 9 22C13 22 16 20.5 16 19C16 16.5 13 14.5 9 14.5Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 14.8884C20.1 15.5875 22 17.158 22 19C22 20.1052 20.1 21.2103 17.5 21.7156" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default UsersIcon;
