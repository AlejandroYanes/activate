import { PositionProps } from './common-props';

export const getMargins = (props) => {
  const { mT, mR, mB, mL } = props as PositionProps;
  const margins = [
    mT ? '1rem' : '0',
    mR ? '1rem' : '0',
    mB ? '1rem' : '0',
    mL ? '1rem' : '0',
  ];

  return `margin: ${margins.join(' ')};`;
};
