import React, { FunctionComponent, useState } from 'react';
import { getEventValue } from 'helpers';
import Clock from 'components/base-components/Clock';
import Page from 'components/base-components/Page';

const AboutPage: FunctionComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Page title="About Us">
      <Clock value={date} onChange={(event) => setDate(getEventValue(event))} />
    </Page>
  );
};

export default AboutPage;
