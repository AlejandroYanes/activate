import React, { FunctionComponent, ReactNode } from 'react';
import { Paragraph } from 'components/base-components/Typography';
import Info from './Info';
import { Actions, Card, StyledAvatar } from './styled';

interface Props {
  image: string;
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
    image,
    action,
    bio,
    children,
    ...rest
  } = props;

  return (
    <Card>
      <StyledAvatar size="x-large" icon={image} />
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
