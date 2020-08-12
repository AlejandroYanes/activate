/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const MapPinIcon: FunctionComponent<IconProps> = (props) => {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13 11.9V19H11V11.9C8.71776 11.4367 7 9.41896 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.41896 15.2822 11.4367 13 11.9ZM9 14.1573V16.1844C6.06718 16.5505 4 17.3867 4 18C4 18.807 7.57914 20 12 20C16.4209 20 20 18.807 20 18C20 17.3867 17.9328 16.5505 15 16.1844V14.1573C19.0559 14.6017 22 15.9678 22 18C22 20.5068 17.5203 22 12 22C6.47973 22 2 20.5068 2 18C2 15.9678 4.94412 14.6017 9 14.1573ZM15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z" fill={color} />
    </svg>
  );
};

export default MapPinIcon;
