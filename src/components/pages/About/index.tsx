import React, { FunctionComponent, useState } from 'react';
import Page from 'components/base-components/Page';
import Button from 'components/base-components/Button';

const AboutPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Page title="About Us">
      <div>
        <Button
          onClick={() => setLoading(!loading)}
          isLoading={loading}
          label="testing loading"
          mB
        />
      </div>
    </Page>
  );
};

export default AboutPage;
