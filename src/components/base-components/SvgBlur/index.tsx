import React from 'react';

const colorMatrix = `
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 30 -15
`;

export default function SvgBlur() {
  return (
    <svg display="none">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="name"
          />
          <feColorMatrix
            in="name"
            mode="matrix"
            values={colorMatrix}
            result="aab"
          />
          <feBlend in="SourceGraphic" in2="aab" />
        </filter>
      </defs>
    </svg>
  );
}
