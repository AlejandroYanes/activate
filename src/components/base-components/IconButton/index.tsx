import React, { CSSProperties, FunctionComponent } from 'react';
import SvgIcon from '../SvgIcon';
import { IconProps } from '../SvgIcon/icon-props';
import { IconButton as StyledIconButton } from './styled';

export interface IconButtonProps extends IconProps {
  variant?: 'base' | 'fill' | 'outline';
  color?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
  onClick: (event) => void;
  mT?: boolean;
  mR?: boolean;
  mB?: boolean;
  mL?: boolean;
  sm?: boolean;
  iconClassName?: string;
  iconStyle?: CSSProperties;
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
