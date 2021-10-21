import React, { FunctionComponent, ReactNode } from 'react';
import { Paragraph } from 'activate-components';
import Info from './Info';
import { Actions, Card, StyledAvatar } from './styled';

interface Props {
  avatar: string;
  name: string;
  userName: string;
  bio?: string;
  action?: ReactNode;
  leftStatLabel: string;
  leftStatValue: number;
  rightStatLabel: string;
  rightStatValue: number;
}

const ProfileCard: FunctionComponent<Props> = (props) => {
  const {
    avatar,
    action,
    bio,
    children,
    ...rest
  } = props;

  return (
    <Card>
      <StyledAvatar size="x-large" src={avatar} />
      <Actions>
        {action}
      </Actions>
      <Info {...rest} />
      <Paragraph mT>{bio}</Paragraph>
      {children}
    </Card>
  );
};

export default ProfileCard;
