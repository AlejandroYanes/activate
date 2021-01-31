/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const SettingsIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M21 17.1984V6.80614L12 1.60999L3 6.80614V17.1984L12 22.3946L21 17.1984ZM5 7.96084L12 3.91939L19 7.96084V16.0437L12 20.0852L5 16.0437V7.96084ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23856 9.23858 6.99999 12 6.99999C14.7614 6.99999 17 9.23856 17 12C17 14.7614 14.7614 17 12 17ZM15 12C15 13.6568 13.6569 15 12 15C10.3431 15 9 13.6568 9 12C9 10.3431 10.3431 8.99999 12 8.99999C13.6569 8.99999 15 10.3431 15 12Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingsIcon;
