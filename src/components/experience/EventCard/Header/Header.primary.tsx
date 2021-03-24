import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Title, Text } from 'components/base-components/Typography';
import ActionsMenu from '../ActionsMenu';
import { Address, DateBadge, Header, TitleAndAddress } from './styled/header.primary';
import { HeaderProps } from './index';

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const colors = useAppColors();
  const { date, title, address, author } = props;

  return (
    <Header>
      <DateBadge>
        <span>{getMonthLabel(date).slice(0, 3)}</span>
        <span>{date.getDate()}</span>
      </DateBadge>
      <TitleAndAddress>
        <Link to="/event-details">
          <Title level={3}>{title}</Title>
        </Link>
        <Address>
          <SvgIcon icon={Icons.MAP_PIN} color={colors.FONT} />
          <Text>{address}</Text>
        </Address>
      </TitleAndAddress>
      <ActionsMenu {...author} />
    </Header>
  );
};

export default PrimaryHeader;
