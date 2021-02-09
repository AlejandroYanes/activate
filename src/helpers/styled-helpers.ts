import { PositionProps } from './common-props';

export function getMargins(props) {
  const { mT, mR, mB, mL } = props as PositionProps;
  const margins = [
    mT ? '1.5rem' : '0',
    mR ? '1.5rem' : '0',
    mB ? '1.5rem' : '0',
    mL ? '1.5rem' : '0',
  ];

  return `margin: ${margins.join(' ')};`;
}

export const anyPropsAttrs = (props: any) => props;
