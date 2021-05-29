import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Modals } from '../index';
import { SettingItem } from './styled';

const SettingsModal: FunctionComponent = () => {
  const { goBack, push } = useHistory();

  const openProfileModal = () => {
    push(Modals.EDIT_PROFILE);
  };

  const openPasswordModal = () => {
    push(Modals.CHANGE_PASSWORD);
  };

  const openInterestsModal = () => {
    push(Modals.INTERESTS);
  };

  const openColorsModal = () => {
    push(Modals.APP_COLORS);
  };

  return (
    <Modal visible title="Settings" onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="24px 6px"
      >
        <SettingItem onClick={openProfileModal}>
          <Text size="large">Change your Profile</Text>
          <SvgIcon icon={Icons.CHEVRON_RIGHT} />
        </SettingItem>
        <SettingItem onClick={openPasswordModal}>
          <Text size="large">Change your Password</Text>
          <SvgIcon icon={Icons.CHEVRON_RIGHT} />
        </SettingItem>
        <SettingItem onClick={openInterestsModal}>
          <Text size="large">Manage your Interests</Text>
          <SvgIcon icon={Icons.CHEVRON_RIGHT} />
        </SettingItem>
        <SettingItem onClick={openColorsModal}>
          <Text size="large">Change the Colors</Text>
          <SvgIcon icon={Icons.CHEVRON_RIGHT} />
        </SettingItem>
      </FlexBox>
    </Modal>
  );
};

export default SettingsModal;
