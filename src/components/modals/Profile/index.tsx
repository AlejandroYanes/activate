import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { formatAmount } from 'helpers';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import PublishersResults from '../../pages/Search/PublishersResults';
import UsersResults from '../../pages/Search/UsersResults';
import Settings from '../../pages/Profile/Settings';

enum ProfileTabs {
  Following = 'Following',
  Friends = 'Friends',
  Setting = 'Settings',
}

const ProfileModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const [activeTab, setActiveTab] = useState(ProfileTabs.Following);

  const header = (
    <FlexBox align="center" height={62}>
      <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} />
    </FlexBox>
  );

  return (
    <Modal visible title={header} onClose={goBack} size="mobile">
      <FlexBox direction="column" align="stretch" padding="0 6px">
        <FlexBox align="center">
          <Avatar size="x-large" icon="user2" />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Events</Text>
              <Title level={2} color="accent">{formatAmount(23466)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Followers</Text>
              <Title level={2} color="accent">{formatAmount(55422)}</Title>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox direction="column" align="flex-start" padding="16px 8px">
          <Text>@alejandro.yanes94</Text>
          <Title level={2} color="brand">
            Alejandro Yanes De la Cruz
          </Title>
        </FlexBox>
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          fullWidth
          compact
          mT
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
          <Tab
            name={ProfileTabs.Setting}
            label={ProfileTabs.Setting}
            icon={Icons.SETTINGS}
          />
        </Tabset>
        <Switch by={activeTab}>
          <Case value={ProfileTabs.Following} component={PublishersResults} />
          <Case value={ProfileTabs.Friends} component={UsersResults} />
          <Case value={ProfileTabs.Setting} component={Settings} />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default ProfileModal;
