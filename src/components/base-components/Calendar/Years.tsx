import React, { FunctionComponent, useMemo } from 'react';
import { resolveYearRange } from './utils';
import { StyledList as StyledYears, Item as Year, Item as Month } from './styled/months-years';

interface Props {
  currentDate: Date;
  onChange: (year: number) => void;
}

const Years: FunctionComponent<Props> = (props) => {
  const { currentDate, onChange } = props;
  const yearButtons = useMemo(() => {
    const yearRange = resolveYearRange(currentDate);
    return yearRange.map((y) => (
      <Year
        key={y}
        isSelected={y === currentDate.getFullYear()}
        label={y}
        onClick={() => onChange(y)}
        variant="flat"
        mB
      />
    ));
  }, [currentDate, onChange]);

  return (
    <StyledYears>
      {yearButtons}
    </StyledYears>
  );
};

export default Years;
