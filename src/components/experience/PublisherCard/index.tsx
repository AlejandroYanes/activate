import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { PublisherModel } from 'models/user';
import { formatAmount } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
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

const Separator = () => <div style={{ flex: 1 }} />;

const PublisherCard: FunctionComponent<Props> = (props) => {
  const {
    user: {
      id,
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

  const layout = useAppLayout();
  const link = layout === Layout.MOBILE ? `#publisher/${id}` : `publisher/${id}`;
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
          <Title level={3} align="center">{name}</Title>
          <Text align="center">@{userName}</Text>
        </FlexBox>
      </Link>
      <Separator />
      <FlexBox align="center" margin="28px auto 0">
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text color="secondary">Events</Text>
          <Title level={3}>{formatAmount(events)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text color="secondary">Followers</Text>
          <Title level={3}>{formatAmount(followers)}</Title>
        </FlexBox>
      </FlexBox>
      <AvatarGroup icons={avatars} margin="28px auto 0" />
      <FlexBox align="center" margin="24px auto 0">
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
