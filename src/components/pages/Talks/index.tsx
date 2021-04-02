import React, { FunctionComponent, } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Page from 'components/base-components/Page';
import DesktopBody from './Body.desktop';
import TabletBody from './Body.tablet';
import { Card } from './styled/page';

const bodyMap = {
  [Layout.DESKTOP]: DesktopBody,
  [Layout.TABLET]: TabletBody,
};

const TalksPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const Body = bodyMap[layout];

  return (
    <Page>
      <Card>
        <Body />
      </Card>
    </Page>
  );
};

export default TalksPage;
