import React, { FunctionComponent } from 'react';
import Backdrop from 'components/base-components/Backdrop';
import Calendar, { Props as CalendarProps } from 'components/base-components/Calendar';

interface Props extends CalendarProps {
  isOpen: boolean;
}

const CalendarModal: FunctionComponent<Props> = (props) => {
  const { isOpen, onClose, ...rest } = props;

  if (isOpen) {
    return (
      <Backdrop onClick={onClose}>
        <Calendar onClose={onClose} {...rest} />
      </Backdrop>
    );
  }

  return null;
};

export default CalendarModal;
