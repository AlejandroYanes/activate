import React, { FunctionComponent } from 'react';
import { CategoryModel } from 'models/category';
import { PositionProps } from 'helpers';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PlainGrid from './PlainGrid';
import SectionedGrid from './SectionedGrid';
import PagedGrid from './PagedGrid';

export interface GridProps extends PositionProps {
  interests: CategoryModel[];
  value?: string | string[];
  onChange?: (value) => void;
  onToggleAll?: (category) => void;
  cols?: number;
  multiple?: boolean;
  readonly?: boolean;
  loading?: boolean;
  errored?: boolean;
  mode?: 'plain' | 'sectioned' | 'paged';
}

const gridMap = {
  'plain': PlainGrid,
  'sectioned': SectionedGrid,
  'paged': PagedGrid,
};

const InterestsGrid: FunctionComponent<GridProps> = (props): any => {
  const {
    loading,
    errored,
    mode,
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

  const Items = gridMap[mode];

  return <Items {...rest} />;
};

InterestsGrid.defaultProps = {
  cols: 4,
  mode: 'plain',
};

export default InterestsGrid;
