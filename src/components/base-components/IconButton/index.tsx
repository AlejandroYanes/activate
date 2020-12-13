import React, { CSSProperties, FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import SvgIcon, { IconProps } from 'components/base-components/SvgIcon';
import { StyledIconButton } from './styled';
import Colors from '../../../styles/colors';

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
    width,
    height,
    iconClassName,
    iconStyle,
    buttonColor,
    ...rest
  } = props;

  return (
    <StyledIconButton type="button" onClick={onClick} color={buttonColor} {...rest}>
      <SvgIcon
        icon={icon}
        height={height}
        width={width}
        color={Colors[buttonColor.toUpperCase()]}
        className={iconClassName}
        style={iconStyle}
      />
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  variant: 'base',
  buttonColor: 'brand',
};

export default IconButton;
