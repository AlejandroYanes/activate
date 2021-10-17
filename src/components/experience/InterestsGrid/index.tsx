import { FunctionComponent } from 'react';
import { PositionProps } from 'activate-components';
import { CategoryModel } from 'models/category';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PlainGrid from './PlainGrid';
import SectionedGrid from './SectionedGrid';
import PagedGrid from './PagedGrid';

export interface GridProps extends PositionProps {
  interests: CategoryModel[];
  value?: string | string[];
  onChange?: (value) => void;
  onToggleAll?: (category, areAllSubsSelected?: boolean) => void;
  mode?: 'plain' | 'sectioned' | 'paged';
  cols?: number;
  multiple?: boolean;
  readonly?: boolean;
  loading?: boolean;
  errored?: boolean;
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

  const Grid = gridMap[mode];

  return <Grid {...rest} />;
};

InterestsGrid.defaultProps = {
  cols: 4,
  mode: 'plain',
};

export default InterestsGrid;
