import React, { FunctionComponent } from 'react';
import { CategoryModel } from 'models/category';
import { PositionProps } from 'helpers';
import { PickList } from 'components/base-components/PickList';
import LoadingScreen from 'components/experience/LoadingScreen';
import { NoConnectionScreen } from 'components/experience/ErrorScreen';
import PlainGrid from './PlainGrid';
import SectionedGrid from './SectionedGrid';

interface Props extends PositionProps {
  loading?: boolean;
  errored?: boolean;
  value?: string | string[];
  onChange?: (value) => void;
  cols?: number;
  multiple?: boolean;
  readonly?: boolean;
  plain?: boolean;
  interests: CategoryModel[];
}

const InterestsGrid: FunctionComponent<Props> = (props): any => {
  const { loading, errored, interests, plain, ...rest } = props;

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
      <Items interests={interests} />
    </PickList>
  );
};

InterestsGrid.defaultProps = {
  cols: 4,
};

export default InterestsGrid;
