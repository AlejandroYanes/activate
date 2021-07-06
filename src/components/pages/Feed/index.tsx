import React, { FunctionComponent } from 'react';
import Page from 'components/base-components/Page';
import WelcomeSign from './WelcomeSign';
import FeedContent from './FeedContent';

const FeedPage: FunctionComponent = () => {
  return (
    <Page data-el="feed-page">
      <WelcomeSign />
      <FeedContent />
    </Page>
  );
};

export default FeedPage;
