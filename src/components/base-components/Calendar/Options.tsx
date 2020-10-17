import React, { FunctionComponent, useMemo } from 'react';
import { addDays, addMonths, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';
import { generateUID } from 'helpers';
import { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';
import { Options as StyledOptions } from './styled/options';

const today = new Date();

const initialOptions = [
  {
    key: generateUID(),
    label: 'Today',
    value: [today],
    icon: Icons.CALENDAR_FILLED,
  },
  {
    key: generateUID(),
    label: 'Tomorrow',
    value: [addDays(today, 1)],
    icon: Icons.CALENDAR_FILLED,
  },
  {
    key: generateUID(),
    label: 'This Week',
    value: [startOfWeek(today), endOfWeek(today)],
    icon: Icons.CALENDAR_FILLED,
  },
  {
    key: generateUID(),
    label: 'Next Week',
    value: [startOfWeek(addDays(today, 7)), endOfWeek(addDays(today, 7))],
    icon: Icons.CALENDAR_FILLED,
  },
  {
    key: generateUID(),
    label: 'This Month',
    value: [startOfMonth(today), endOfMonth(today)],
    icon: Icons.CALENDAR_FILLED,
  },
  {
    key: generateUID(),
    label: 'Next Month',
    value: [startOfMonth(addMonths(today, 1)), endOfMonth(addMonths(today, 1))],
    icon: Icons.CALENDAR_FILLED,
  },
];

// const Option = ({ label, icon, onClick }) => (
//   <StyledOption onClick={onClick}>
//     <SvgIcon icon={icon} color={Colors.DARK} />
//     <span>{label}</span>
//   </StyledOption>
// );

interface Props {
  value: Date | Date[];
  onSelect: (date) => void;
}

const Options: FunctionComponent<Props> = (props) => {
  const { onSelect } = props;
  const options = useMemo(
    () => initialOptions.map(({ key, value, label, icon }) => (
      <Button
        key={key}
        onClick={() => onSelect(value)}
        label={label}
        leftIcon={icon}
        variant="flat"
        align="start"
        mB
      />
      // <Option
      //   key={key}
      //   onClick={() => onSelect(value)}
      //   label={label}
      //   icon={icon}
      // />
    )),
    [],
  );

  return (
    <StyledOptions>
      {options}
    </StyledOptions>
  );
};

export default Options;
