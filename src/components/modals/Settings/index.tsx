import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import SvgIcon from 'components/base-components/SvgIcon';
import { SettingItem } from './styled';

const SettingsModal: FunctionComponent = () => {
  const { goBack } = useHistory();

  return (
    <Modal visible title="Settings" onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="24px 16px"
      >
        <SettingItem to="/app/profile/edit">
          <Text size="large">Change your Profile</Text>
          <SvgIcon icon="CHEVRON_RIGHT" />
        </SettingItem>
        <SettingItem to="/app/profile/password">
          <Text size="large">Change your Password</Text>
          <SvgIcon icon="CHEVRON_RIGHT" />
        </SettingItem>
        <SettingItem to="/app/settings/interests">
          <Text size="large">Manage your Interests</Text>
          <SvgIcon icon="CHEVRON_RIGHT" />
        </SettingItem>
        <SettingItem to="/app/settings/colors">
          <Text size="large">Change the Colors</Text>
          <SvgIcon icon="CHEVRON_RIGHT" />
        </SettingItem>
      </FlexBox>
    </Modal>
  );
};

export default SettingsModal;
