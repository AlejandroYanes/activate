import React, { FunctionComponent } from 'react';
import { getMonthLabel, PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Button from 'components/base-components/Button';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Text, Title } from 'components/base-components/Typography';
import { Card, Header, Address, Date, Divider, Footer } from './styled';

interface Props extends PositionProps {
  title: string;
  address: string;
  date: Date;
  isBooked: boolean;
}

const avatars = ['user1', 'user2', 'user6'];

const SummaryCard: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { title, address, date, isBooked, ...positionProps } = props;

  return (
    <Card {...positionProps}>
      <Header>
        <Date>
          <Text size="small">{`${getMonthLabel(date).slice(0, 3)} ${date.getDate()}`}</Text>
        </Date>
        <IconButton
          buttonColor="success"
          variant="flat"
          icon={Icons.BOOKMARK_FILLED}
          color={Colors.ACCENT}
          secondaryColor={isBooked ? Colors.ACCENT : 'transparent'}
          onClick={() => undefined}
        />
      </Header>
      <Title level={3} mT mB>{title}</Title>
      <Address>
        <SvgIcon icon={Icons.MAP_PIN} color={Colors.FONT} />
        <Text>{address}</Text>
      </Address>
      <Divider />
      <Footer>
        <AvatarGroup icons={avatars} label="+ 16k" size="x-small" />
        <Button onClick={() => undefined} label="View" variant="flat" color="accent" sm />
      </Footer>
    </Card>
  );
};

export default SummaryCard;
