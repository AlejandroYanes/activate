import React, { CSSProperties, FunctionComponent } from 'react';
import { PositionProps } from 'components/base-components/_base';
import SvgIcon, { IconProps } from 'components/base-components/SvgIcon';
import { IconButton as StyledIconButton } from './styled';

export interface IconButtonProps extends IconProps, PositionProps {
  variant?: 'base' | 'fill' | 'outline';
  color?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
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
    fillColor,
    strokeColor,
    width,
    height,
    iconClassName,
    iconStyle,
    ...rest
  } = props;

  return (
    <StyledIconButton onClick={onClick} {...rest}>
      <SvgIcon
        icon={icon}
        height={height}
        width={width}
        fillColor={fillColor}
        strokeColor={strokeColor}
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
