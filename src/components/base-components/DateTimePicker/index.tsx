import React, { FunctionComponent, useMemo, useState } from 'react';
import { PositionProps } from 'helpers';
import RenderIf from 'components/base-components/RenderIf';
import IconButton from 'components/base-components/IconButton';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import CalendarModal from './CalendarModal';
import DateStamp from './DateStamp';
import { Content, Label, StyledDateTimePicker, AbsoluteContent, Separator } from './styled';

interface Props extends PositionProps {
  id?: string;
  label?: string;
  value: Date | Date[];
  onChange: (event) => void;
  type?: 'date-time' | 'date' | 'time';
  useRange?: boolean;
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
    useRange,
    showOptions,
    showClear,
    ...rest
  } = props;

  const startDate = useMemo(() => useRange && value ? value[0] : value, [useRange, value]);
  const endDate = useMemo(() => useRange && value ? value[1] : undefined, [useRange, value]);

  const [showBackdrop, setShowBackdrop] = useState(false);

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

  const handleClear = () => onChange({ value: undefined });

  return (
    <>
      <StyledDateTimePicker id={id} {...rest}>
        <Label>{label}</Label>
        <Content onClick={openDatePickerModal} padRight={showClear} tabIndex={0}>
          <SvgIcon icon={Icons.CALENDAR_FILLED} />
          <DateStamp value={startDate} />
          <RenderIf condition={!!endDate}>
            <Separator />
            <DateStamp value={endDate} />
          </RenderIf>
        </Content>
        <RenderIf condition={showClear && !!value}>
          <AbsoluteContent floatRight>
            <IconButton
              onClick={handleClear}
              icon={Icons.CLOSE}
              buttonColor="dark"
              sm
            />
          </AbsoluteContent>
        </RenderIf>
      </StyledDateTimePicker>
      <CalendarModal
        isOpen={showBackdrop}
        value={value}
        useRange={useRange}
        showOptions={showOptions}
        onChange={handleDateSelected}
        onClose={closeDatePickerModal}
      />
    </>
  );
};

DateTimePicker.defaultProps = {
  type: 'date',
  useRange: false,
  showOptions: false,
  showClear: false,
};

export default DateTimePicker;
