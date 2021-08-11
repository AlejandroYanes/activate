import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import InterestsGrid from 'components/experience/InterestsGrid';
import RenderIf from 'components/base-components/RenderIf';
import { Content, Step } from '../../styled';
import Illustration from '../Illustration';
import { FinishButton } from './styled';
import useInterestsState from './state';

const colsMap = {
  [Layout.DESKTOP]: 4,
  [Layout.TABLET]: 4,
  [Layout.MOBILE]: 3,
};

const InterestsStep: FunctionComponent = () => {
  const layout = useAppLayout();
  const {
    state: {
      isLoading,
      categories,
      interests,
      apiError,
    },
    actions: {
      handleInterests,
      selectTopCategory,
      saveInterests,
    },
  } = useInterestsState();

  return (
    <Step>
      <Content>
        <Title weight="light" level={1}>{`Tell us what you're looking for`}</Title>
        <InterestsGrid
          multiple
          mode="paged"
          padding="20px 0 0 0"
          cols={colsMap[layout]}
          value={interests}
          interests={categories}
          onChange={handleInterests}
          onToggleAll={selectTopCategory}
          loading={isLoading}
          errored={!!apiError}
        />
        <RenderIf condition={!isLoading && !apiError}>
          <FinishButton
            label="Finish"
            variant="fill"
            onClick={saveInterests}
          />
        </RenderIf>
      </Content>
      <Illustration step={3} />
    </Step>
  );
};

export default InterestsStep;
