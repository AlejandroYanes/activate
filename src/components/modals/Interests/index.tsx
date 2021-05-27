import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import InterestsGrid from 'components/experience/InterestsGrid';
import { interests } from './interests';

const InterestsModal: FunctionComponent = () => {
  const { goBack } = useHistory();

  return (
    <Modal visible title="Interests" onClose={goBack} size="mobile">
      <FlexBox
        data-el="settings-interests-modal-body"
        direction="column"
        align="stretch"
        padding="24px 6px"
      >
        <InterestsGrid cols={3} interests={interests} />
      </FlexBox>
    </Modal>
  );
};

export default InterestsModal;
