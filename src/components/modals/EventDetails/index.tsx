import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import EventDetailsPage from 'components/pages/EventDetails';

const EventDetailsModal: FunctionComponent = () => {
  const { goBack } = useHistory();


  return (
    <Modal onClose={goBack} size="mobile" visible>
      <EventDetailsPage asModal />
    </Modal>
  );
};

export default EventDetailsModal;

