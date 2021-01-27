import React, { FunctionComponent, ReactNode } from 'react';
import { ColorScheme } from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

interface Props {
  icon?: Icons | ReactNode;
  variant?: 'base' | 'fill' | 'flat';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'font';
  colors: ColorScheme;
  useDarkStyle: boolean;
  isHovered: boolean;
  sm: boolean;
}

function resolveIconColor(
  variant: string,
  color: string,
  isHovered: boolean,
  colors: ColorScheme,
  useDarkStyle: boolean,
) {
  const colorHash = useDarkStyle
    ? colors[`${color.toUpperCase()}`]
    : colors[`${color.toUpperCase()}_DARK`];
  const fontColor = color === 'font' ? colors.FONT : colors.WHITE;

  if (variant === 'fill') {
    return fontColor;
  }

  if (variant === 'flat') {
    return isHovered ? colorHash : colors.FONT;
  }

  return isHovered ? colorHash : colors.FONT;
}

const IconNode: FunctionComponent<Props> = (props): any => {
  const { icon, color, colors, useDarkStyle, variant, isHovered, sm } = props;

  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return (
      <SvgIcon
        size={sm ? 'small' : 'medium'}
        icon={icon as Icons}
        color={resolveIconColor(variant, color, isHovered, colors, useDarkStyle)}
      />
    );
  }

  return icon;
};

export default IconNode;
