/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const EditPenIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M22 20V13H20V20H4V4H11V2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20ZM19.1781 2.72342C18.7197 2.26142 18.0921 2 17.4374 2C16.7834 2 16.1564 2.26083 15.6954 2.72463L7.3265 11.0934C6.57867 11.7523 6.08844 12.7328 6.00325 13.7873L6 17.0023V18.0023H10.1346C11.2689 17.9245 12.259 17.4295 12.9575 16.6238L21.279 8.30584C21.7407 7.84416 22.0001 7.21799 22.0001 6.56508C22.0001 5.91217 21.7407 5.286 21.279 4.82432L19.1781 2.72342ZM10.064 16.0048C10.5982 15.967 11.0955 15.7184 11.4948 15.2616L17.5567 9.19972L14.8024 6.44527L8.6961 12.5496C8.29095 12.9079 8.04031 13.4092 8 13.8678V16.0029L10.064 16.0048ZM16.2169 5.03128L18.9709 7.78551L19.8648 6.89162C19.9514 6.80502 20.0001 6.68756 20.0001 6.56508C20.0001 6.4426 19.9514 6.32514 19.8648 6.23854L17.7611 4.13486C17.6755 4.04855 17.5589 4 17.4374 4C17.3158 4 17.1992 4.04855 17.1136 4.13486L16.2169 5.03128Z"
        fill={color}
      />
    </svg>
  );
};

export default EditPenIcon;
