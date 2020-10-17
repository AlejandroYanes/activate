import React, { FunctionComponent, ReactNode } from 'react';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

interface Props {
  icon?: Icons | ReactNode;
  variant?: 'base' | 'fill' | 'flat';
  color?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
  isHovered: boolean;
  sm: boolean;
}

function resolveIconColor(variant, color, isHovered) {
  const darkColorHash = Colors[`${color.toUpperCase()}_DARK`];
  const fontColor = color === 'white' ? Colors.DARK : Colors.WHITE;

  if (variant === 'fill') {
    return fontColor;
  }

  if (variant === 'flat') {
    return isHovered ? darkColorHash : Colors.DARK;
  }

  return isHovered ? darkColorHash : Colors.DARK;
}

const IconNode: FunctionComponent<Props> = (props): any => {
  const { icon, color, variant, isHovered, sm } = props;

  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return (
      <SvgIcon
        size={sm ? 'small' : 'medium'}
        icon={icon as Icons}
        color={resolveIconColor(variant, color, isHovered)}
      />
    );
  }

  return icon;
};

export default IconNode;
