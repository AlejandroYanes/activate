import React, { FunctionComponent } from 'react';
import { getMonthLabel, PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Button from 'components/base-components/Button';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Card, Header, Title, Address, Date, Divider, Footer } from './styled';

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
        <AvatarGroup icons={avatars} label="+ 16k" size="x-small" />
        <Button onClick={() => undefined} label="View" variant="flat" color="accent" sm />
      </Footer>
    </Card>
  );
};

export default SummaryCard;
