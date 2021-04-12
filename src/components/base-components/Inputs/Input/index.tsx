import React, { FunctionComponent, useCallback } from 'react';
import { getEventValue, PositionProps } from 'helpers';
import { Icons } from 'components/base-components/SvgIcon';
import InputLabel from '../base/Label';
import ClearButton from '../base/ClearButton';
import InputIcon from '../base/Icon';
import { StyledContainer, StyledInput } from './styled/input';

interface Props extends PositionProps {
  id?: string;
  placeholder?: string;
  label?: string;
  icon?: Icons;
  value: string;
  onChange: (value: string) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  showClear?: boolean;
}

const Input: FunctionComponent<Props> = (props) => {
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
