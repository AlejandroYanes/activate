import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import UpdatesPanel from 'components/panels/Updates';

const UpdatesModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();

  const modalSize = layout !== Layout.MOBILE ? 'drawer' : 'mobile';

  return (
    <Modal
      title="Updates"
      onClose={goBack}
      size={modalSize}
      visible
    >
      <UpdatesPanel />
    </Modal>
  );
};

export default UpdatesModal;

