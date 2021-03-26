import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import Settings from 'components/pages/Profile/Settings';
import FlexBox from 'components/base-components/FlexBox';

const SettingsModal: FunctionComponent = () => {
  const { goBack } = useHistory();

  return (
    <Modal visible title="Settings" onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="0 6px"
      >
        <Settings asPanel />
      </FlexBox>
    </Modal>
  );
};

export default SettingsModal;
