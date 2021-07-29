import React, { FunctionComponent } from 'react';
import Page from 'components/base-components/Page';
import WelcomeSign from './WelcomeSign';
import FeedContent from './FeedContent';

const HomePage: FunctionComponent = () => {
  return (
    <Page data-el="feed-page">
      <WelcomeSign />
      <FeedContent />
    </Page>
  );
};

export default HomePage;
