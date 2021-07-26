import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import { IconButton } from 'components/base-components/Button';
import FiltersPanel from 'components/panels/Filters';

const FiltersModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();

  const modalSize = layout === Layout.TABLET ? 'drawer' : 'mobile';
  const header = (
    <IconButton
      onClick={goBack}
      icon="ARROW_LEFT"
      variant="flat"
    />
  );

  return (
    <Modal
      title={header}
      onClose={goBack}
      size={modalSize}
      visible
    >
      <FiltersPanel />
    </Modal>
  );
};

export default FiltersModal;

