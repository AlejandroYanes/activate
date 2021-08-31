import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Button, LinkButton } from 'components/base-components/Button';
import { Card } from './styled';
import { formatAmount } from '../../../helpers';
import RenderIf from '../../base-components/RenderIf';

interface Props {
  user: ConsumerModel;
}

const Separator = () => <div style={{ flex: 1 }} />;

const UserCard: FunctionComponent<Props> = (props) => {
  const {
    user: {
      id,
      name,
      userName,
      avatar,
      friends,
      relationStatus,
      count: {
        following,
        friends: friendsCount,
      },
    },
  } = props;
  const layout = useAppLayout();

  const link = layout === Layout.MOBILE ? `#user/${id}` : `user/${id}`;
  const avatars = friends.map(f => f.avatar);

  const isMyFriend = (
    relationStatus === RelationshipStatus.ACCEPTED ||
    relationStatus === RelationshipStatus.MUTED
  );

  const isPendingForMe = relationStatus === RelationshipStatus.PENDING_FOR_ME;

  return (
    <Card>
      <Avatar src={avatar} size="large" margin="0 auto 8px" />
      <Link to={link}>
        <FlexBox direction="column" align="center">
          <Title level={3} align="center">{name}</Title>
          <Text align="center">@{userName}</Text>
        </FlexBox>
      </Link>
      <Separator />
      <FlexBox align="center" margin="28px auto 0">
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text color="secondary">Following</Text>
          <Title level={3}>{formatAmount(following)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text color="secondary">Friends</Text>
          <Title level={3}>{formatAmount(friendsCount)}</Title>
        </FlexBox>
      </FlexBox>
      <AvatarGroup icons={avatars} margin="28px auto 0" />
      <FlexBox align="center" margin="24px auto 0">
        <RenderIf condition={!isMyFriend && !isPendingForMe}>
          <Button
            onClick={() => undefined}
            label="Add Friend"
            variant="fill"
            color="brand"
          />
        </RenderIf>
        <RenderIf condition={isMyFriend}>
          <LinkButton
            to={link}
            label="View Profile"
            variant="outline"
            color="brand"
          />
        </RenderIf>
        <RenderIf condition={isPendingForMe}>
          <Button
            onClick={() => undefined}
            label="Accept Friend"
            variant="fill"
            color="brand"
          />
        </RenderIf>
      </FlexBox>
    </Card>
  );
};

export default UserCard;
