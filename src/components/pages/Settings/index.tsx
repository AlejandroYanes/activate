import { FunctionComponent, useState } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import InterestsSection from './Interests';
import EditProfileSection from './EditProfile';
import AppColorsSection from './AppColors';
import ChangePasswordSection from './ChangePassword';
import { Panel } from './style';

enum Menus {
  PROFILE = 'PROFILE',
  PASSWORD = 'PASSWORD',
  INTERESTS = 'INTERESTS',
  COLORS = 'COLORS',
}

const SettingsPage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(Menus.PROFILE);

  return (
    <Panel>
      <FlexBox direction="column" align="stretch" width="25%">
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          direction="vertical"
          bordered
        >
          <Tab name={Menus.PROFILE} label="Edit Profile" />
          <Tab name={Menus.PASSWORD} label="Change Password" />
          <Tab name={Menus.INTERESTS} label="Your Interests" />
          <Tab name={Menus.COLORS} label="Colors" />
        </Tabset>
      </FlexBox>
      <FlexBox direction="column" align="stretch" padding="0 0 0 24px" grow>
        <Switch by={activeTab}>
          <Case value={Menus.PROFILE} component={EditProfileSection} />
          <Case value={Menus.PASSWORD} component={ChangePasswordSection} />
          <Case value={Menus.INTERESTS} component={InterestsSection} />
          <Case value={Menus.COLORS} component={AppColorsSection} />
        </Switch>
      </FlexBox>
    </Panel>
  );
};

export default SettingsPage;
