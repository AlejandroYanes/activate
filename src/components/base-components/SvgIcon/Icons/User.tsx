/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const UserIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 42 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M31.5909 12.3287C31.5909 18.3368 26.8218 23.1573 21 23.1573C15.1782 23.1573 10.4091 18.3368 10.4091 12.3287C10.4091 6.32048 15.1782 1.5 21 1.5C26.8218 1.5 31.5909 6.32048 31.5909 12.3287Z" stroke={color} strokeWidth="3.5" />
      <path d="M40.5 43.3527C40.5 46.1224 39.9501 48.0218 39.0893 49.3561C38.2387 50.6745 36.9922 51.5844 35.3206 52.214C33.6222 52.8536 31.5293 53.186 29.0749 53.3488C26.7767 53.5012 24.2559 53.5006 21.5447 53.4999C21.364 53.4998 21.1824 53.4998 21 53.4998C20.8176 53.4998 20.636 53.4998 20.4553 53.4999C17.7441 53.5006 15.2233 53.5012 12.9251 53.3488C10.4707 53.186 8.37776 52.8536 6.67944 52.214C5.00779 51.5844 3.76132 50.6745 2.91072 49.3561C2.0499 48.0218 1.5 46.1224 1.5 43.3527C1.5 32.3073 10.26 23.4073 21 23.4073C31.74 23.4073 40.5 32.3073 40.5 43.3527Z" stroke={color} strokeWidth="3.5" />
    </svg>
  );
};

export default UserIcon;
