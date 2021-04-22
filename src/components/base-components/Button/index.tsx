import React, { FunctionComponent, ReactNode, useRef } from 'react';
import { PositionProps } from 'helpers';
import { useFocusState, useHoverState } from 'hooks/UI';
import { Icons } from 'components/base-components/SvgIcon/Icons';
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
  const buttonRef = useRef(undefined);
  const isHovered = useHoverState(buttonRef);
  const isFocused = useFocusState(buttonRef);

  const leftIconNode = (
    <IconNode
      isHovered={isHovered || isFocused}
      variant={variant}
      icon={leftIcon}
      color={color}
      sm={sm}
    />
  );

  const rightIconNode = (
    <IconNode
      isHovered={isHovered || isFocused}
      variant={variant}
      icon={rightIcon}
      color={color}
      sm={sm}
    />
  );

  return (
    <StyledButton
      ref={buttonRef}
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
  isLoading: false,
};

export default Button;
