/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const MessageIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M3 12C3 8.22876 3 6.34315 4.17157 5.17157C5.34315 4 7.22876 4 11 4H13.5C16.7875 4 18.4312 4 19.5376 4.90796C19.7401 5.07418 19.9258 5.25989 20.092 5.46243C21 6.56878 21 8.21252 21 11.5V11.5C21 14.7875 21 16.4312 20.092 17.5376C19.9258 17.7401 19.7401 17.9258 19.5376 18.092C18.4312 19 16.7875 19 13.5 19H9.30224C8.66763 19 8.35032 19 8.04737 19.0467C7.41251 19.1446 6.81055 19.3939 6.29242 19.7736C6.04518 19.9548 5.82081 20.1792 5.37207 20.6279V20.6279C4.81866 21.1813 4.54195 21.458 4.32073 21.533C3.84595 21.6937 3.3255 21.4781 3.10346 21.0287C3 20.8193 3 20.428 3 19.6454V12Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="11.5" r="0.75" stroke={color} strokeWidth="1.5"/>
      <circle cx="12" cy="11.5" r="0.75" stroke={color} strokeWidth="1.5"/>
      <circle cx="16.5" cy="11.5" r="0.75" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
};

export default MessageIcon;
