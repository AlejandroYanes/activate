import React, { FunctionComponent } from 'react';
import Page from 'components/base-components/Page';
import SpinningDots from 'components/base-components/Loaders/SpinningDots';

const AboutPage: FunctionComponent = () => {
  return (
    <Page title="About Us">
      <SpinningDots mT mB size="page" />
    </Page>
  );
};

export default AboutPage;
