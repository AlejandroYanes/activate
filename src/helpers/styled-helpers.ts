import { PositionProps } from './common-props';

export function getPositionStyles(props) {
  const { padding, margin,  mT, mR, mB, mL } = props as PositionProps;
  const margins = !!margin
    ? margin
    :[
      mT ? '1.5rem' : '0',
      mR ? '1.5rem' : '0',
      mB ? '1.5rem' : '0',
      mL ? '1.5rem' : '0',
    ].join(' ');

  const paddings = padding ? `padding: ${padding}` : '';

  return `
    margin: ${margins};
    ${paddings};
  `;
}

export const getEllipsisStyles = (props) => {
  const { ellipsis } = props;

  if (ellipsis) {
    return `
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `;
  }

  return null;
};

export const anyPropsAttrs = (props: any) => props;
