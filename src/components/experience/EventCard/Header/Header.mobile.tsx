import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import ActionsMenu from '../ActionsMenu';
import { HeaderProps } from './index';
import { DateBadge } from './styled/header.mobile';

const textStyle = { flex: 1 };

const MobileHeader: FunctionComponent<HeaderProps> = (props) => {
  const { date, address, title, author } = props;

  return (
    <FlexBox direction="column" align="flex-start" grow>
      <FlexBox align="flex-start">
        <DateBadge>
          <span>{getMonthLabel(date).slice(0, 3)}</span>
          <span>{date.getDate()}</span>
        </DateBadge>
        <Link to="#event-details">
          <Title level={3}>{title}</Title>
        </Link>
        <ActionsMenu {...author} />
      </FlexBox>
      <FlexBox align="flex-start" padding="6px 0 0 10px">
        <SvgIcon icon={Icons.MAP_PIN} width={16} />
        <Text size="small" padding="0 6px 0 12px" style={textStyle}>{address}</Text>
      </FlexBox>
    </FlexBox>
  );
};

export default MobileHeader;
