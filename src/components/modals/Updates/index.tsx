import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import UpdatesPanel from 'components/panels/Updates';

const UpdatesModal: FunctionComponent = () => {
  const { goBack } = useHistory();


  return (
    <Modal title="Updates" onClose={goBack} size="mobile" visible>
      <UpdatesPanel />
    </Modal>
  );
};

export default UpdatesModal;

