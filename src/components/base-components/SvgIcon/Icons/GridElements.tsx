/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const GridElementsIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M20 13H15C13.8954 13 13 13.8954 13 15V20C13 21.1046 13.8954 22 15 22H20C21.1046 22 22 21.1046 22 20V15C22 13.8954 21.1046 13 20 13ZM15 20V15H20V20H15ZM11 4V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4ZM9 4H4V20H9V4ZM20 2H15C13.8954 2 13 2.89543 13 4V9C13 10.1046 13.8954 11 15 11H20C21.1046 11 22 10.1046 22 9V4C22 2.89543 21.1046 2 20 2ZM15 9V4H20V9H15Z"
        fill={color}
      />
    </svg>
  );
};

export default GridElementsIcon;
