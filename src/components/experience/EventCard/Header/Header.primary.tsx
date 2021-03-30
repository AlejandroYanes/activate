import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Title, Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import ActionsMenu from '../ActionsMenu';
import { DateBadge } from './styled/header.primary';
import { HeaderProps } from './index';

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const colors = useAppColors();
  const { date, title, address, author } = props;

  return (
    <FlexBox>
      <DateBadge>
        <span>{getMonthLabel(date).slice(0, 3)}</span>
        <span>{date.getDate()}</span>
      </DateBadge>
      <FlexBox grow height="100%" direction="column" padding="0 24px 0 10px">
        <Link to="/event-details">
          <Title level={3} padding="0">{title}</Title>
        </Link>
        <FlexBox align="center" margin="14px 0 0 0">
          <SvgIcon icon={Icons.MAP_PIN} color={colors.FONT} />
          <Text padding="0 0 0 6px">{address}</Text>
        </FlexBox>
      </FlexBox>
      <ActionsMenu {...author} />
    </FlexBox>
  );
};

export default PrimaryHeader;
