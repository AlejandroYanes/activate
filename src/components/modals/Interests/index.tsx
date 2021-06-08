import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { Button } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import InterestsGrid from 'components/experience/InterestsGrid';
import useInterestsState from './state';

const InterestsModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const {
    state: {
      isLoading,
      allInterests,
      interests,
      apiError,
      error,
      callingAPI,
    },
    actions: {
      handleInterests,
      saveInterests,
    },
  } = useInterestsState();

  return (
    <Modal visible title="Interests" onClose={goBack} size="mobile">
      <FlexBox
        data-el="settings-interests-modal-body"
        direction="column"
        align="stretch"
        padding="24px 6px"
      >
        <InterestsGrid
          cols={3}
          loading={isLoading}
          errored={!!apiError}
          value={interests}
          interests={allInterests}
          onChange={handleInterests}
        />
        <RenderIf condition={!isLoading && !apiError}>
          <Text color="error" padding="24px 12px 0 0" align="center">{error}</Text>
          <Button
            loading={callingAPI}
            onClick={saveInterests}
            label="Update"
            variant="fill"
            mT
          />
        </RenderIf>
      </FlexBox>
    </Modal>
  );
};

export default InterestsModal;
