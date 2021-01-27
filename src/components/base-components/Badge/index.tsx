import React, { FunctionComponent, useMemo } from 'react';
import { PositionProps } from 'helpers';
import { Icons } from 'components/base-components/SvgIcon';
import { StyledBadge, Icon } from './styled';
import { useAppColors } from '../../providers/Theme';
import { ColorScheme } from '../../../styles/colors';

export interface BadgeProps extends PositionProps {
  color: 'brand' | 'info' | 'success' | 'warning' | 'error' | 'light';
  label: string;
  icon?: Icons;
  iconProps?: object;
  sm?: boolean;
}

function resolveIconColor(color: string, Colors: ColorScheme) {
  if (color === 'light') {
    return Colors.FONT;
  }

  return Colors.WHITE;
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const Colors = useAppColors();
  const {
    label,
    color,
    icon,
    iconProps,
    sm,
    ...rest
  } = props;

  const iComponent = useMemo(() => {
    if (icon) {
      return (
        <Icon
          size={sm ? 'small' : 'medium'}
          icon={icon}
          color={resolveIconColor(color, Colors)}
          {...iconProps}
        />
      );
    }

    return null;
  }, [icon, iconProps, color, sm]);

  return (
    <StyledBadge color={color} sm={sm} {...rest}>
      {iComponent}
      <label>{label}</label>
    </StyledBadge>
  );
};

export default Badge;
