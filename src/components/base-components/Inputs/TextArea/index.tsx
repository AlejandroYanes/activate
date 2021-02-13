import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import autosizeTextArea from 'autosize';
import { getEventValue, PositionProps } from 'helpers';
import InputLabel from '../base/Label';
import AbsoluteContent from '../base/AbsoluteContent';
import ClearButton from '../base/ClearButton';
import { StyledContainer, StyledTextArea } from './styled/text-area';

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
  autosize?: boolean;
  maxLength?: number;
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
    autosize,
    maxLength,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const textAreaRef = useRef(undefined);

  const handleFocus = useCallback((event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  }, [onFocus]);

  const handleBlur = useCallback((event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  }, [onBlur]);

  const handleChange = useCallback((event) => {
    const txt = getEventValue(event);

    if (maxLength) {
      if (txt.length <= maxLength) {
        onChange(event);
      }
    } else {
      onChange(event);
    }
  }, [maxLength]);


  useEffect(() => {
    if (autosize) {
      autosizeTextArea(textAreaRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} isFocused={isFocused} />
      <StyledTextArea
        ref={textAreaRef}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <AbsoluteContent floatRight>
        <ClearButton
          showClear={showClear && !!value}
          isFocused={isFocused}
          onClick={onChange}
        />
      </AbsoluteContent>
    </StyledContainer>
  );
};

TextArea.defaultProps = {
  rows: 5,
};

export default TextArea;
