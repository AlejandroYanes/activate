import React, { FunctionComponent, ReactNode, useState } from 'react';
import { PositionProps } from 'helpers';
import { AbsoluteContent, StyledContainer, StyledInput, StyledLabel } from './styled';
import IconButton from '../IconButton';
import { Icons } from '../SvgIcon/Icons';

interface Props extends PositionProps {
  id?: string;
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  leftItems?: ReactNode[];
  rightItems?: ReactNode[];
  showClear?: boolean;
}

const ClearButton = ({ showClear, isFocused, onChange }) => {
  if (showClear) {
    const clearInput = () => {
      onChange({ target: { value: '' } });
    };

    return (
      <IconButton
        onClick={clearInput}
        icon={Icons.CLOSE}
        buttonColor={isFocused ? 'brand' : 'dark'}
        sm
      />
    );
  }

  return null;
};

const Input: FunctionComponent<Props> = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    leftItems,
    rightItems,
    showClear,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <StyledContainer {...rest}>
      <StyledLabel focused={isFocused}>
        {label}
      </StyledLabel>
      <AbsoluteContent>
        {leftItems}
      </AbsoluteContent>
      <StyledInput
        leftItems={leftItems.length}
        rightItems={rightItems.length + (showClear ? 1 : 0)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <AbsoluteContent floatRight>
        {rightItems}
        <ClearButton
          isFocused={isFocused}
          showClear={showClear && !!value}
          onChange={onChange}
        />
      </AbsoluteContent>
    </StyledContainer>
  );
};

Input.defaultProps = {
  leftItems: [],
  rightItems: [],
};

export default Input;
