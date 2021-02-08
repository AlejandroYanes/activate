/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const AddUserIcon: FunctionComponent<IconProps> = (props) => {
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
      <circle cx="12" cy="6.5" r="4" stroke={color} strokeWidth="1.8"/>
      <path d="M6 14V18M6 22V18M6 18H10M6 18H2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.5 18C18.5 18 17 14 12 14C11.0825 14 10.2491 14.1347 9.5 14.3546" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
};

export default AddUserIcon;
