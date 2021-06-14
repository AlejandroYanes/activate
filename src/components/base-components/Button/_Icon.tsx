import React, { FunctionComponent, ReactNode } from 'react';
import { ColorScheme } from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

interface Props {
  icon?: Icons | ReactNode;
  variant?: 'text' | 'outline' | 'fill' | 'flat';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'background';
  isHovered: boolean;
  sm: boolean;
}

function resolveIconColor(
  variant: string,
  color: string,
  isHovered: boolean,
  colors: ColorScheme,
) {
  if (variant === 'fill') {
    return colors.WHITE;
  }

  const colorHash = colors[`${color.toUpperCase()}_FONT_HIGHLIGHT`];

  if (variant === 'flat') {
    return isHovered ? colorHash : colors.FONT;
  }

  return isHovered ? colorHash : colors.FONT;
}

const IconNode: FunctionComponent<Props> = (props): any => {
  const { icon, color, variant, isHovered, sm } = props;
  const { colors } = useAppTheme();

  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return (
      <SvgIcon
        size={sm ? 'small' : 'medium'}
        icon={icon as Icons}
        color={resolveIconColor(variant, color, isHovered, colors)}
      />
    );
  }

  return icon;
};

export default IconNode;
