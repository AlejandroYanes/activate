import React, { FunctionComponent, useState } from 'react';
import Page from 'components/base-components/Page';
import Button from 'components/base-components/Button';
import { CircledDot } from 'components/base-components/Loaders';
import NoFriends from '../../base-components/Illustrations/NoFriends';

const AboutPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Page title="About Us">
      {/*<div>*/}
      {/*  <Button*/}
      {/*    onClick={() => setLoading(!loading)}*/}
      {/*    isLoading={loading}*/}
      {/*    label="testing loading"*/}
      {/*    mB*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<CircledDot size="small" />*/}
      <NoFriends />
    </Page>
  );
};

export default AboutPage;
