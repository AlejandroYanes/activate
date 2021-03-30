import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import ActionsMenu from '../ActionsMenu';
import { HeaderProps } from './index';
import { DateBadge } from './styled/header.mobile';

const titleStyles: any = { whiteSpace: 'normal' };

const MobileHeader: FunctionComponent<HeaderProps> = (props) => {
  const colors = useAppColors();
  const { date, address, title, author } = props;

  return (
    <FlexBox>
      <DateBadge>
        <span>{getMonthLabel(date).slice(0, 3)}</span>
        <span>{date.getDate()}</span>
      </DateBadge>
      <FlexBox
        grow
        ellipsis
        height="100%"
        direction="column"
        align="stretch"
        padding="0 14px 0 6px"
      >
        <Link to="#event-details">
          <Title level={3} padding="0" style={titleStyles}>{title}</Title>
        </Link>
        <FlexBox align="center" margin="4px 0 0 0" ellipsis>
          <SvgIcon width={16} icon={Icons.MAP_PIN} color={colors.FONT} />
          <Text size="small" padding="0 0 0 6px" ellipsis>{address}</Text>
        </FlexBox>
      </FlexBox>
      <ActionsMenu {...author} />
    </FlexBox>
  );
};

export default MobileHeader;
