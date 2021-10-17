import React, { FunctionComponent } from 'react';
import { Layout, RenderByLayout, Title } from 'activate-components';

const DesktopTitle: FunctionComponent = () => (
  <Title
    level={1}
    size={72}
    weight="bold"
    color="brand"
    padding="0 24px"
  >
    Search for anything
  </Title>
);

const TabletTitle: FunctionComponent = () => (
  <Title
    level={1}
    size={64}
    weight="bold"
    color="brand"
    padding="0 24px"
  >
    Search for anything
  </Title>
);


const MobileTitle: FunctionComponent = () => (
  <Title
    level={1}
    size={64}
    lineHeight={64}
    weight="bold"
    color="brand"
    padding="0 24px"
  >
    Search <br /> for <br /> anything
  </Title>
);

const titleMap = {
  [Layout.DESKTOP]: DesktopTitle,
  [Layout.TABLET]: TabletTitle,
  [Layout.MOBILE]: MobileTitle,
};

const PageTitle = () => (
  <RenderByLayout options={titleMap} />
);

export default PageTitle;
