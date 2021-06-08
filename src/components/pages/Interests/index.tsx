import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import FlexBox from 'components/base-components/FlexBox';
import IconButton from 'components/base-components/IconButton';
import { Text, Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import { Button } from 'components/base-components/Button';
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
    <Page>
      <StyledCard>
        <FlexBox align="center" mB>
          <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} mR />
          <Title level={2}>Manage your interests</Title>
        </FlexBox>
        <InterestsGrid
          loading={isLoading}
          errored={!!apiError}
          value={interests}
          interests={allInterests}
          onChange={handleInterests}
          padding="20px 0 0 0"
          multiple
        />
        <RenderIf condition={!isLoading && !apiError}>
          <Text color="error" padding="24px 12px 0 0" align="center">{error}</Text>
          <Button
            mT
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
