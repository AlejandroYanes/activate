import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ConsumerModel } from 'models/user';
import { formatAmount } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Button, LinkButton } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import SvgIcon from 'components/base-components/SvgIcon';
import { Card } from './styled';
import useUserState from './state';

interface Props {
  user: ConsumerModel;
}

const Separator = () => <div style={{ flex: 1 }} />;

const UserCard: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const {
    state: {
      isPending,
      isPendingForMe,
      isMyFriend,
    },
    actions: {
      sendFriendRequest,
      acceptFriendRequest,
    },
  } = useUserState(user);

  const {
    id,
    name,
    userName,
    avatar,
    friends,
    count: {
      following,
      friends: friendsCount,
    },
  } = user;
  const layout = useAppLayout();
  const link = layout === Layout.MOBILE ? `#user/${id}` : `user/${id}`;
  const avatars = friends.map(f => f.avatar);

  return (
    <Card>
      <RenderIf condition={isMyFriend}>
        <AbsoluteContent top={16} right={16}>
          <SvgIcon icon="STAR_FILLED" color="BRAND_FONT" />
        </AbsoluteContent>
      </RenderIf>
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
            onClick={acceptFriendRequest}
            label="Accept Friend"
            variant="fill"
            color="brand"
          />
        </RenderIf>
        <RenderIf condition={isPending}>
          <FlexBox height={40} align="center" justify="center">
            <Text size="large">
              You sent a friend request.
            </Text>
          </FlexBox>
        </RenderIf>
        <RenderIf condition={!isMyFriend && !isPending && !isPendingForMe}>
          <Button
            onClick={sendFriendRequest}
            label="Add Friend"
            variant="fill"
            color="brand"
          />
        </RenderIf>
      </FlexBox>
    </Card>
  );
};

export default UserCard;
