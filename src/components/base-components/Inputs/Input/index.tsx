import React, { FunctionComponent, useMemo } from 'react';
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
  const { colors: Colors } = useAppTheme();
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

  const iconElement = useMemo(() => {
    return (
      <SvgIcon icon={icon} color={Colors.FONT} />
    );
  }, [icon, Colors])

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} />
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
