import React, { CSSProperties, FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import SvgIcon, { IconProps } from 'components/base-components/SvgIcon';
import { StyledIconButton } from './styled';

export interface IconButtonProps extends IconProps, PositionProps {
  variant?: 'base' | 'flat' | 'fill';
  buttonColor?: (
    'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'font' | 'background'
  );
  size?: 'small' | 'medium' | 'large' | 'x-large';
  onClick: (event) => void;
  iconClassName?: string;
  iconStyle?: CSSProperties;
  toggle?: boolean;
}

const IconButton: FunctionComponent<IconButtonProps> = (props) => {
  const {
    onClick,
    icon,
    width,
    height,
    iconClassName,
    iconStyle,
    buttonColor,
    color,
    secondaryColor,
    size,
    ...rest
  } = props;

  return (
    <StyledIconButton
      type="button"
      onClick={onClick}
      color={buttonColor}
      size={size}
      {...rest}
    >
      <SvgIcon
        size={size}
        icon={icon}
        height={height}
        width={width}
        color={color}
        secondaryColor={secondaryColor}
        className={iconClassName}
        style={iconStyle}
      />
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  variant: 'flat',
  buttonColor: 'brand',
  size: 'medium',
};

export default IconButton;
