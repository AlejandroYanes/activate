import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { formatAmount } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import IconButton from 'components/base-components/IconButton';
import UsersList from 'components/experience/UsersList';
import { users } from './users';

enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
}

const ProfileModal: FunctionComponent = () => {
  const { push, goBack } = useHistory();
  const [activeTab, setActiveTab] = useState(ProfileTabs.Following);

  const goToSettings = useCallback(() => {
    push('#settings');
  }, []);

  const header = (
    <FlexBox align="center" grow width="100%">
      <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} />
      <Title level={3} padding="0 0 0 6px" ellipsis>
        Alejandro Yanes De la Cruz
      </Title>
      <IconButton
        onClick={goToSettings}
        icon={Icons.SETTINGS}
        margin="0 0 0 auto"
      />
    </FlexBox>
  );

  return (
    <Modal visible title={header} onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="0 6px"
      >
        <FlexBox
          data-el="avatar-section"
          align="center"
          padding="0 8px"
        >
          <Avatar size="xx-large" icon="user2" />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Following</Text>
              <Title level={2} color="accent">{formatAmount(55422)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Friends</Text>
              <Title level={2} color="accent">{formatAmount(23466)}</Title>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          data-el="user-section"
          direction="column"
          align="flex-start"
          padding="16px 8px"
        >
          <Text>@alejandro.yanes94</Text>
          <Title level={2} color="brand">
            Alejandro Yanes De la Cruz
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
            icon={Icons.MEGAPHONE}
          />
          <Tab
            name={ProfileTabs.Friends}
            label={ProfileTabs.Friends}
            icon={Icons.USERS}
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case
            value={ProfileTabs.Following}
            component={UsersList}
            users={users}
          />
          <Case
            value={ProfileTabs.Friends}
            component={UsersList}
            users={users}
          />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default ProfileModal;
