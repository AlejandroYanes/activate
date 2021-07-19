import React, { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import RenderByLayout from 'components/base-components/RenderByLayout';
import FilterButton from './FilterButton';
import Organizers from './Organizers';

const PrimaryTitle = () => (
  <FlexBox justify="space-between" align="center" margin="0 0 48px 0">
    <Title level={1} color="brand" padding="0" weight="bold">
      Discover new events
    </Title>
    <Organizers />
  </FlexBox>
);

const TabletTitle = () => (
  <FlexBox justify="space-between" align="center" margin="0 0 32px 0">
    <Title level={1} color="brand" padding="0" weight="bold">
      Discover new events
    </Title>
    <Organizers />
  </FlexBox>
);

const MobileTitle = () => (
  <FlexBox justify="space-between" padding="32px 16px 32px 0">
    <Title level={1} color="brand" padding="0" weight="bold">
      Discover new events
    </Title>
    <FilterButton />
  </FlexBox>
);

const map = {
  [Layout.DESKTOP]: PrimaryTitle,
  [Layout.TABLET]: TabletTitle,
  [Layout.MOBILE]: MobileTitle,
};

const PageTitle: FunctionComponent = () => {
  return (
    <RenderByLayout options={map} fallback={PrimaryTitle} />
  );
};

export default PageTitle;
