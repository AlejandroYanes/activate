import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

interface Props extends PositionProps {
  value?: string | string[];
  onChange?: (value) => void;
  cols?: number;
  multiple?: boolean;
  readonly?: boolean;
  interests: { name: string, icon: Icons }[];
}

const InterestsGrid: FunctionComponent<Props> = (props): any => {
  const { interests, ...rest } = props;
  const colors = useAppColors();

  const items = interests.map(({ name, icon }) => (
    <PickItem key={icon} value={icon}>
      <SvgIcon
        icon={icon}
        color={colors.BRAND_FONT}
        size="x-large"
      />
      <Text color="brand" padding="4px 0 0 0">{name}</Text>
    </PickItem>
  ));

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

InterestsGrid.defaultProps = {
  cols: 4,
};

export default InterestsGrid;
