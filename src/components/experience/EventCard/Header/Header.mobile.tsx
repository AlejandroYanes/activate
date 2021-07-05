import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { HeaderProps } from './index';
import { DateBadge } from './styled/header.mobile';

const titleStyles: any = { whiteSpace: 'normal' };

const MobileHeader: FunctionComponent<HeaderProps> = (props) => {
  const { date, address, title, author, hideAuthor, readonly } = props;

  return (
    <FlexBox>
      <DateBadge>
        <span>{getMonthLabel(new Date(date)).slice(0, 3)}</span>
        <span>{new Date(date).getDate()}</span>
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
          <SvgIcon width={16} icon="MAP_PIN" color="FONT" />
          <Text size="small" padding="0 0 0 6px" ellipsis>{address}</Text>
        </FlexBox>
      </FlexBox>
      <RenderIf condition={!hideAuthor}>
        <RenderIf
          condition={!readonly}
          fallback={<Avatar src={author.avatar} size="medium" />}
        >
          <Link to="#publisher">
            <Avatar src={author.avatar} size="medium" />
          </Link>
        </RenderIf>
      </RenderIf>
    </FlexBox>
  );
};

export default MobileHeader;
