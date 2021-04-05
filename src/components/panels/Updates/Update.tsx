import React, { FunctionComponent } from 'react';
import { getRelativeTime } from 'helpers';
import { Text } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import Message from './Message';
import { StyledNotification, UnReadDot } from './styled/update';
import { UpdateType, EventLinkingUpdate, UserLinkingUpdate } from './types';

interface Props {
  type: UpdateType;
  date: Date;
  content: EventLinkingUpdate | UserLinkingUpdate;
  read: boolean;
}

const today = new Date();

const Update: FunctionComponent<Props> = (props) => {
  const { date, type, content, read, ...rest } = props;

  return (
    <StyledNotification {...rest}>
      <Avatar icon={content.user.avatarUrl} size="x-small" />
      <RenderIf condition={read}>
        <UnReadDot />
      </RenderIf>
      <FlexBox direction="column" padding="0 0 0 6px">
        <Message type={type} content={content} />
        <Text
          size="small"
          color="secondary"
          margin="6px 0 0 0"
        >
          {getRelativeTime(today, date)}
        </Text>
      </FlexBox>
    </StyledNotification>
  );
};

export default Update;
