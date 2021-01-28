import React, { FunctionComponent, useState } from 'react';
import { getEventValue } from 'helpers';
import Clock from 'components/base-components/Clock';

const AboutPage: FunctionComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section>
      About Page
      <br />
      <Clock value={date} onChange={(event) => setDate(getEventValue(event))} />
      <br />
      <br />
      <br />
    </section>
  );
};

export default AboutPage;
