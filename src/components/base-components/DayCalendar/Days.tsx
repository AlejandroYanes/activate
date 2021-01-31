import React, { FunctionComponent } from 'react';
import { getMonthLabel } from 'helpers';
import RenderIf from 'components/base-components/RenderIf';
import { Day, DayNumber, Mark, Month } from './styled';

interface Props {
  days: Date[];
  value: Date;
  handleDayClick: (event) => void;
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

function matchDays(dateLeft: Date, dateRight: Date) {
  return (
    dateLeft.getDate() === dateRight.getDate() &&
    dateLeft.getMonth() === dateRight.getMonth()
  );
}

const Days: FunctionComponent<Props> = (props) => {
  const { days, value, handleDayClick } = props;

  return days.reduce(({ lastMonth, items }, day) => {
    const isSelected = matchDays(day, value);
    const dayElement = (
      <Day
        role="button"
        tabIndex={0}
        key={day.getTime()}
        data-day={day}
        onClick={handleDayClick}
      >
        <DayNumber data-day={day} isSelected={isSelected}>
          {day.getDate()}
        </DayNumber>
        <RenderIf condition={isSelected}>
          <Mark layoutId="dayMarker" initial={false} transition={spring} />
        </RenderIf>
      </Day>
    );

    if (lastMonth === day.getMonth()) {
      return {
        lastMonth,
        items: items.concat([dayElement]),
      };
    }

    return {
      lastMonth: day.getMonth(),
      items: items.concat([
        (
          <Month key={`month-${day.getMonth()}_day-${day.getTime()}`}>
            {getMonthLabel(day).slice(0, 3)}
          </Month>
        ),
        dayElement,
      ]),
    };
  }, { lastMonth: -1, items: [] } as any).items;
};

export default Days;
