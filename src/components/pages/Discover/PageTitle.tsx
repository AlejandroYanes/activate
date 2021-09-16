import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import RenderByLayout from 'components/base-components/RenderByLayout';
import EventSortBy from 'components/experience/EventSortBy';

const DesktopTitle: FunctionComponent = () => (
  <FlexBox direction="column" align="flex-start" margin="0 0 32px 0">
    <Title
      color="brand"
      weight="bold"
      level={1}
      size={80}
      lineHeight={64}
    >
      Discover <br />
      new <br />
      events
    </Title>
  </FlexBox>
);

const TabletTitle: FunctionComponent = () => (
  <FlexBox direction="column" align="flex-start" margin="0 0 32px 0">
    <Title
      color="brand"
      weight="bold"
      level={1}
      size={80}
      lineHeight={64}
    >
      Discover <br />
      new <br />
      events
    </Title>
  </FlexBox>
);

const MobileTitle: FunctionComponent = () => {
  const { push } = useHistory();

  const toggleFilters = useCallback(() => {
    push('/app/filters');
  }, []);

  return (
    <FlexBox direction="column" align="stretch" margin="0 0 48px 0">
      <Title
        color="brand"
        weight="bold"
        level={1}
        size={64}
        lineHeight={64}
        mB
      >
        Discover <br />
        new <br />
        events
      </Title>
      <FlexBox justify="space-between">
        <EventSortBy hideLabel />
        <Button
          onClick={toggleFilters}
          leftIcon="FILTER"
          label="Filters"
          color="background"
          variant="outline"
        />
      </FlexBox>
    </FlexBox>
  );
};

const titleMap = {
  [Layout.DESKTOP]: DesktopTitle,
  [Layout.TABLET]: TabletTitle,
  [Layout.MOBILE]: MobileTitle,
};

const PageTitle: FunctionComponent = () => (
  <RenderByLayout options={titleMap} />
);

export default PageTitle;
