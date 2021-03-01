import React, { FunctionComponent, useState } from 'react';
import { PositionProps } from 'helpers';
import InputLabel from 'components/base-components/Inputs/base/Label';
import ClearButton from 'components/base-components/Inputs/base/ClearButton';
import CalendarModal from './CalendarModal';
import Content from './Content';
import { StyledDateTimePicker } from './styled';

interface Props extends PositionProps {
  id?: string;
  label?: string;
  value: Date | Date[];
  onChange: (event) => void;
  type?: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  showOptions?: boolean;
  showClear?: boolean;
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
    onChange({ value: date });
  };

  const handleClear = () => onChange(undefined);

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
          showClear={showClear && !!value}
          onClick={handleClear}
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
