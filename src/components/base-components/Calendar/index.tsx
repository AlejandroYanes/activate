import React, { FunctionComponent, useState } from 'react';
import { addMonths, differenceInDays, setMonth, setYear, subMonths } from 'date-fns';
import Button from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import { Content, DateSection, Footer, StyledCalendar } from './styled/calendar';
import Options from './Options';
import Header from './Header';
import Days from './Days';
import Months from './Months';
import Years from './Years';
import { DateElement } from './types';

export interface Props {
  value: Date | Date[];
  onChange: (nextValue: Date | Date[]) => void;
  onClose: () => void;
  useRange?: boolean;
  showOptions?: boolean;
}

const initializeState = (value: Date | Date[], useRange) => {
  const startDate = useRange && value ? value[0] : value;
  const endDate = useRange && value ? value[1] : undefined;
  const viewDate = startDate || new Date();

  return {
    viewDate,
    startDate,
    endDate,
  };
};

const encapsulateClickEvents = (event) => event.stopPropagation();

const Calendar: FunctionComponent<Props> = (props) => {
  const { value, onChange, onClose, useRange, showOptions } = props;
  const [state, setState] = useState(() => initializeState(value, useRange));
  const [selecting, setSelecting] = useState<DateElement>(DateElement.Day);
  const { viewDate, startDate, endDate } = state;

  const changeSelection = () => {
    const nextSelectionMode = selecting === DateElement.Day
      ? DateElement.Month
      : DateElement.Year;
    setSelecting(nextSelectionMode);
  };

  const setOptionDate = (nextDate: Date | Date[]) => {
    const firstDate = nextDate[0];
    const lastDate = useRange ? nextDate[1] : undefined;

    setState({
      viewDate: firstDate,
      startDate: firstDate,
      endDate: lastDate,
    });
    setSelecting(DateElement.Day);
  };

  const selectYear = (year: number) => {
    setState({ ...state, viewDate: setYear(viewDate, year) });
    setSelecting(DateElement.Month);
  };

  const selectMonth = (month: number) => {
    setState({ ...state, viewDate: setMonth(viewDate, month) });
    setSelecting(DateElement.Day);
  };

  const selectNextMonth = () => {
    setState({ ...state, viewDate: addMonths(viewDate, 1) });
  };

  const selectPreviousMonth = () => {
    setState({ ...state, viewDate: subMonths(viewDate, 1) });
  };

  const selectDay = (selectedDate: Date) => {
    if (!useRange) {
      onChange(selectedDate);
      return;
    }

    const differenceFromStart = differenceInDays(selectedDate, startDate);
    const isBeforeStartDate = differenceFromStart < 0;
    const isStartDate = differenceFromStart === 0;
    const isEndDate = differenceInDays(selectedDate, endDate) === 0;
    let nextState = { ...state, endDate: selectedDate };

    if (!startDate || isBeforeStartDate) {
      nextState = { ...state, startDate: selectedDate };
    }

    if (isStartDate || isEndDate) {
      nextState = { ...state, startDate: selectedDate, endDate: undefined };
    }

    setState(nextState);
  };

  const sendDateSelected = () => onChange([startDate, endDate]);

  return (
    <StyledCalendar onClick={encapsulateClickEvents}>
      <Content>
        <RenderIf condition={showOptions}>
          <Options value={viewDate} onSelect={setOptionDate} />
        </RenderIf>
        <DateSection padd={showOptions}>
          <Header
            currentDate={viewDate}
            selecting={selecting}
            onChangeSelection={changeSelection}
            onSelectNext={selectNextMonth}
            onSelectPrevious={selectPreviousMonth}
          />
          <RenderIf condition={selecting === DateElement.Day}>
            <Days
              viewDate={viewDate}
              startDate={startDate}
              endDate={endDate}
              onChange={selectDay}
            />
          </RenderIf>
          <RenderIf condition={selecting === DateElement.Month}>
            <Months currentDate={viewDate} onChange={selectMonth} />
          </RenderIf>
          <RenderIf condition={selecting === DateElement.Year}>
            <Years currentDate={viewDate} onChange={selectYear} />
          </RenderIf>
        </DateSection>
      </Content>
      <RenderIf condition={useRange}>
        <Footer>
          <Button onClick={onClose} label="Cancel" mR />
          <Button onClick={sendDateSelected} label="Select" variant="fill" />
        </Footer>
      </RenderIf>
    </StyledCalendar>
  );
};

export default Calendar;
