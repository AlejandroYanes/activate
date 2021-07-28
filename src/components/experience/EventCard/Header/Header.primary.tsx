import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatShortDate } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { Button } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon from 'components/base-components/SvgIcon';
import Badge from 'components/base-components/Badge';
import { HeaderProps } from './index';

const linkStyles = { alignSelf: 'flex-start' };

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const { date, title, address, hasDescription, showMore, toggleMoreContent } = props;

  return (
    <FlexBox direction="column" align="stretch" padding="8px 0" ellipsis>
      <Link to="/event-details" style={linkStyles}>
        <Title level={3} padding="0 0 8px 0" ellipsis>{title}</Title>
      </Link>
      <FlexBox align="center" ellipsis>
        <Badge color="light">
          <FlexBox>
            <SvgIcon icon="CALENDAR" color="FONT" width={20} height={20} />
            <Text padding="0 0 0 6px" ellipsis>{formatShortDate(new Date(date))}</Text>
          </FlexBox>
        </Badge>
        <Badge color="light" margin="0 16px 0 8px" ellipsis>
          <FlexBox ellipsis>
            <SvgIcon icon="MAP_PIN" color="FONT" width={20} height={20} />
            <Text padding="0 0 0 6px" ellipsis>{address}</Text>
          </FlexBox>
        </Badge>
        <RenderIf condition={hasDescription}>
          <Button
            sm
            onClick={toggleMoreContent}
            label={showMore ? 'Show less' : 'Show more'}
            variant="flat"
            margin="0 0 0 auto"
          />
        </RenderIf>
      </FlexBox>
    </FlexBox>
  );
};

export default PrimaryHeader;
