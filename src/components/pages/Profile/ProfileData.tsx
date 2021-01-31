import React, { FunctionComponent, useState } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { ButtonProps } from 'components/base-components/Button';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Field, Form } from 'components/base-components/Form';
import { Title, Text } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import Modal from 'components/base-components/Modal';
import Avatar from 'components/base-components/Avatar';
import { ProfileTabs } from '.';
import {
  Actions,
  Profile as StyledProfile,
  Stat,
  Stats,
  StyledAvatar,
  UserName,
  Content,
  AvatarSection,
  InfoSection,
} from './styled';

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
        <StyledAvatar size="x-large" icon="user2" />
        <Actions>
          <IconButton
            onClick={() => setShowModal(true)}
            icon={Icons.CREATE_PENCIL}
            color={colors.FONT}
            variant="flat"
          />
        </Actions>
        <UserName mB align="center" color="brand">Alejandro Yanes</UserName>
        <Stats>
          <Stat>
            <Text>Attended</Text>
            <Title level={2} color="brand">120</Title>
          </Stat>
          <Stat>
            <Text>Following</Text>
            <Title level={2} color="brand">60</Title>
          </Stat>
          <Stat>
            <Text>Friends</Text>
            <Title level={2} color="brand">80</Title>
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
        size="medium"
        header="User Data"
        visible={showModal}
        actions={actions}
        onClose={() => setShowModal(false)}
      >
        <Content>
          <AvatarSection>
            <Avatar size="x-large" icon="user2" />
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
