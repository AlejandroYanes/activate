import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { ProfileStats } from 'models/user';
import { formatAmount } from 'helpers';
import { useAuthData } from 'components/providers/Auth';
import { QueryKey } from 'components/providers/Query';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import { IconButton } from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import Following from './Following';
import Friends from './Friends';

enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
}

const ProfileModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const [activeTab, setActiveTab] = useState(ProfileTabs.Following);
  const { userInfo } = useAuthData();
  const { data: response } = useQuery(
    QueryKey.FETCH_MY_PROFILE_STATS,
    usersApi.findMyStats,
  );
  const stats: ProfileStats = response?.data;

  const header = (
    <FlexBox justify="space-between" align="center" grow width="100%">
      <IconButton onClick={goBack} icon="ARROW_LEFT" />
    </FlexBox>
  );

  const { avatar, name, userName } = userInfo;

  return (
    <Modal visible title={header} onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="24px 6px"
      >
        <FlexBox
          data-el="avatar-section"
          align="center"
          padding="0 8px"
        >
          <Avatar size="xx-large" src={avatar} />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Following</Text>
              <Title level={2} color="accent">
                {stats ? formatAmount(stats.following) : ''}
              </Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Friends</Text>
              <Title level={2} color="accent">
                {stats ? formatAmount(stats.friends) : ''}
              </Title>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          data-el="user-section"
          direction="column"
          align="flex-start"
          padding="20px 8px"
        >
          <Text>{`@${userName}`}</Text>
          <Title level={2} color="brand">
            {name}
          </Title>
        </FlexBox>
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fullWidth
          bordered
          mB
        >
          <Tab
            name={ProfileTabs.Following}
            label={ProfileTabs.Following}
            icon="MEGAPHONE"
          />
          <Tab
            name={ProfileTabs.Friends}
            label={ProfileTabs.Friends}
            icon="USERS"
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={ProfileTabs.Following}
            component={Following}
          />
          <Case
            value={ProfileTabs.Friends}
            component={Friends}
          />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default ProfileModal;
