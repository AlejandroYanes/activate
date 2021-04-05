import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import FiltersPanel from 'components/panels/Filters';

const FiltersModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();

  return (
    <Modal
      title="Filters"
      onClose={goBack}
      size={layout === Layout.TABLET ? 'drawer' : 'mobile'}
      visible
    >
      <FiltersPanel />
    </Modal>
  );
};

export default FiltersModal;

