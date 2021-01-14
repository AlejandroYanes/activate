import React, { FunctionComponent, useEffect, useState } from 'react';
import Backdrop from 'components/base-components/Backdrop';
import Calendar from 'components/base-components/Calendar';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import Button from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import { ClockWrapper, Footer, StyledCalendarModal, Expander } from './styled/calendar-modal';
import Clock from '../Clock';
import CurrentDate from './CurrentDate';

interface Props {
  isOpen: boolean;
  type?: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  value: Date | Date[];
  onChange: (date: Date | Date[]) => void;
  onClose: () => void;
  showOptions?: boolean;
}

enum Tabs {
  CalendarTab = 'CalendarTab',
  ClockTab = 'ClockTab',
}

const encapsulateClickEvents = (event) => event.stopPropagation();

const CalendarModal: FunctionComponent<Props> = (props) => {
  const { isOpen, type, value, onClose, onChange, showOptions } = props;
  const [activeTab, setActiveTab] = useState(Tabs.CalendarTab);
  const [dates, setDates] = useState(value);
  const useRange = type === 'date-range' || type === 'time-range';
  const isDateTime = type === 'date-time';

  const handleCalendarChange = (nextValue: Date | Date[]) => {
    if (type === 'date-time') {
      setDates(nextValue);
      setActiveTab(Tabs.ClockTab);
      return;
    }

    if (useRange) {
      setDates(nextValue);
      return;
    }

    onChange(nextValue);
  };

  const handleClockChange = (nextDate) => {
    setDates(nextDate);
  };

  const sendDateSelected = () => onChange(dates);

  useEffect(() => {
    if (!isOpen) {
      setActiveTab(Tabs.CalendarTab);

      if (value !== dates) {
        setDates(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (isOpen) {
    return (
      <Backdrop onClick={onClose}>
        <StyledCalendarModal
          useRange={useRange}
          isDateTime={type === 'date-time'}
          onClick={encapsulateClickEvents}
        >
          <RenderIf condition={type === 'date-time'}>
            <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mB>
              <Tab name={Tabs.CalendarTab} icon={Icons.CALENDAR_FILLED} />
              <Tab name={Tabs.ClockTab} icon={Icons.CLOCK} />
            </Tabset>
          </RenderIf>
          <RenderIf condition={activeTab === Tabs.CalendarTab}>
            <Calendar
              showOptions={showOptions}
              useRange={useRange}
              value={dates}
              onChange={handleCalendarChange}
            />
          </RenderIf>
          <RenderIf condition={activeTab === Tabs.ClockTab}>
            <ClockWrapper data-el="clock-wrapper">
              <Clock value={dates as Date} onChange={handleClockChange} />
            </ClockWrapper>
          </RenderIf>
          <RenderIf condition={useRange || isDateTime}>
            <Expander />
            <CurrentDate isVisible={isDateTime} date={dates as Date} />
            <Footer>
              <Button onClick={onClose} label="Cancel" mR />
              <Button onClick={sendDateSelected} label="Select" variant="fill" />
            </Footer>
          </RenderIf>
        </StyledCalendarModal>
      </Backdrop>
    );
  }

  return null;
};

export default CalendarModal;
