import React, { FunctionComponent, useEffect, useState } from 'react';
import { getEventValue } from 'helpers';
import { usePanelActions } from 'components/providers/PanelSections';
import Clock from 'components/base-components/Clock';

const AboutPage: FunctionComponent = () => {
  const { resetPanelSections } = usePanelActions();
  const [date, setDate] = useState(new Date());

  useEffect(resetPanelSections, []);

  return (
    <section>
      About Page
      <br />
      <Clock value={date} onChange={(event) => setDate(getEventValue(event))} />
    </section>
  );
};

export default AboutPage;
