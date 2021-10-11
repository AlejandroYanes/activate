import React, { FunctionComponent } from 'react';
import { formatShortDate } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon from 'components/base-components/SvgIcon';
import Badge from 'components/base-components/Badge';
import { HeaderProps } from './index';

const MobileHeader: FunctionComponent<HeaderProps> = (props) => {
  const { date, address, title } = props;

  return (
    <FlexBox direction="column" align="stretch" padding="8px 0">
      <FlexBox ellipsis>
        <Title level={3} padding="0 0 8px 0">{title}</Title>
      </FlexBox>
      <FlexBox margin="8px 0 0 0" ellipsis>
        <Badge color="light">
          <FlexBox ellipsis>
            <SvgIcon icon="CALENDAR" color="FONT" width={20} height={20} />
            <Text padding="0 0 0 6px" ellipsis>{formatShortDate(new Date(date))}</Text>
          </FlexBox>
        </Badge>
        <Badge color="light" margin="0 8px" ellipsis>
          <FlexBox ellipsis>
            <SvgIcon icon="MAP_PIN" color="FONT" width={20} height={20} />
            <Text padding="0 0 0 6px" ellipsis>{address}</Text>
          </FlexBox>
        </Badge>
      </FlexBox>
    </FlexBox>
  );
};

export default MobileHeader;
