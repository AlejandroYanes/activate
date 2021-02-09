import React, { FunctionComponent, ReactNode } from 'react';
import { formatAmount } from 'helpers';
import { Paragraph, Text, Title } from 'components/base-components/Typography';
import { Actions, Attr, Card, Info, StyledAvatar } from './styled';

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
    userName,
    name,
    leftStatLabel,
    leftStatValue,
    rightStatLabel,
    rightStatValue,
    action,
    bio,
    children,
  } = props;

  return (
    <Card>
      <StyledAvatar size="x-large" icon={image} />
      <Actions>
        {action}
      </Actions>
      <Info>
        <Attr>
          <Text>{leftStatLabel}</Text>
          <Title level={2} color="accent">{formatAmount(leftStatValue)}</Title>
        </Attr>
        <Attr>
          <Text>{userName}</Text>
          <Title level={2} align="center" color="brand">{name}</Title>
        </Attr>
        <Attr>
          <Text>{rightStatLabel}</Text>
          <Title level={2} color="accent">{formatAmount(rightStatValue)}</Title>
        </Attr>
      </Info>
      <Paragraph mT>{bio}</Paragraph>
      {children}
    </Card>
  );
};

export default ProfileCard;
