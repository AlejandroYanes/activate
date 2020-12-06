import React, { FunctionComponent, ReactNode, useState } from 'react';
import { PositionProps } from 'helpers';
import { StyledContainer, StyledInput } from './styled/input';
import InputLabel from '../base/Label';
import ClearButton from '../base/ClearButton';
import AbsoluteContent from '../base/AbsoluteContent';

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
      <InputLabel text={label} isFocused={isFocused} />
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
