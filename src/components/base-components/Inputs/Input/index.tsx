import React, { FunctionComponent, useMemo, useState } from 'react';
import { PositionProps } from 'helpers';
import { useAppTheme } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import InputLabel from '../base/Label';
import ClearButton from '../base/ClearButton';
import AbsoluteContent from '../base/AbsoluteContent';
import { StyledContainer, StyledInput } from './styled/input';

interface Props extends PositionProps {
  id?: string;
  placeholder?: string;
  label?: string;
  icon?: Icons;
  value: string;
  onChange: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  showClear?: boolean;
}

const Input: FunctionComponent<Props> = (props) => {
  const { colors: Colors, useDarkStyle } = useAppTheme();
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

  const iconElement = useMemo(() => {
    const focusedColor = useDarkStyle ? Colors.BRAND : Colors.BRAND_DARK;
    return (
      <SvgIcon icon={icon} color={isFocused ? focusedColor : Colors.FONT} />
    );
  }, [icon, isFocused, Colors, useDarkStyle])

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} isFocused={isFocused} />
      <RenderIf condition={!!icon}>
        <AbsoluteContent>
          {iconElement}
        </AbsoluteContent>
      </RenderIf>
      <StyledInput
        padLeft={!!icon}
        padRight={showClear}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <ClearButton
        isFocused={isFocused}
        showClear={showClear && !!value}
        onClick={onChange}
      />
    </StyledContainer>
  );
};

export default Input;
