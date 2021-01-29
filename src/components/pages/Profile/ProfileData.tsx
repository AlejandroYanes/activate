import React, { FunctionComponent, useState } from 'react';
import { useAppColors } from 'components/providers/Theme';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import Modal from 'components/base-components/Modal';
import { ButtonProps } from 'components/base-components/Button';
import { ProfileTabs } from '.';
import {
  Actions,
  Complement,
  Profile as StyledProfile,
  Stat,
  StatName,
  Stats,
  StatValue,
  StyledAvatar,
  UserName,
  Content,
  AvatarSection,
  InfoSection,
} from './styled';
import Avatar from '../../base-components/Avatar';
import { Field, Form } from '../../base-components/Form';

interface Props {
  activeTab: string;
  setActiveTab: (tab) => void;
}

const actions: ButtonProps[] = [
  { label: 'Cancel', variant: 'flat', onClick: () => undefined },
  { label: 'Update', variant: 'flat', color: 'brand', onClick: () => undefined },
];

const userData = {
  name: 'Alejandro Yanes',
  email: 'alejandro.yanes94@gmail.com',
  phone: '+53 58207203',
};

const ProfileData: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { activeTab, setActiveTab } = props;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(userData);

  return (
    <>
      <StyledProfile>
        <StyledAvatar size="x-large" icon="user10" />
        <Actions>
          <IconButton
            onClick={() => setShowModal(true)}
            icon={Icons.CREATE_PENCIL}
            color={colors.FONT}
            variant="flat"
          />
        </Actions>
        <UserName>Alejandro Yanes</UserName>
        <Complement>
          <span>alejandro.yanes49@gmail.com</span>
          <span>+53 58207203</span>
        </Complement>
        <Stats>
          <Stat>
            <StatName>Attended</StatName>
            <StatValue>120</StatValue>
          </Stat>
          <Stat>
            <StatName>Following</StatName>
            <StatValue>60</StatValue>
          </Stat>
          <Stat>
            <StatName>Friends</StatName>
            <StatValue>80</StatValue>
          </Stat>
        </Stats>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mT>
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
      </StyledProfile>
      <Modal
        header="User Data"
        visible={showModal}
        actions={actions}
        onClose={() => setShowModal(false)}
      >
        <Content>
          <AvatarSection>
            <Avatar size="x-large" icon="user10" />
          </AvatarSection>
          <InfoSection>
            <Form onChange={setData} state={data}>
              <Field name="name" label="Name" mB />
              <Field name="email" label="E-Mail" mB />
              <Field name="phone" label="Phone Number" mB />
            </Form>
          </InfoSection>
        </Content>
      </Modal>
    </>
  );
};

export default ProfileData;
