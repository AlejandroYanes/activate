import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getEventValue } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Modal from 'components/base-components/Modal';
import { Input } from 'components/base-components/Inputs';
import UsersList from 'components/experience/UsersList';
import FlexBox from 'components/base-components/FlexBox';
import Button from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import { events } from '../../pages/Discover/events';
import { users } from '../Profile/users';

const InviteUsersModal: FunctionComponent = () => {
  const layout = useAppLayout();
  const { goBack } = useHistory();

  const [search, setSearch] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSearch = useCallback((event) => {
    setSearch(getEventValue(event));
  }, []);

  const handleSelection = useCallback((user) => {
    setSelectedUsers((oldSelection) => {
      const isSelected = oldSelection.some((u) => u.id === user.id);

      return isSelected
        ? oldSelection.filter((u) => u.id !== user.id)
        : oldSelection.concat([user]);
    });
  }, []);

  const modalSize = layout !== Layout.MOBILE ? 'drawer' : 'mobile';

  const footer = (
    <FlexBox justify="flex-end" align="center" width="100%" padding="8px">
      <Button onClick={goBack} label="Cancel" color="brand" variant="flat" mR />
      <Button
        onClick={() => undefined}
        label="Send"
        color="brand"
        variant="fill"
      />
    </FlexBox>
  );

  return (
    <Modal
      title="Invite users to"
      footer={footer}
      onClose={goBack}
      size={modalSize}
      visible
    >
      <FlexBox direction="column" align="stretch" padding="0 16px">
        <Text size="large" mB>{events[1].title}</Text>
        <Input
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          mB
        />
      </FlexBox>
      <UsersList
        users={users}
        selectedUsers={selectedUsers}
        onClick={handleSelection}
      />
    </Modal>
  );
};

export default InviteUsersModal;
