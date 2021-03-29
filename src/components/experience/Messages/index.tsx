import React, { FunctionComponent, ReactNode, useState } from 'react';
import { getEventValue } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import FlexBox from 'components/base-components/FlexBox';
import Conversation from './Conversation';
import {
  Messages as StyledMessages,
  Footer,
  ActiveDot,
  AvatarSection,
  Content,
  Header,
  TextBox,
} from './styled/messages';

interface Props {
  user: {
    avatarUrl: string;
    name: string;
    active: boolean;
  };
  leftActions?: ReactNode;
  rightActions?: ReactNode;
  viewMode?: 'page' | 'panel' | 'mobile';
  inverseColors?: boolean;
}

const Messages: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const {
    user: { avatarUrl, name, active },
    leftActions,
    rightActions,
    viewMode,
    inverseColors,
  } = props;
  const [message, setMessage] = useState('');

  return (
    <StyledMessages viewMode={viewMode}>
      <Header viewMode={viewMode}>
        {leftActions}
        <AvatarSection>
          <Avatar icon={avatarUrl} />
          <RenderIf condition={active}>
            <ActiveDot />
          </RenderIf>
        </AvatarSection>
        <FlexBox direction="column" padding="0 8px" grow>
          <Text>{name}</Text>
          <Text size="small" color="secondary" margin="4px 0 0">active 10min ago</Text>
        </FlexBox>
        {rightActions}
      </Header>
      <Content>
        <Conversation inverseColors={inverseColors} />
      </Content>
      <Footer viewMode={viewMode}>
        <TextBox
          autosize
          rows={1}
          maxLength={250}
          value={message}
          onChange={(event) => setMessage(getEventValue(event))}
          placeholder="Type your message here"
        />
        <IconButton
          onClick={() => undefined}
          icon={Icons.SEND}
          color={colors.ACCENT}
          buttonColor="accent"
          size="large"
        />
      </Footer>
    </StyledMessages>
  );
};

export default Messages;
