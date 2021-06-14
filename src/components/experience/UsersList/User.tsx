import React, { FunctionComponent, useCallback, useRef } from 'react';
import { UserModel } from 'models/user';
import { UserTalkModel } from 'models/message';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import Checkbox from 'components/base-components/Checkbox';
import { ActiveDot, AvatarSection, Info, UserItem } from './styled';

interface Props {
  user: UserModel | UserTalkModel;
  showSelection?: boolean;
  isSelected?: boolean;
  actions?: (props: { user }) => any;
  onClick: (event) => void;
}

const User: FunctionComponent<Props> = (props) => {
  const {
    user,
    showSelection,
    isSelected,
    actions: Actions,
    onClick,
  } = props;

  const {
    id,
    avatar,
    name,
    lastName,
    userName,
    lastMessage,
  } = user as (UserModel & UserTalkModel);
  const itemRef = useRef(undefined);

  const handleClick = useCallback((event) => {
    if (event.target === itemRef.current) {
      onClick(user);
    }
  }, [onClick]);

  return (
    <UserItem data-id={id} role="button" onClick={handleClick} ref={itemRef}>
      <RenderIf condition={showSelection}>
        <Checkbox value={isSelected} padding="0 6px 0 4px" />
      </RenderIf>
      <AvatarSection>
        <Avatar src={avatar} />
        <RenderIf condition={false}>
          <ActiveDot data-el="active-dot" />
        </RenderIf>
      </AvatarSection>
      <Info>
        <Text align="left">{`${name} ${lastName}`}</Text>
        <Text
          align="left"
          size="small"
          color="secondary"
          padding="4px 0"
          ellipsis
        >
          {lastMessage || `@${userName}`}
        </Text>
      </Info>
      <RenderIf condition={!!Actions}>
        <Actions user={user} />
      </RenderIf>
    </UserItem>
  );
};

export default User;
