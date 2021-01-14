import React, { FunctionComponent } from 'react';
import { formatDateTime } from 'helpers';
import { Footer as StyledFooter } from './styled/calendar-modal';

interface Props {
  isVisible: boolean;
  date: Date;
}

const CurrentDate: FunctionComponent<Props> = (props) => {
  const { isVisible, date } = props;

  if (isVisible) {
    return (
      <StyledFooter>
        {formatDateTime(date as Date)}
      </StyledFooter>
    );
  }
  return null;
};

export default CurrentDate;
