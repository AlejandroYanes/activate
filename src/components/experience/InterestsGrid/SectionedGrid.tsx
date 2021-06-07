import React, { FunctionComponent, Fragment } from 'react';
import { CategoryModel } from 'models/category';
import { useAppColors } from 'components/providers/Theme';
import { PickItem } from 'components/base-components/PickList';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import PlainGrid from './PlainGrid';
import { SectionTitle, Interest } from './styled';

interface Props {
  interests: CategoryModel[];
}

const SectionedGrid: FunctionComponent<Props> = (props): any => {
  const { interests } = props;
  const colors = useAppColors();

  return interests.map(({ id, name, icon, subcategories }) => (
    <Fragment key={id}>
      <SectionTitle  size="large">{name}</SectionTitle>
      <PickItem value={id} color="accent">
        <Interest>
          <SvgIcon
            icon={icon as Icons}
            color={colors.ACCENT_FONT}
            size="x-large"
          />
          <Text color="accent" padding="4px 0 0 0" ellipsis>{name}</Text>
        </Interest>
      </PickItem>
      <PlainGrid interests={subcategories} />
    </Fragment>
  ));
};

export default SectionedGrid;
