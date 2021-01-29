import { ThemedStyledFunction } from 'styled-components';
import { PositionProps } from './common-props';

export function getMargins(props) {
  const { mT, mR, mB, mL } = props as PositionProps;
  const margins = [
    mT ? '1rem' : '0',
    mR ? '1rem' : '0',
    mB ? '1rem' : '0',
    mL ? '1rem' : '0',
  ];

  return `margin: ${margins.join(' ')};`;
}

export function allowAnyProps(
  styledElement: ThemedStyledFunction<any, any>,
): ThemedStyledFunction<any, any> {
  return styledElement.attrs((props: any) => props);
}

export const anyPropsAttrs = (props: any) => props;
