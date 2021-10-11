import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon from 'components/base-components/SvgIcon';
import { Title } from 'components/base-components/Typography';

const EmptyModal: FunctionComponent = () => {
  const { goBack } = useHistory();

  return (
    <Modal visible onClose={goBack}>
      <FlexBox direction="column" align="center" margin="48px">
        <SvgIcon
          icon="EXCLAMATION_TRIANGLE"
          size="page"
          color="WARNING"
        />
        <Title level={3} mT>Oops, looks like there was some error.</Title>
      </FlexBox>
    </Modal>
  );
};

export default EmptyModal;
