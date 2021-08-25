import React, { FunctionComponent, Fragment } from 'react';
import { Text } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import { PickList } from 'components/base-components/PickList';
import PlainGrid from './PlainGrid';
import { SectionTitle } from './styled';
import { GridProps } from './index';


const SectionedGrid: FunctionComponent<GridProps> = (props): any => {
  const { interests, value, onToggleAll, ...rest } = props;

  const items = interests.map(({ id, name, subcategories }) => {
    const areAllSubsSelected = subcategories.every(
      sub => (value as string[]).some(cat => cat === sub.id)
    );

    return (
      <Fragment key={id}>
        <SectionTitle justify="space-between" width="100%">
          <Text  size="large">{name}</Text>
          <RenderIf condition={!!onToggleAll}>
            <Button
              onClick={() => onToggleAll(id, areAllSubsSelected)}
              label={areAllSubsSelected ? 'Clear All' : 'Select All'}
              variant="outline"
              color="accent"
              padding="0 8px"
              sm
            />
          </RenderIf>
        </SectionTitle>
        <PlainGrid interests={subcategories} asFragment />
      </Fragment>
    );
  });

  return (
    <PickList
      layout="grid"
      color="brand"
      size="small"
      value={value}
      {...rest}
    >
      {items}
    </PickList>
  );
};

export default SectionedGrid;
