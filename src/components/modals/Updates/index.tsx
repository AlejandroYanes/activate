import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import UpdatesPanel from 'components/panels/Updates';

const UpdatesModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();

  return (
    <Modal
      title="Updates"
      onClose={goBack}
      size={layout === Layout.TABLET ? 'drawer' : 'mobile'}
      visible
    >
      <UpdatesPanel />
    </Modal>
  );
};

export default UpdatesModal;

