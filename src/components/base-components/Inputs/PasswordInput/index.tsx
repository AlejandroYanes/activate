import React, { FunctionComponent, useCallback, useState } from 'react';
import { getEventValue } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import AbsoluteContent from '../base/AbsoluteContent';
import InputLabel from '../base/Label';
import InputIcon from '../base/Icon';
import { StyledContainer, StyledInput } from '../Input/styled/input';
import { InputProps } from '../types';

const PasswordInput: FunctionComponent<InputProps> = (props) => {
  const {
    label,
    placeholder,
    icon,
    value,
    onChange,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const colors = useAppColors();
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = useCallback((event) => {
    onChange(getEventValue(event));
  }, [onChange]);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(old => !old);
  }, []);

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} />
      <InputIcon icon={icon} />
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        padLeft={!!icon}
        padRight
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <AbsoluteContent floatRight>
        <IconButton
          onClick={toggleShowPassword}
          icon={showPassword ? Icons.UNLOCK : Icons.LOCK}
          color={colors.FONT}
          buttonColor="font"
          size="small"
        />
      </AbsoluteContent>
    </StyledContainer>
  );
};

export default PasswordInput;
