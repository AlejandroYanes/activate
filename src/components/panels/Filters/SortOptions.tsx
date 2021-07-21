import React, { FunctionComponent, useCallback, useState } from 'react';
import { Button } from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';
import { PickItem, PickList } from 'components/base-components/PickList';
import { Text } from 'components/base-components/Typography';
import SvgIcon from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';
import { Sorter, sorterIconMap } from './types';

interface Props {
  sortBy: Sorter;
  onChange: (sortBy: Sorter) => void;
}

const SortOptions: FunctionComponent<Props> = (props) => {
  const { sortBy, onChange } = props;
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = useCallback(() => setIsVisible(old => !old), []);

  const handleChange = useCallback((nextSorter) => {
    onChange(nextSorter);
    setIsVisible(false);
  }, []);

  const clearFilters = useCallback(() => {
    onChange(Sorter.DEFAULT);
    setIsVisible(false);
  }, []);

  return (
    <>
      <Button
        variant={sortBy !== Sorter.DEFAULT ? 'fill' : 'outline'}
        onClick={toggleModal}
        label={sortBy}
        sm
      />
      <Modal title="Sort by" visible={isVisible} onClose={toggleModal} size="auto">
        <FlexBox direction="column" align="center" padding="0 8px">
          <PickList
            value={sortBy}
            onChange={handleChange}
            layout="grid"
            size="small"
            cols={2}
          >
            <PickItem value={Sorter.HOT}>
              <SvgIcon
                icon={sorterIconMap[Sorter.HOT]}
                color="BRAND_FONT"
                size="x-large"
              />
              <Text color="brand" padding="6px 0">{Sorter.HOT}</Text>
            </PickItem>
            <PickItem value={Sorter.FRIENDS}>
              <SvgIcon
                icon={sorterIconMap[Sorter.FRIENDS]}
                color="BRAND_FONT"
                size="x-large"
              />
              <Text color="brand" padding="6px 0">{Sorter.FRIENDS}</Text>
            </PickItem>
            <PickItem value={Sorter.DATE}>
              <SvgIcon
                icon={sorterIconMap[Sorter.DATE]}
                color="BRAND_FONT"
                size="x-large"
              />
              <Text color="brand" padding="6px 0">{Sorter.DATE}</Text>
            </PickItem>
            <PickItem value={Sorter.LOCATION}>
              <SvgIcon
                icon={sorterIconMap[Sorter.LOCATION]}
                color="BRAND_FONT"
                size="x-large"
              />
              <Text color="brand" padding="6px 0">{Sorter.LOCATION}</Text>
            </PickItem>
          </PickList>
          <Button
            margin="24px 0 0 auto"
            label={sortBy !== Sorter.DEFAULT ? 'Clear' : 'Cancel'}
            variant="fill"
            color="background"
            onClick={clearFilters}
          />
        </FlexBox>
      </Modal>
    </>
  );
};

export default SortOptions;
