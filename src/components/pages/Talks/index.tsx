import React, { FunctionComponent, } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import DesktopBody from './Body.desktop';
import TabletBody from './Body.tablet';
import { Page } from './styled';

const bodyMap = {
  [Layout.DESKTOP]: DesktopBody,
  [Layout.TABLET]: TabletBody,
};

const TalksPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const Body = bodyMap[layout];

  return (
    <Page>
      <Body />
    </Page>
  );
};

export default TalksPage;
