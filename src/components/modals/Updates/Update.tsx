import React, { FunctionComponent } from 'react';
import { Avatar, FlexBox, getRelativeTime, RenderIf, Text } from 'activate-components';
import { UpdateModel } from 'models/update';
import Message from './Message';
import { Update as StyledUpdate, Content, UnReadDot } from './styled';
import resolveLink from './resolve-link';

interface Props {
  data: UpdateModel;
}

const Update: FunctionComponent<Props> = (props) => {
  const { data } = props;
  const { sentOn, type, creator, event, seen } = data;
  const link = resolveLink(data);

  return (
    <StyledUpdate>
      <Content to={link} replace>
        <Avatar src={creator.avatar} size="small" />
        <RenderIf condition={!seen}>
          <UnReadDot />
        </RenderIf>
        <FlexBox direction="column" padding="0 0 0 6px">
          <Message type={type} user={creator} event={event} />
          <Text
            size="small"
            color="secondary"
            margin="6px 0 0 0"
          >
            {getRelativeTime(new Date(sentOn))}
          </Text>
        </FlexBox>
      </Content>
    </StyledUpdate>
  );
};

export default Update;
