import React, { FunctionComponent, ReactNode, useMemo, useRef } from 'react';
import { PositionProps, useHoverState } from 'components/_base';
import { Button as StyledButton } from './styled';
import Content from './Content';
import IconNode from './Icon';
import { Icons } from 'components/base-components/SvgIcon/Icons';

export interface ButtonProps extends PositionProps {
  label?: string | number;
  onClick: (event) => void;
  leftIcon?: Icons | ReactNode;
  rightIcon?: Icons | ReactNode;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'base' | 'fill' | 'outline';
  color?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
  sm?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
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
    <IconNode icon={leftIcon} variant={variant} color={color} isHovered={isHovered} sm={sm} />
  ), [leftIcon, isHovered, variant, color, sm]);

  const rightIconNode = useMemo(() => (
    <IconNode icon={rightIcon} variant={variant} color={color} isHovered={isHovered} sm={sm} />
  ), [rightIcon, isHovered, variant, color, sm]);

  return (
    <StyledButton ref={buttonReference} onClick={onClick} {...rest}>
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
  className: undefined,
  style: undefined,
  leftIcon: null,
  rightIcon: null,
};

export default Button;
