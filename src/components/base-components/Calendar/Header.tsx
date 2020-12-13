import React, { FunctionComponent, useMemo } from 'react';
import IconButton from 'components/base-components/IconButton';
import Button from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import { Icons } from 'components/base-components/SvgIcon';
import { monthFormatter, monthYearFormatter, yearFormatter } from './utils';
import { DateElement } from './types';
import { StyledHeader } from './styled/header';

interface Props {
  currentDate: Date;
  selecting: DateElement;
  onChangeSelection: (event) => void;
  onSelectNext: (event) => void;
  onSelectPrevious: (event) => void;
}

const today = new Date();

const Header: FunctionComponent<Props> = (props) => {
  const {
    currentDate,
    selecting,
    onChangeSelection: changeSelection,
    onSelectNext: selectNext,
    onSelectPrevious: selectPrevious,
  } = props;

  const label = useMemo(() => {
    if (selecting === DateElement.Day && currentDate.getFullYear() === today.getFullYear()) {
      return monthFormatter.format(currentDate);
    }

    if (selecting === DateElement.Day) {
      return monthYearFormatter.format(currentDate);
    }

    if (selecting === DateElement.Month || selecting === DateElement.Year) {
      return yearFormatter.format(currentDate);
    }

    return null;
  }, [selecting, currentDate]);

  const selectingDay = selecting === DateElement.Day;

  return (
    <StyledHeader centerContent={!selectingDay}>
      <RenderIf condition={selectingDay}>
        <IconButton onClick={selectPrevious} icon={Icons.CHEVRON_LEFT} buttonColor="brand" />
      </RenderIf>
      <Button
        onClick={changeSelection}
        label={label}
        variant="flat"
        fullWidth
        mR
        mL
      />
      <RenderIf condition={selectingDay}>
        <IconButton onClick={selectNext} icon={Icons.CHEVRON_RIGHT} buttonColor="brand" />
      </RenderIf>
    </StyledHeader>
  );
};

export default Header;
