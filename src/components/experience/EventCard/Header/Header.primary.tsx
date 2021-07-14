import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { getMonthLabel } from 'helpers';
import SvgIcon from 'components/base-components/SvgIcon';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { DateBadge } from './styled/header.primary';
import { HeaderProps } from './index';

const linkStyles = { width: '100%' };

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const { date, title, address, author, hideAuthor, readonly } = props;
  const isForThisYear = new Date(date).getFullYear() === new Date().getFullYear();

  return (
    <FlexBox>
      <DateBadge>
        <span data-short-date={isForThisYear}>
          {getMonthLabel(new Date(date))}
        </span>
        <span>{new Date(date).getDate()}</span>
      </DateBadge>
      <FlexBox grow height="100%" direction="column" padding="0 20px 0 10px" ellipsis>
        <Link to="/event-details" style={linkStyles}>
          <Title level={3} padding="0" ellipsis>{title}</Title>
        </Link>
        <FlexBox align="flex-start" margin="10px 0 0 0" width="100%">
          <SvgIcon icon="MAP_PIN" color="FONT" />
          <Text padding="4px 0 0 6px" ellipsis>{address}</Text>
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

export default PrimaryHeader;
