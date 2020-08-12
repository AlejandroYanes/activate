/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const BookmarkFilledIcon: FunctionComponent<IconProps> = (props) => {
  const { color, secondaryColor, height, width, className, style } = props;

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
      <path d="M5.5 5C5.5 3.89543 6.39543 3 7.5 3H16.5C17.6046 3 18.5 3.89543 18.5 5V20.4535C18.5 21.3623 17.3856 21.7999 16.7672 21.1339L12.7328 16.7892C12.3372 16.3631 11.6628 16.3631 11.2672 16.7892L7.23279 21.1339C6.61435 21.7999 5.5 21.3623 5.5 20.4535V5Z" stroke={color} fill={secondaryColor || color} />
    </svg>
  );
};

export default BookmarkFilledIcon;
