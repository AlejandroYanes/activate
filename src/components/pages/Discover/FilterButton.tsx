import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Modals } from 'components/modals';
import { Button } from 'components/base-components/Button';

const FilterButton: FunctionComponent = () => {
  const { push } = useHistory();

  const openFiltersModal = useCallback(() => {
    push(Modals.FILTERS);
  }, []);

  return (
    <Button
      padding="0 14px"
      onClick={openFiltersModal}
      leftIcon="FILTER"
      label="Filters (3)"
      variant="fill"
      color="brand"
    />
  );
};

export default FilterButton;
