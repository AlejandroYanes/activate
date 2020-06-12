import React, { CSSProperties, FunctionComponent, useMemo } from 'react';
import RainbowButtonIcon, { ButtonIconProps } from 'react-rainbow-components/components/ButtonIcon';
import SvgIcon from '../SvgIcon';
import { Icons } from '../SvgIcon/Icons';
import { IconProps } from '../SvgIcon/icon-props';
import './styles.scss';

interface Props extends ButtonIconProps, IconProps {
  icon: Icons;
  onClick: (event) => void;
  iconClassName?: string;
  iconStyle?: CSSProperties;
}

const IconButton: FunctionComponent<Props> = (props) => {
  const {
    icon: iconName,
    fillColor,
    strokeColor,
    height,
    width,
    iconClassName,
    iconStyle,
    ...buttonProps
  } = props;

  const icon = useMemo(
    () => (
      <SvgIcon
        icon={iconName}
        fillColor={fillColor}
        strokeColor={strokeColor}
        height={height}
        width={width}
        className={iconClassName}
        style={iconStyle}
      />
    ),
    [iconName, fillColor, strokeColor, height, width, iconClassName, iconStyle],
  );

  return (
    <RainbowButtonIcon {...buttonProps} icon={icon} />
  );
};

IconButton.defaultProps = {
  variant: 'base',
};

export default IconButton;
