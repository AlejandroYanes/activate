import React, { FunctionComponent } from 'react';
import { CategoryModel } from 'models/category';
import { PickItem } from 'components/base-components/PickList';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

interface Props {
  interests: CategoryModel[];
}

const PlainGrid: FunctionComponent<Props> = (props): any => {
  const { interests } = props;

  return interests.map(({ id, name, icon }) => (
    <PickItem key={id} value={id}>
      <SvgIcon
        icon={icon.toUpperCase() as Icons}
        color="BRAND_FONT"
        size="x-large"
      />
      <Text color="brand" weight="bold" padding="4px 4px 0 4px" ellipsis>{name}</Text>
    </PickItem>
  ));
};

export default PlainGrid;
