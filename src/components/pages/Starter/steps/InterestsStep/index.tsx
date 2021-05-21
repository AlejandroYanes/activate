import React, { FunctionComponent, useState } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import { PickItem, PickList } from 'components/base-components/PickList';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Content, Step } from '../../styled';
import Illustration from '../Illustration';
import { FinishButton } from './styled';

interface Props {
  onNext: () => void;
  isLoading?: boolean;
}

const colsMap = {
  [Layout.DESKTOP]: 4,
  [Layout.TABLET]: 4,
  [Layout.MOBILE]: 3,
};

const InterestsStep: FunctionComponent<Props> = (props) => {
  const { isLoading, onNext } = props;
  const colors = useAppColors();
  const layout = useAppLayout();
  const [interests, setInterests] = useState([]);

  return (
    <Step>
      <Content>
        <Title level={2}>{`Tell us what you're looking for`}</Title>
        <PickList
          onChange={setInterests}
          value={interests}
          layout="grid"
          size="small"
          cols={colsMap[layout]}
          color="brand"
          padding="20px 0 0 0"
          multiple
        >
          <PickItem value={Icons.MUSIC}>
            <SvgIcon
              icon={Icons.MUSIC}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Music</Text>
          </PickItem>
          <PickItem value={Icons.VIDEO}>
            <SvgIcon
              icon={Icons.VIDEO}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Movies</Text>
          </PickItem>
          <PickItem value={Icons.CAMERA}>
            <SvgIcon
              icon={Icons.CAMERA}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Photos</Text>
          </PickItem>
          <PickItem value={Icons.PALETTE}>
            <SvgIcon
              icon={Icons.PALETTE}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Art</Text>
          </PickItem>
          <PickItem value={Icons.FLASK}>
            <SvgIcon
              icon={Icons.FLASK}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Science</Text>
          </PickItem>
          <PickItem value={Icons.HEART_BEAT}>
            <SvgIcon
              icon={Icons.HEART_BEAT}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Health</Text>
          </PickItem>
          <PickItem value={Icons.BOOK_OPEN}>
            <SvgIcon
              icon={Icons.BOOK_OPEN}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Reading</Text>
          </PickItem>
          <PickItem value={Icons.RESTAURANT}>
            <SvgIcon
              icon={Icons.RESTAURANT}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Cooking</Text>
          </PickItem>
          <PickItem value={Icons.PET}>
            <SvgIcon
              icon={Icons.PET}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Pets</Text>
          </PickItem>
          <PickItem value={Icons.FASHION}>
            <SvgIcon
              icon={Icons.FASHION}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Fashion</Text>
          </PickItem>
          <PickItem value={Icons.BASKETBALL}>
            <SvgIcon
              icon={Icons.BASKETBALL}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Sports</Text>
          </PickItem>
          <PickItem value={Icons.GLASS_MARTINI}>
            <SvgIcon
              icon={Icons.GLASS_MARTINI}
              color={colors.BRAND_FONT}
              size="x-large"
            />
            <Text color="brand">Night Out</Text>
          </PickItem>
        </PickList>
        <FinishButton
          label="Finish"
          onClick={onNext}
          isLoading={isLoading}
          variant="fill"
        />
      </Content>
      <Illustration step={3} />
    </Step>
  );
};

export default InterestsStep;
