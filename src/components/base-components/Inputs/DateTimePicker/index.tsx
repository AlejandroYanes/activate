import React, { FunctionComponent, useMemo, useState } from 'react';
import InputLabel from '../base/Label';
import ClearButton from '../base/ClearButton';
import CalendarModal from './CalendarModal';
import Content from './Content';
import { InputProps } from '../types';
import { StyledDateTimePicker } from './styled';

interface Props extends InputProps {
  value: Date | Date[];
  type?: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  showOptions?: boolean;
}

const DateTimePicker: FunctionComponent<Props> = (props) => {
  const {
    id,
    label,
    type,
    value,
    onChange,
    showOptions,
    showClear,
    ...rest
  } = props;

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const openDatePickerModal = () => setShowBackdrop(true);
  const closeDatePickerModal = (event?) => {
    if (event) {
      event.preventDefault();
    }
    setShowBackdrop(false);
  };

  const handleDateSelected = (date) => {
    setShowBackdrop(false);
    onChange(date);
  };

  const showClearButton = useMemo(() => {
    const useRange = type === 'date-range' || type === 'time-range';
    let hasValue = !!value;

    if (useRange) {
     hasValue = !!value && (value as Date[]).length > 0;
    }

    return showClear && hasValue;
  }, [showClear, type, value]);

  return (
    <>
      <StyledDateTimePicker id={id} {...rest}>
        <InputLabel text={label} />
        <Content
          type={type}
          value={value}
          padRight={showClear}
          isFocused={isFocused}
          onClick={openDatePickerModal}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <ClearButton
          returnValue={null}
          showClear={showClearButton}
          onClick={onChange}
        />
      </StyledDateTimePicker>
      <CalendarModal
        isOpen={showBackdrop}
        type={type}
        value={value}
        showOptions={showOptions}
        onChange={handleDateSelected}
        onClose={closeDatePickerModal}
      />
    </>
  );
};

DateTimePicker.defaultProps = {
  type: 'date',
  showOptions: false,
  showClear: false,
};

export default DateTimePicker;
