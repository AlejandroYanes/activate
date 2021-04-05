import React, { FunctionComponent, useCallback } from 'react';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import { ActiveDot, AvatarSection, Info, Talk as StyledTalk } from './styled/user';
import Checkbox from '../../base-components/Checkbox';

interface Props {
  user: {
    id: string;
    avatarUrl: string;
    active?: boolean;
    name: string;
    secondary?: string;
  };
  showSelection?: boolean;
  isSelected?: boolean;
  onClick: (event) => void;
}

const User: FunctionComponent<Props> = (props) => {
  const {
    user,
    showSelection,
    isSelected,
    onClick,
  } = props;

  const {
    id,
    avatarUrl,
    active,
    name,
    secondary,
  } = user;

  const handleClick = useCallback(() => onClick(user), [onClick]);

  return (
    <StyledTalk data-id={id} role="button" onClick={handleClick}>
      <RenderIf condition={showSelection}>
        <Checkbox value={isSelected} padding="0 6px 0 4px" />
      </RenderIf>
      <AvatarSection>
        <Avatar icon={avatarUrl} />
        <RenderIf condition={active}>
          <ActiveDot data-el="active-dot" />
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
