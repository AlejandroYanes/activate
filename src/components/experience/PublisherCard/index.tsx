import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { PublisherModel } from 'models/user';
import { formatAmount } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import AvatarGroup from 'components/base-components/AvatarGroup';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { Button, LinkButton } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import SvgIcon from 'components/base-components/SvgIcon';
import { Card } from './styled';
import usePublisherState from './state';

interface Props {
  user: PublisherModel;
}

const noFriends = <FlexBox height={34} mT />;

const PublisherCard: FunctionComponent<Props> = (props) => {
  const {
    user: {
      avatar,
      name,
      userName,
      count: {
        events,
        followers,
      },
      friends,
    },
  } = props;

  const {
    state: { following },
    actions: { follow },
  } = usePublisherState(props.user);

  const link = `/app/publisher/${userName}`;
  const avatars = friends.map(friend => friend.avatar);

  return (
    <Card>
      <RenderIf condition={following}>
        <AbsoluteContent top={16} right={16}>
          <SvgIcon icon="STAR_FILLED" color="BRAND_FONT" />
        </AbsoluteContent>
      </RenderIf>
      <Avatar src={avatar} size="large" margin="0 auto 8px" />
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
          <Text>Events</Text>
          <Title level={3} weight="bold">{formatAmount(events)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text>Followers</Text>
          <Title level={3} weight="bold">{formatAmount(followers)}</Title>
        </FlexBox>
      </FlexBox>
      <RenderIf condition={avatars.length > 0} fallback={noFriends}>
        <AvatarGroup icons={avatars} mT />
      </RenderIf>
      <FlexBox align="center" mT>
        <RenderIf condition={!following}>
          <Button
            onClick={follow}
            label="Follow"
            variant="fill"
            color="brand"
          />
        </RenderIf>
        <RenderIf condition={following}>
          <LinkButton
            to={link}
            label="View Profile"
            variant="outline"
            color="brand"
          />
        </RenderIf>
      </FlexBox>
    </Card>
  );
};

export default PublisherCard;
