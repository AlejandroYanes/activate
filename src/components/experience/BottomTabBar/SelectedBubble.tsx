/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';

interface Props {
  className?: string;
}

const SelectedBubble: FunctionComponent<Props> = (props: Props) => {
  const Colors = useAppColors();
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="90"
      height="78"
      viewBox="0 0 23.8125 20.6375"
      version="1.1"
      id="svg8"
      // layoutId="bottom_tab_bar-mark"
      // initial={false}
      // transition={spring}
    >
      <defs
        id="defs2"
      >
        <rect
          x="39.23127"
          y="11.649344"
          width="109.4182"
          height="16.331228"
          id="rect39"
        />
        <rect
          x="140.24239"
          y="-24.853977"
          width="121.91249"
          height="15.266728"
          id="rect996"
        />
        <rect
          x="158.66101"
          y="-18.898878"
          width="39.567375"
          height="12.950044"
          id="rect986"
        />
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        />
      </defs>
      <g>
        <path
          fill={Colors.BRAND}
          fillOpacity={1}
          stroke="none"
          strokeWidth={0.18199}
          strokeOpacity={1}
          d="m 15.90092,0 c 0,0 0.22998,4.025068 -0.88293,5.266361 -2.45951,2.743207 -8.28694,0 -10.43495,0 C 2.02786,5.266361 0,7.528337 0,10.31875 c 0,2.790414 2.02786,5.05239 4.58304,5.05239 2.14801,0 7.97544,-2.743209 10.43495,0 1.11291,1.241293 0.88293,5.26636 0.88293,5.26636 H 23.8125 V 10.31875 0 Z"
        />
      </g>
    </svg>
  );
};

export default SelectedBubble;
