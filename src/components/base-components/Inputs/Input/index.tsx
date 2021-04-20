import React, { FunctionComponent, useCallback } from 'react';
import { getEventValue } from 'helpers';
import InputLabel from '../base/Label';
import ClearButton from '../base/ClearButton';
import InputIcon from '../base/Icon';
import { InputProps } from '../types';
import { StyledContainer, StyledInput } from './styled/input';

const Input: FunctionComponent<InputProps> = (props) => {
  const {
    label,
    placeholder,
    icon,
    value,
    onChange,
    onFocus,
    onBlur,
    showClear,
    ...rest
  } = props;

  const handleOnChange = useCallback((event) => {
    onChange(getEventValue(event));
  }, [onChange]);

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} />
      <InputIcon icon={icon} />
      <StyledInput
        padLeft={!!icon}
        padRight={showClear}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ClearButton
        showClear={showClear && !!value}
        onClick={onChange}
      />
    </StyledContainer>
  );
};

export default Input;
