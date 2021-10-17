import React, { FunctionComponent } from 'react';
import { Button, RenderIf, Text, Title } from 'activate-components';
import InterestsGrid from 'components/experience/InterestsGrid';
import useInterestsState from './state';

const InterestsSection: FunctionComponent = () => {
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
    <>
      <Title level={2}>Manage your interests</Title>
      <InterestsGrid
        loading={isLoading}
        errored={apiFailed}
        value={interests}
        interests={allInterests}
        onChange={handleInterests}
        onToggleAll={toggleTopCategory}
        mode="sectioned"
        multiple
        mT
      />
      <RenderIf condition={!isLoading && !apiFailed}>
        <Text color="error" padding="24px 12px 0 0" align="center">{error}</Text>
        <Button
          margin="24px 0 0 auto"
          label="Update"
          variant="fill"
          loading={callingAPI}
          onClick={saveInterests}
        />
      </RenderIf>
    </>
  );
};

export default InterestsSection;
