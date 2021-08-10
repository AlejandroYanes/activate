import React, { FunctionComponent } from 'react';
import { CategoryModel } from 'models/category';
import { PositionProps } from 'helpers';
import { PickList } from 'components/base-components/PickList';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PlainGrid from './PlainGrid';
import SectionedGrid from './SectionedGrid';

interface Props extends PositionProps {
  interests: CategoryModel[];
  value?: string | string[];
  onChange?: (value) => void;
  onToggleAll?: (category) => void;
  cols?: number;
  multiple?: boolean;
  readonly?: boolean;
  plain?: boolean;
  showAllToggle?: boolean;
  loading?: boolean;
  errored?: boolean;
}

const InterestsGrid: FunctionComponent<Props> = (props): any => {
  const {
    loading,
    errored,
    interests,
    plain,
    showAllToggle,
    onToggleAll,
    ...rest
  } = props;

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  if (errored) {
    return (
      <NoConnectionScreen message="We couldn't load the interests." />
    );
  }

  const Items = plain ? PlainGrid : SectionedGrid;

  return (
    <PickList
      layout="grid"
      color="brand"
      size="small"
      {...rest}
    >
      <Items
        showAllToggle={showAllToggle}
        onToggleAll={onToggleAll}
        interests={interests}
      />
    </PickList>
  );
};

InterestsGrid.defaultProps = {
  cols: 4,
};

export default InterestsGrid;
