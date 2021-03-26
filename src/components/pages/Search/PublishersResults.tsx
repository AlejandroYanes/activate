import React, { FunctionComponent } from 'react';
import PublisherCard from 'components/experience/PublisherCard';
import FlexBox from 'components/base-components/FlexBox';

const PublishersResults: FunctionComponent = () => {
  return (
    <FlexBox wrap justify="space-around" align="stretch">
      <PublisherCard />
      <PublisherCard />
      <PublisherCard />
      <PublisherCard />
    </FlexBox>
  );
};

export default PublishersResults;
