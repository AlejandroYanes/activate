import React, { FunctionComponent } from 'react';
import { CategoryModel } from 'models/category';
import { PositionProps } from 'helpers';
import { PickList } from 'components/base-components/PickList';
import PlainGrid from './PlainGrid';
import SectionedGrid from './SectionedGrid';

interface Props extends PositionProps {
  value?: string | string[];
  onChange?: (value) => void;
  cols?: number;
  multiple?: boolean;
  readonly?: boolean;
  plain?: boolean;
  interests: CategoryModel[];
}

const InterestsGrid: FunctionComponent<Props> = (props): any => {
  const { interests, plain, ...rest } = props;
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
