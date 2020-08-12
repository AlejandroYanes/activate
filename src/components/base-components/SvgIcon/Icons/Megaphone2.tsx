/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const Megaphone2Icon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // enableBackground="new 0 0 511.999 511.999"
      viewBox="0 0 600 600"
      height={height + 20}
      width={width + 20}
      className={className}
      style={style}
    >
      <path
        fill={color}
        d="m 335.29118,308.12482 c -0.0351,4.09335 3.33088,7.44506 7.52155,7.48147 4.19067,0.0378 7.61595,-3.25167 7.65032,-7.34573 l 1.67725,-192.99459 c 0.0359,-4.09543 -3.33299,-7.44436 -7.52156,-7.48145 -4.19066,-0.0378 -7.61594,3.25165 -7.65032,7.34573 l -0.0289,3.36357 -40.98856,16.24169 c -0.46453,-3.63011 -3.60979,-6.45768 -7.45495,-6.49171 -4.19066,-0.0378 -7.61591,3.25167 -7.65037,7.34573 l -0.0442,5.14883 -31.9327,12.65254 -80.53953,-0.72084 c -11.856,-0.10637 -21.58287,9.23353 -21.68384,20.82015 l -0.0122,1.41618 -7.58381,-0.0679 -8e-5,-0.0267 c 0.0352,-4.09475 -3.33233,-7.44507 -7.52157,-7.48146 -4.19066,-0.0378 -7.6159,3.25167 -7.65037,7.34571 l -0.006,0.69481 c -16.46876,3.02718 -29.030372,17.11234 -29.177722,34.09804 -0.0837,9.65808 3.85938,18.44935 10.296512,24.85096 4.88318,4.85622 11.20312,8.32986 18.28522,9.76271 l -0.006,0.6948 c -0.0176,2.04808 0.81551,3.90865 2.17726,5.26289 1.36104,1.35354 3.25076,2.20074 5.34501,2.21929 4.19066,0.0378 7.61592,-3.25167 7.65038,-7.34573 l -8e-5,-0.0267 7.58381,0.0679 -0.0129,1.41547 c -0.0505,5.79541 2.31479,11.06905 6.17663,14.90958 3.85903,3.83772 9.21462,6.24235 15.1412,6.29484 l 1.4863,0.0132 -0.24038,27.73144 c -0.0365,4.08633 3.32375,7.44358 7.52157,7.48145 4.18923,0.0378 7.61519,-3.25098 7.65036,-7.34572 l 0.24109,-27.73213 33.97448,0.30363 -0.18925,21.69695 c -6.3e-4,0.16149 -0.0999,0.3095 -0.24926,0.37671 l -10.44642,4.67224 c -5.47813,2.45061 -9.04944,7.83806 -9.10002,13.72644 l -0.26376,30.37015 c -0.0238,2.69045 -2.28225,4.85911 -5.03508,4.83411 l -4.35659,-0.0393 c -2.7523,-0.0244 -4.97436,-2.23422 -4.94912,-4.92462 l 0.11791,-13.64099 c 0.0337,-4.09475 -3.33378,-7.44368 -7.523,-7.48148 -4.19067,-0.0364 -7.6152,3.25238 -7.65038,7.34713 l -0.11716,13.64029 c -0.0948,10.86246 8.87218,19.78978 19.99365,19.88756 l 4.35659,0.0393 c 11.11859,0.0991 20.24247,-8.66029 20.33654,-19.52625 l 0.26448,-30.37085 c 6.3e-4,-0.16148 0.0992,-0.30879 0.24859,-0.37598 l 10.44714,-4.67295 c 5.47742,-2.45131 9.05016,-7.83874 9.10002,-13.72643 l 0.18852,-21.69626 14.73562,0.13188 31.704,13.22092 -0.0442,5.15023 c -0.0351,4.09335 3.33088,7.44505 7.52156,7.48145 3.84595,0.0348 7.0407,-2.73664 7.56751,-6.35798 l 40.6989,16.97198 z M 211.08428,182.16983 c -0.001,1.1e-4 -0.001,1.1e-4 0,0 l -18.74747,-0.16811 c -2.69506,-0.0239 -4.84683,-2.17363 -4.82429,-4.79907 l 0.0826,-9.53087 28.47848,0.25496 -0.084,9.53226 c -0.0212,2.63245 -2.22037,4.73452 -4.90527,4.71083 z m -101.2184,27.43359 c 0.047,-5.39419 2.24066,-10.4471 6.17727,-14.22628 2.2157,-2.12787 4.84355,-3.68655 7.69447,-4.65257 l -0.32996,37.99414 C 115.45594,225.8458 109.7893,218.3507 109.86588,209.60342 Z m 36.28791,20.52187 -7.58382,-0.0679 0.35055,-40.39171 7.58382,0.0678 c -0.12279,14.12679 -0.22849,26.26423 -0.35055,40.39172 z m 15.03095,16.3791 c 0.17245,-19.90752 0.53382,-61.39246 0.63321,-72.87913 0.03,-3.40902 2.89297,-6.15809 6.3824,-6.12801 l 4.22213,0.0381 -0.0826,9.53226 c -0.0943,10.81214 8.79242,19.66673 19.86883,19.76342 l 18.74605,0.16669 c 11.07497,0.0995 20.11589,-8.57893 20.20887,-19.40365 l 0.0826,-9.53226 11.42401,0.10255 -0.73947,85.24725 -65.38405,-0.58454 c -0.005,-1.4e-4 -0.0106,-0.001 -0.0152,-3.8e-4 -0.004,-1.1e-4 -0.01,0.002 -0.015,6.8e-4 l -9.05726,-0.0809 c -3.49113,-0.0316 -6.30399,-2.83176 -6.27469,-6.24149 z m 95.89604,9.5111 c 0.0935,-10.71985 0.68943,-79.42318 0.78259,-90.18428 l 22.79575,-9.03265 -0.94412,108.65605 z m 37.75533,15.74357 1.05075,-120.99412 40.91181,-16.21089 -1.33851,154.14626 z"
      />
    </svg>
  );
};

export default Megaphone2Icon;
