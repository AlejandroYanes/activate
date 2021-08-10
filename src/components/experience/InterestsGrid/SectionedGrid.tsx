import React, { Fragment, FunctionComponent } from 'react';
import { CategoryModel } from 'models/category';
import { Text } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import PlainGrid from './PlainGrid';
import { SectionTitle } from './styled';

interface Props {
  interests: CategoryModel[];
  showAllToggle?: boolean;
  onToggleAll?: (category) => void;
}

const SectionedGrid: FunctionComponent<Props> = (props): any => {
  const { interests, showAllToggle, onToggleAll } = props;

  return interests.map(({ id, name, subcategories }) => (
    <Fragment key={id}>
      <SectionTitle justify="space-between" width="100%">
        <Text  size="large">{name}</Text>
        <RenderIf condition={showAllToggle}>
          <Button
            onClick={() => onToggleAll(id)}
            label="Select All"
            variant="outline"
            color="accent"
            padding="0 8px"
            sm
          />
        </RenderIf>
      </SectionTitle>
      <PlainGrid interests={subcategories} />
    </Fragment>
  ));
};

export default SectionedGrid;
