import React, { FunctionComponent, ReactNode, useMemo, useRef } from 'react';
import { PositionProps } from 'helpers';
import { useHoverState } from 'hooks/UI';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { useAppTheme } from 'components/providers/Theme';
import IconNode from './Icon';
import Content from './Content';
import { Button as StyledButton } from './styled';

export interface ButtonProps extends PositionProps {
  label?: string | number;
  onClick: (event) => void;
  leftIcon?: Icons | ReactNode;
  rightIcon?: Icons | ReactNode;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'base' | 'fill' | 'flat';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'font';
  align?: 'start' | 'center' | 'end';
  sm?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { colors, useDarkStyle } = useAppTheme();
  const {
    label,
    onClick,
    leftIcon,
    rightIcon,
    isLoading,
    children,
    variant,
    color,
    sm,
    ...rest
  } = props;
  const buttonReference = useRef(undefined);
  const isHovered = useHoverState(buttonReference);

  const leftIconNode = useMemo(() => (
    <IconNode
      isHovered={isHovered}
      variant={variant}
      icon={leftIcon}
      color={color}
      colors={colors}
      useDarkStyle={useDarkStyle}
      sm={sm}
    />
  ), [leftIcon, isHovered, variant, color, sm]);

  const rightIconNode = useMemo(() => (
    <IconNode
      isHovered={isHovered}
      variant={variant}
      icon={rightIcon}
      color={color}
      colors={colors}
      useDarkStyle={useDarkStyle}
      sm={sm}
    />
  ), [rightIcon, isHovered, variant, color, sm]);

  return (
    <StyledButton
      ref={buttonReference}
      onClick={onClick}
      variant={variant}
      color={color}
      sm={sm}
      {...rest}
    >
      <Content
        isLoading={isLoading}
        label={label}
        leftIcon={leftIconNode}
        rightIcon={rightIconNode}
      >
        {children}
      </Content>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'base',
  color: 'brand',
  align: 'center',
  className: undefined,
  style: undefined,
  leftIcon: null,
  rightIcon: null,
};

export default Button;
