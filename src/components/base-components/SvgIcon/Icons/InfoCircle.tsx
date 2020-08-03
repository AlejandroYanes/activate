/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const InfoCircleIcon: FunctionComponent<IconProps> = (props) => {
  const { fillColor, strokeColor, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      height={height}
      width={width}
      viewBox="0 0 24 24"
      version="1.1"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="12" cy="12" r="10" stroke={strokeColor} strokeWidth="1.8" />
      <path d="M13.5439 6.43701C13.5329 6.6307 13.4941 6.81055 13.4277 6.97656C13.3613 7.14258 13.27 7.28923 13.1538 7.4165C13.0376 7.54378 12.8993 7.64339 12.7388 7.71533C12.5783 7.78727 12.404 7.82324 12.2158 7.82324C12.0221 7.82324 11.8451 7.78727 11.6846 7.71533C11.5296 7.64339 11.3968 7.54378 11.2861 7.4165C11.1755 7.28923 11.0897 7.14258 11.0288 6.97656C10.9735 6.81055 10.9513 6.6307 10.9624 6.43701C10.9735 6.24333 11.0177 6.06071 11.0952 5.88916C11.1782 5.71761 11.2806 5.5682 11.4023 5.44092C11.5296 5.31364 11.6735 5.21403 11.834 5.14209C11.9945 5.07015 12.1605 5.03418 12.332 5.03418C12.5146 5.03418 12.6834 5.07015 12.8384 5.14209C12.9933 5.21403 13.1234 5.31364 13.2285 5.44092C13.3392 5.5682 13.4222 5.71761 13.4775 5.88916C13.5329 6.06071 13.555 6.24333 13.5439 6.43701ZM13.3032 11.2847C13.3032 11.4673 13.2894 11.6997 13.2617 11.9819C13.2396 12.2586 13.2064 12.5575 13.1621 12.8784C13.1234 13.1994 13.0819 13.5286 13.0376 13.8662C12.9933 14.1982 12.9491 14.5137 12.9048 14.8125C12.866 15.1113 12.8328 15.3797 12.8052 15.6177C12.783 15.8556 12.772 16.0382 12.772 16.1655C12.772 16.3537 12.7996 16.4754 12.855 16.5308C12.9103 16.5861 12.9684 16.6138 13.0293 16.6138C13.1566 16.6138 13.2894 16.5169 13.4277 16.3232C13.5661 16.124 13.7072 15.7699 13.8511 15.2607L14.7725 15.5347C14.7227 15.7782 14.6313 16.0549 14.4985 16.3647C14.3713 16.6691 14.1997 16.9569 13.9839 17.228C13.7681 17.4992 13.5107 17.7288 13.2119 17.917C12.9131 18.0996 12.5728 18.1909 12.1909 18.1909C11.8755 18.1909 11.6126 18.1466 11.4023 18.0581C11.1976 17.9751 11.0316 17.8506 10.9043 17.6846C10.7826 17.5186 10.694 17.3166 10.6387 17.0786C10.5889 16.8407 10.564 16.5723 10.564 16.2734C10.564 16.0521 10.5778 15.8003 10.6055 15.5181C10.6331 15.2358 10.6663 14.9425 10.7051 14.6382C10.7438 14.3283 10.7881 14.0184 10.8379 13.7085C10.8877 13.3931 10.932 13.0887 10.9707 12.7954C11.0094 12.5021 11.0426 12.231 11.0703 11.9819C11.098 11.7274 11.1118 11.5116 11.1118 11.3345C11.1118 11.1463 11.0841 11.0246 11.0288 10.9692C10.9735 10.9139 10.9154 10.8862 10.8545 10.8862C10.7272 10.8862 10.5944 10.9858 10.4561 11.1851C10.3177 11.3787 10.1766 11.7301 10.0327 12.2393L9.11133 11.9653C9.16113 11.7218 9.25244 11.4479 9.38525 11.1436C9.51807 10.8337 9.69515 10.5431 9.9165 10.272C10.1379 10.0008 10.4007 9.77393 10.7051 9.59131C11.0094 9.40316 11.3525 9.30908 11.7344 9.30908C12.0277 9.30908 12.2739 9.35612 12.4731 9.4502C12.6724 9.54427 12.8328 9.67708 12.9546 9.84863C13.0819 10.0202 13.1704 10.2277 13.2202 10.4712C13.2756 10.7147 13.3032 10.9858 13.3032 11.2847Z" fill={strokeColor} />
    </svg>
  );
};

export default InfoCircleIcon;
