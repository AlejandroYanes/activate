import React, { FunctionComponent, useMemo } from 'react';
import { PositionProps } from 'helpers';
import { IconProps, Icons } from 'components/base-components/SvgIcon';
import { Icon, StyledBadge } from './styled';

export interface BadgeProps extends PositionProps {
  color: 'brand' | 'info' | 'success' | 'warning' | 'error' | 'light';
  label: string;
  icon?: Icons;
  iconProps?: IconProps;
  sm?: boolean;
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
          color={color === 'light' ? 'FONT' : 'WHITE'}
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
