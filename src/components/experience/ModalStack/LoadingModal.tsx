import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { LoadingScreen } from 'components/experience/Screens';

const LoadingModal: FunctionComponent = () => {
  const { goBack } = useHistory();

  return (
    <Modal visible title="" onClose={goBack}>
      <FlexBox direction="column" align="center" margin="48px">
        <LoadingScreen />
      </FlexBox>
    </Modal>
  );
};

export default LoadingModal;
