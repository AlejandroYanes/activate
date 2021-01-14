import React, { FunctionComponent, useMemo } from 'react';
import Colors from 'styles/colors';
import { PositionProps } from 'helpers';
import { Icons } from 'components/base-components/SvgIcon';
import { StyledBadge, Icon } from './styled';

export interface BadgeProps extends PositionProps {
  color: 'brand' | 'info' | 'success' | 'warning' | 'error' | 'light';
  label: string;
  icon?: Icons;
  iconProps?: object;
  sm?: boolean;
}

function resolveIconColor(color: string) {
  if (color === 'light') {
    return Colors.DARK;
  }

  return Colors.WHITE;
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
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
          color={resolveIconColor(color)}
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
