import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FlexBox, Modal, RenderIf, Text } from 'activate-components';
import InterestsGrid from 'components/experience/InterestsGrid';
import useInterestsState from './state';

const InterestsModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const {
    state: {
      isLoading,
      allInterests,
      interests,
      apiFailed,
      error,
      callingAPI,
    },
    actions: {
      handleInterests,
      toggleTopCategory,
      saveInterests,
    },
  } = useInterestsState();

  return (
    <Modal visible title="Interests" onClose={goBack} size="mobile">
      <FlexBox
        data-el="settings-interests-modal-body"
        direction="column"
        align="stretch"
        padding="24px 16px"
      >
        <InterestsGrid
          multiple
          cols={3}
          mode="sectioned"
          loading={isLoading}
          errored={apiFailed}
          value={interests}
          interests={allInterests}
          onChange={handleInterests}
          onToggleAll={toggleTopCategory}
        />
        <RenderIf condition={!isLoading && !apiFailed}>
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
