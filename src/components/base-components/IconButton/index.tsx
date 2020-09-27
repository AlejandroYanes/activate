import React, { CSSProperties, FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import SvgIcon, { IconProps } from 'components/base-components/SvgIcon';
import { StyledIconButton } from './styled';

export interface IconButtonProps extends IconProps, PositionProps {
  variant?: 'base' | 'fill' | 'outline';
  buttonColor?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
  onClick: (event) => void;
  sm?: boolean;
  iconClassName?: string;
  iconStyle?: CSSProperties;
  toggle?: boolean;
}

const IconButton: FunctionComponent<IconButtonProps> = (props) => {
  const {
    onClick,
    icon,
    secondaryColor,
    color,
    width,
    height,
    iconClassName,
    iconStyle,
    buttonColor,
    ...rest
  } = props;

  return (
    <StyledIconButton onClick={onClick} color={buttonColor} {...rest}>
      <SvgIcon
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
  variant: 'base',
  color: 'brand',
};

export default IconButton;
