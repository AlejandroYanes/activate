import React, { FunctionComponent } from 'react';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import { ActiveDot, AvatarSection, Info, Talk as StyledTalk } from './styled/user';

interface Props {
  id: string;
  avatarUrl: string;
  active?: boolean;
  name: string;
  secondary?: string;
  onClick: (event) => void;
}

const User: FunctionComponent<Props> = (props) => {
  const { id, avatarUrl, active, name, secondary, onClick } = props;

  return (
    <StyledTalk data-id={id} role="button" onClick={onClick}>
      <AvatarSection>
        <Avatar icon={avatarUrl} />
        <RenderIf condition={active}>
          <ActiveDot />
        </RenderIf>
      </AvatarSection>
      <Info>
        <Text align="left">{name}</Text>
        <RenderIf condition={!!secondary}>
          <Text
            align="left"
            size="small"
            color="secondary"
            padding="4px 0"
            ellipsis
          >
            {secondary}
          </Text>
        </RenderIf>
      </Info>
    </StyledTalk>
  );
};

export default User;
