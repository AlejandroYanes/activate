import React, { FunctionComponent, useMemo } from 'react';
import { getMonthLabel } from 'helpers';
import { months } from './types';
import { StyledList as StyledMonths, Item as Month } from './styled/months-years';

interface Props {
  currentDate: Date;
  onChange: (month: number) => void;
}

const Months: FunctionComponent<Props> = (props) => {
  const { currentDate, onChange } = props;
  const monthButtons = useMemo(() => (
    months.map((m) => (
      <Month
        key={m.getTime()}
        isSelected={m.getMonth() === currentDate.getMonth()}
        label={getMonthLabel(m)}
        onClick={() => onChange(m.getMonth())}
        variant="flat"
        mB
      />
    ))
  ), [currentDate, onChange]);

  return (
    <StyledMonths>
      {monthButtons}
    </StyledMonths>
  );
};

export default Months;
