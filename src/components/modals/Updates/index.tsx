import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Modal, useAppLayout } from 'activate-components';
import Updates from './Updates';

const UpdatesModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();

  const modalSize = (
    (layout === Layout.DESKTOP && 'small') ||
    (layout === Layout.TABLET && 'medium') ||
    'mobile'
  );

  return (
    <Modal
      title="Updates"
      onClose={goBack}
      size={modalSize}
      visible
    >
      <Updates />
    </Modal>
  );
};

export default UpdatesModal;

