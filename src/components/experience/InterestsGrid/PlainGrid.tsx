import React, { FunctionComponent } from 'react';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { GridProps } from './index';

interface Props extends GridProps {
  asFragment?: boolean;
}

const PlainGrid: FunctionComponent<Props> = (props): any => {
  const {
    interests,
    asFragment,
    onToggleAll: _onToggleAll,
    ...rest
  } = props;

  const items = interests.map(({ id, name, icon }) => (
    <PickItem key={id} value={id}>
      <SvgIcon
        icon={icon.toUpperCase() as Icons}
        color="BRAND_FONT"
        size="x-large"
      />
      <Text color="brand" weight="bold" padding="4px 4px 0 4px" ellipsis>{name}</Text>
    </PickItem>
  ));

  if (asFragment) {
    return items;
  }

  return (
    <PickList
      layout="grid"
      color="brand"
      size="small"
      {...rest}
    >
      {items}
    </PickList>
  );
};

export default PlainGrid;
