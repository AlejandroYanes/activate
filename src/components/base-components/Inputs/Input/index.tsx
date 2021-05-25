import React, { FunctionComponent, useCallback } from 'react';
import { getEventValue } from 'helpers';
import InputLabel from '../base/Label';
import ClearButton from '../base/ClearButton';
import InputIcon from '../base/Icon';
import ErrorText from '../base/ErrorText';
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
    required,
    error,
    ...rest
  } = props;

  const handleOnChange = useCallback((event) => {
    onChange(getEventValue(event));
  }, [onChange]);

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} required={required} />
      <InputIcon icon={icon} topSpaced={!!label} />
      <StyledInput
        value={value}
        error={!!error}
        padLeft={!!icon}
        padRight={showClear}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ClearButton
        topSpaced={!!label}
        showClear={showClear && !!value}
        onClick={onChange}
      />
      <ErrorText text={error} />
    </StyledContainer>
  );
};

export default Input;
