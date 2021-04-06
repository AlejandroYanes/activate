import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Title, Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { DateBadge } from './styled/header.primary';
import { HeaderProps } from './index';

const linkStyles = { width: '100%' };

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const colors = useAppColors();
  const { date, title, address, author, hideAuthor } = props;

  return (
    <FlexBox>
      <DateBadge>
        <span>{getMonthLabel(date).slice(0, 3)}</span>
        <span>{date.getDate()}</span>
      </DateBadge>
      <FlexBox grow height="100%" direction="column" padding="0 20px 0 10px" ellipsis>
        <Link to="/event-details" style={linkStyles}>
          <Title level={3} padding="0" ellipsis>{title}</Title>
        </Link>
        <FlexBox align="flex-start" margin="10px 0 0 0" width="100%">
          <SvgIcon icon={Icons.MAP_PIN} color={colors.FONT} />
          <Text padding="2px 0 0 6px" ellipsis>{address}</Text>
        </FlexBox>
      </FlexBox>
      <RenderIf condition={!hideAuthor}>
        <Link to="#publisher">
          <Avatar icon={author.avatarUrl} />
        </Link>
      </RenderIf>
    </FlexBox>
  );
};

export default PrimaryHeader;
