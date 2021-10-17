import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  AbsoluteContent,
  Avatar,
  AvatarGroup,
  Button,
  FlexBox,
  LinkButton,
  RenderIf,
  SvgIcon,
  Text,
  Title,
  formatAmount
} from 'activate-components';
import { ConsumerModel } from 'models/user';
import { Card } from './styled';
import useUserState from './state';

interface Props {
  user: ConsumerModel;
}

const noFriends = <FlexBox height={34} mT />;

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
    name,
    userName,
    avatar,
    friends,
    count: {
      following,
      friends: friendsCount,
    },
  } = user;

  const link = `user/${userName}`;
  const avatars = friends.map(f => f.avatar);

  return (
    <Card>
      <RenderIf condition={isMyFriend}>
        <AbsoluteContent top={16} right={16}>
          <SvgIcon icon="STAR_FILLED" color="BRAND_FONT" />
        </AbsoluteContent>
      </RenderIf>
      <Avatar src={avatar} size="large" />
      <Link to={link}>
        <FlexBox direction="column" align="center">
          <Title level={3} weight="bold" align="center" padding="8px 0" ellipsis>
            {name}
          </Title>
          <Text align="center">@{userName}</Text>
        </FlexBox>
      </Link>
      <FlexBox align="center" mT>
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text>Following</Text>
          <Title level={3} weight="bold">{formatAmount(following)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text>Friends</Text>
          <Title level={3} weight="bold">{formatAmount(friendsCount)}</Title>
        </FlexBox>
      </FlexBox>
      <RenderIf
        condition={avatars.length > 0}
        fallback={noFriends}
      >
        <AvatarGroup icons={avatars} mT />
      </RenderIf>
      <FlexBox align="center" mT>
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
