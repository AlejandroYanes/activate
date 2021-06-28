import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Icons } from 'components/base-components/SvgIcon';
import { Icon, StyledBadge } from './styled';

export interface BadgeProps extends PositionProps {
  color: 'brand' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'light';
  label: string;
  icon?: Icons;
  sm?: boolean;
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const {
    label,
    color,
    icon,
    sm,
    ...rest
  } = props;

  return (
    <StyledBadge color={color} sm={sm} {...rest}>
      <Icon
        size={sm ? 'small' : 'medium'}
        icon={icon}
        color={color === 'light' ? 'FONT' : 'WHITE'}
      />
      <label>{label}</label>
    </StyledBadge>
  );
};

export default Badge;
