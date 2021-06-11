import React, { CSSProperties, FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import SvgIcon, { IconProps } from 'components/base-components/SvgIcon';
import { StyledIconButton } from './styled';
import { useAppColors } from '../../providers/Theme';

interface Props extends IconProps, PositionProps {
  variant?: 'text' | 'flat' | 'outline' | 'fill';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'background';
  size?: 'small' | 'medium' | 'large' | 'x-large';
  onClick: (event) => void;
  iconClassName?: string;
  iconStyle?: CSSProperties;
  toggle?: boolean;
}

const IconButton: FunctionComponent<Props> = (props) => {
  const {
    onClick,
    icon,
    color,
    size,
    ...rest
  } = props;
  const colors = useAppColors();
  const iconColor = colors[`${color.toUpperCase()}_FONT`];

  return (
    <StyledIconButton
      type="button"
      onClick={onClick}
      color={color}
      size={size}
      {...rest}
    >
      <SvgIcon icon={icon} size={size} color={iconColor} />
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  variant: 'flat',
  color: 'background',
  size: 'medium',
};

export default IconButton;
