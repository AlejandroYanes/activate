import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FlexBox,
  Input,
  Layout,
  Modal,
  Text,
  useAppLayout,
  capitalizeFirstLetter
} from 'activate-components';
import UsersList from 'components/experience/UsersList';
import useInviteState from './state';

const InviteUsersModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const {
    event,
    search,
    isLoading,
    users,
    selectedUsers,
    errored,
    handleSearch,
    handleSelection,
  } = useInviteState();
  const layout = useAppLayout();

  const modalSize = (
    (layout === Layout.DESKTOP && 'small') ||
    (layout === Layout.TABLET && 'medium') ||
    'mobile'
  );

  const footer = (
    <>
      <Button onClick={goBack} label="Cancel" color="background" variant="fill" mR />
      <Button
        onClick={() => undefined}
        label="Send"
        color="brand"
        variant="fill"
      />
    </>
  );

  return (
    <Modal
      title="Invite friends to"
      footer={footer}
      onClose={goBack}
      size={modalSize}
      visible
    >
      <FlexBox direction="column" align="stretch" padding="0 16px">
        <Text size="large" mB>
          {capitalizeFirstLetter(event.name)}
        </Text>
        <Input
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          mB
        />
      </FlexBox>
      <UsersList
        loading={isLoading}
        errored={errored}
        users={users}
        selectedUsers={selectedUsers}
        onClick={handleSelection}
      />
    </Modal>
  );
};

export default InviteUsersModal;
