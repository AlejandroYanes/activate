import React, { FunctionComponent } from 'react';
import { getMonthLabel, PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Avatar from 'components/base-components/Avatar';
import Button from 'components/base-components/Button';
import { Card, Header, Title, Address, Date, Divider, Footer } from './styled';
import { Avatars, Users } from '../PresentationCard/styled';

interface Props extends PositionProps {
  title: string;
  address: string;
  date: Date;
  isBooked: boolean;
}

const avatars = [
  { icon: (<Avatar icon="user1" />) },
  { icon: (<Avatar icon="user2" />) },
  { icon: (<Avatar icon="user6" />) },
];

const SummaryCard: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { title, address, date, isBooked, ...positionProps } = props;

  return (
    <Card {...positionProps}>
      <Header>
        <Date>
          <span>{`${getMonthLabel(date).slice(0, 3)} ${date.getDate()}`}</span>
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
      <Title>{title}</Title>
      <Address>
        <SvgIcon icon={Icons.MAP_PIN} color={Colors.FONT} />
        <span>{address}</span>
      </Address>
      <Divider />
      <Footer>
        <Users>
          <Avatars avatars={avatars} maxAvatars={3} />
          <span>+16k</span>
        </Users>
        <Button onClick={() => undefined} label="View" variant="flat" color="accent" sm />
      </Footer>
    </Card>
  );
};

export default SummaryCard;
