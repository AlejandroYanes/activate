/* eslint-disable max-len,no-mixed-spaces-and-tabs,no-tabs */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const ShareFilledIcon: FunctionComponent<IconProps> = (props) => {
  const { fillColor, strokeColor, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 98.333 98.333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill={fillColor}
          stroke={strokeColor}
          d="M81.139,64.48c-4.286,0-8.188,1.607-11.171,4.233l-35.919-18.11c0.04-0.475,0.072-0.951,0.072-1.437
		      c0-0.432-0.033-0.856-0.064-1.28l36.024-18.164c2.967,2.566,6.828,4.129,11.058,4.129c9.348,0,16.926-7.579,16.926-16.926
		      C98.064,7.578,90.486,0,81.139,0C71.79,0,64.212,7.578,64.212,16.926c0,0.432,0.033,0.856,0.064,1.28L28.251,36.37
		      c-2.967-2.566-6.827-4.129-11.057-4.129c-9.348,0-16.926,7.578-16.926,16.926c0,9.349,7.578,16.926,16.926,16.926
		      c4.175,0,7.992-1.52,10.944-4.026l36.13,18.217c-0.023,0.373-0.057,0.744-0.057,1.124c0,9.348,7.578,16.926,16.926,16.926
		      s16.926-7.579,16.926-16.926S90.486,64.48,81.139,64.48z"
        />
      </g>
    </svg>
  );
};

export default ShareFilledIcon;
