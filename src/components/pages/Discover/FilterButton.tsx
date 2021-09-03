import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Modals } from 'components/modals';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Button } from 'components/base-components/Button';

const FilterButton: FunctionComponent = () => {
  const { push } = useHistory();
  const layout = useAppLayout();

  const openFiltersModal = useCallback(() => {
    const route = layout === Layout.MOBILE
      ? '/app/discover/filters'
      : Modals.FILTERS;
    push(route);
  }, [layout]);

  return (
    <Button
      padding="0 14px"
      onClick={openFiltersModal}
      leftIcon="FILTER"
      label="Filters"
      variant="fill"
      color="brand"
    />
  );
};

export default FilterButton;
