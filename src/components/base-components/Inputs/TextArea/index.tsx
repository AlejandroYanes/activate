import React, { FunctionComponent, useState } from 'react';
import { PositionProps } from 'helpers';
import InputLabel from '../base/Label';
import { StyledContainer, StyledTextArea } from './styled/text-area';
import AbsoluteContent from '../base/AbsoluteContent';
import ClearButton from '../base/ClearButton';

interface Props extends PositionProps {
  id?: string;
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  showClear?: boolean;
  rows?: number;
}

const TextArea: FunctionComponent<Props> = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    showClear,
    rows,
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
      <StyledTextArea
        rows={rows}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <AbsoluteContent floatRight>
        <ClearButton
          showClear={showClear && !!value}
          isFocused={isFocused}
          onChange={onChange}
        />
      </AbsoluteContent>
    </StyledContainer>
  );
};

TextArea.defaultProps = {
  rows: 5,
};

export default TextArea;
