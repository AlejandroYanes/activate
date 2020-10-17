import React, { FunctionComponent, useEffect } from 'react';
import { usePanelActions } from 'components/providers/PanelSections';
import Clock from '../../base-components/Clock';

const AboutPage: FunctionComponent = () => {
  const { resetPanelSections } = usePanelActions();

  useEffect(resetPanelSections, []);

  return (
    <section>
      About Page
      <br />
      <Clock value={new Date()} onChange={() => undefined} />
    </section>
  );
};

export default AboutPage;
