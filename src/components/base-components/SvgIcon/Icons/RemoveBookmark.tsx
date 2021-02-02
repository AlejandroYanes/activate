/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const RemoveBookmarkIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M2.70706 1.29291L1.29285 2.70712L4.99995 6.41423V22.618L12 19.118L19 22.618V20.4142L21.2928 22.7071L22.7071 21.2929L2.70706 1.29291ZM17 18.4142L6.99995 8.41423V19.382L12 16.882L17 19.382V18.4142ZM17 4.00001V12.7858L19 14.7858V4.00001C19 2.89544 18.1045 2.00001 17 2.00001H6.99995C6.76473 2.00001 6.53899 2.04062 6.32936 2.11521L8.21417 4.00001H17Z"
        fill={color}
      />
    </svg>
  );
};

export default RemoveBookmarkIcon;
