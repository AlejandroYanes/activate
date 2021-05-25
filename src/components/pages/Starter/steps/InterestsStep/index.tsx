import React, { FunctionComponent, useState } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import InterestsGrid from 'components/experience/InterestsGrid';
import { Content, Step } from '../../styled';
import Illustration from '../Illustration';
import { FinishButton } from './styled';
import { allInterests } from './interests';

interface Props {
  onNext: () => void;
  isLoading?: boolean;
}

const colsMap = {
  [Layout.DESKTOP]: 4,
  [Layout.TABLET]: 4,
  [Layout.MOBILE]: 3,
};

const InterestsStep: FunctionComponent<Props> = (props) => {
  const { isLoading, onNext } = props;
  const layout = useAppLayout();
  const [interests, setInterests] = useState([]);

  return (
    <Step>
      <Content>
        <Title level={2}>{`Tell us what you're looking for`}</Title>
        <InterestsGrid
          onChange={setInterests}
          interests={allInterests}
          value={interests}
          cols={colsMap[layout]}
          padding="20px 0 0 0"
          multiple
        />
        <FinishButton
          label="Finish"
          onClick={onNext}
          isLoading={isLoading}
          variant="fill"
        />
      </Content>
      <Illustration step={3} />
    </Step>
  );
};

export default InterestsStep;
