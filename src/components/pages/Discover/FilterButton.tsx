import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Modals } from 'components/modals';
import { IconButton } from 'components/base-components/Button';

const FilterButton: FunctionComponent = () => {
  const { push } = useHistory();

  const openFiltersModal = useCallback(() => {
    push(Modals.FILTERS);
  }, []);

  return (
    <IconButton
      onClick={openFiltersModal}
      icon="SLIDERS_VERT"
      color="brand"
    />
  );
};

export default FilterButton;
