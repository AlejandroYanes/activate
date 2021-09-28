import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import FlexBox from 'components/base-components/FlexBox';
import { Text, Title } from 'components/base-components/Typography';
import Page from 'components/base-components/Page';
import { Button, IconButton } from 'components/base-components/Button';
import InterestsGrid from 'components/experience/InterestsGrid';
import RenderIf from 'components/base-components/RenderIf';
import { StyledCard } from './styled';
import useInterestsState from './state';

const InterestsPage: FunctionComponent = () => {
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
    <Page>
      <StyledCard>
        <FlexBox align="center" mB>
          <IconButton onClick={goBack} icon="ARROW_LEFT" mR />
          <Title weight="light" level={2}>Manage your interests</Title>
        </FlexBox>
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
      </StyledCard>
    </Page>
  );
};

export default InterestsPage;
