import React, { FunctionComponent } from 'react';
import { UpdateModel } from 'models/update';
import { getRelativeTime } from 'helpers';
import { Text } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import Message from './Message';
import { StyledNotification, UnReadDot } from './styled/update';

interface Props {
  data: UpdateModel;
}

const today = new Date();

const Update: FunctionComponent<Props> = (props) => {
  const { data: { date, type, user, event, read } } = props;

  return (
    <StyledNotification>
      <Avatar src={user.avatar} size="small" />
      <RenderIf condition={read}>
        <UnReadDot />
      </RenderIf>
      <FlexBox direction="column" padding="0 0 0 6px">
        <Message type={type} user={user} event={event} />
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
