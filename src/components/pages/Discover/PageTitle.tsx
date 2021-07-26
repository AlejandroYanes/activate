import React, { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import RenderByLayout from 'components/base-components/RenderByLayout';
import FilterButton from './FilterButton';
import Sorter from './Sorter';

const PrimaryTitle = () => (
  <FlexBox justify="space-between" align="center" margin="0 0 48px 0">
    <Title level={1} color="brand" padding="0" weight="bold">
      Discover new events
    </Title>
    <Sorter />
  </FlexBox>
);

const TabletTitle = () => (
  <FlexBox direction="column" justify="flex-start" align="stretch" margin="0 0 48px 0">
    <Title level={1} color="brand" padding="0" weight="bold" margin="0 0 16px 0">
      Discover new events
    </Title>
    <FlexBox justify="space-between" align="center" grow>
      <FilterButton />
      <Sorter />
    </FlexBox>
  </FlexBox>
);

const MobileTitle = () => (
  <FlexBox direction="column" justify="flex-start" align="stretch" margin="0 0 48px 0">
    <Title level={1} color="brand" padding="0" weight="bold" mB>
      Discover new events
    </Title>
    <FlexBox justify="space-between" align="center" grow>
      <FilterButton />
      <Sorter />
    </FlexBox>
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
