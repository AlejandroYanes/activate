/* eslint-disable max-len,react/style-prop-object */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const CommentsIcon: FunctionComponent<IconProps> = (props) => {
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
      <g>
        <path
          id="path956"
          fill="none"
          stroke={color}
          strokeWidth={1.76933}
          strokeMiterlimit={4}
          strokeDasharray="none"
          d="M 13.059353,17.311109 H 17.9324 c 0.403716,0 0.728729,-0.295669 0.728729,-0.662936 V 6.1567834 c 0,-0.3672665 -0.325013,-0.662936 -0.728729,-0.662936 H 2.6897192 v 0 c -0.403716,0 -0.7287291,0.2956695 -0.7287291,0.662936 V 16.648173 c 0,0.367267 0.3250131,0.662936 0.7287291,0.662936 h 1.7530206 1.1664364 0.3745232 v 0.424584 1.198274 2.800369 z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={2.02599}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
          d="M 4.5789312,9.7177163 H 16.471232"
          id="path961"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth={2.02599}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
          d="M 4.622892,13.397475 H 16.515193"
          id="path965"
        />
        <path
          id="path970"
          fill="none"
          stroke={color}
          strokeWidth={1.76933}
          strokeMiterlimit={4}
          strokeDasharray="none"
          d="m 21.825276,13.61494 h 0.148481 c 0.403717,0 0.728729,-0.295669 0.728729,-0.662936 V 2.4606152 c 0,-0.367267 -0.325012,-0.662936 -0.728729,-0.662936 H 6.7310769 v 0 c -0.403716,0 -0.72873,0.295669 -0.72873,0.662936 V 2.681333"
        />
      </g>
    </svg>
  );
};

export default CommentsIcon;
