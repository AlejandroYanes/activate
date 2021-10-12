import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'components/base-components/Configuration';
import EventSortBy from 'components/experience/EventSortBy';
import { Button } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { Modals } from 'components/modals';

const PrimaryChangers: FunctionComponent = () => {
  const { push } = useHistory();

  const toggleFilters = useCallback(() => {
    push(Modals.FILTERS);
  }, []);

  return (
    <FlexBox justify="space-between" margin="0 0 48px 0">
      <EventSortBy />
      <Button
        onClick={toggleFilters}
        leftIcon="FILTER"
        label="Filters"
        color="background"
        variant="outline"
      />
    </FlexBox>
  );
};

const layoutMap = {
  [Layout.DESKTOP]: PrimaryChangers,
  [Layout.TABLET]: PrimaryChangers,
  [Layout.MOBILE]: () => null,
};

const Changers: FunctionComponent = () => (
  <RenderByLayout options={layoutMap} />
);

export default Changers;
