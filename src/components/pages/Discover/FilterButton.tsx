import React, { FunctionComponent, useCallback, useState } from 'react';
import { Button } from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';

enum Filters {
  DEFAULT = 'Sort by',
  FRIENDS = 'Friends',
  HOT = 'Trending',
  DATE = 'By Date',
  CUSTOM = 'Custom',
}

const iconMap: { [filter: string]: Icons } = {
  [Filters.DEFAULT]: 'SORT',
  [Filters.HOT]: 'FIRE',
  [Filters.DATE]: 'CALENDAR',
  [Filters.CUSTOM]: 'PENCIL',
  [Filters.FRIENDS]: 'USERS',
};

const FilterButton: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState(Filters.DEFAULT);

  const toggleModal = useCallback(() => setIsVisible(old => !old), []);

  const handleChange = useCallback((nextFilter) => {
    setFilter(nextFilter);
    setIsVisible(false);
  }, []);

  const clearFilters = useCallback(() => {
    setFilter(Filters.DEFAULT);
    setIsVisible(false);
  }, []);

  return (
    <>
      <Button
        variant={filter !== Filters.DEFAULT ? 'fill' : 'flat'}
        leftIcon={iconMap[filter]}
        label={filter}
        onClick={toggleModal}
      />
      <Modal title="Sort by" visible={isVisible} onClose={toggleModal} size="auto">
        <FlexBox direction="column" align="center" padding="0 8px">
          <PickList
            value={filter}
            onChange={handleChange}
            layout="grid"
            size="small"
            cols={2}
          >
            <PickItem value={Filters.HOT}>
              <SvgIcon icon={iconMap[Filters.HOT]} size="x-large" />
              <Text padding="6px 0">{Filters.HOT}</Text>
            </PickItem>
            <PickItem value={Filters.FRIENDS}>
              <SvgIcon icon={iconMap[Filters.FRIENDS]} size="x-large" />
              <Text padding="6px 0">{Filters.FRIENDS}</Text>
            </PickItem>
            <PickItem value={Filters.DATE}>
              <SvgIcon icon={iconMap[Filters.DATE]} size="x-large" />
              <Text padding="6px 0">{Filters.DATE}</Text>
            </PickItem>
            <PickItem value={Filters.CUSTOM}>
              <SvgIcon icon={iconMap[Filters.CUSTOM]} size="x-large" />
              <Text padding="6px 0">{Filters.CUSTOM}</Text>
            </PickItem>
          </PickList>
          <Button
            margin="24px 0 0 auto"
            label="Cancel"
            variant="fill"
            color="background"
            onClick={clearFilters}
          />
        </FlexBox>
      </Modal>
    </>
  );
};

export default FilterButton;
