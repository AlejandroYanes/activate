import React, { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';
import FlexBox from 'components/base-components/FlexBox';
import { IconButton } from 'components/base-components/Button';
import { Title } from 'components/base-components/Typography';
import AbsoluteContent from 'components/base-components/AbsoluteContent';
import RenderIf from 'components/base-components/RenderIf';
import { List as UsersList } from './styled';

interface Props {
  onUserClick: (user) => void;
}

const Users: FunctionComponent<Props> = (props) => {
  const { onUserClick } = props;
  const [showAllContacts, setShowAllContacts] = useState(false);

  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_MY_FRIENDS,
    usersApi.listMyFriends,
  );

  const toggleViews = () => setShowAllContacts(old => !old);

  const newTalkHeader = showAllContacts
    ? (
      <FlexBox align="center" height="100%">
        <IconButton
          onClick={toggleViews}
          icon="ARROW_LEFT"
          color="background"
          variant="flat"
        />
        <Title level={3} padding="0 0 0 8px">Select a contact</Title>
      </FlexBox>
    )
    : null;

  return (
    <>
      <UsersList
        header={newTalkHeader}
        loading={isLoading}
        errored={!!error}
        users={response?.data.results}
        onClick={onUserClick}
      />
      <RenderIf condition={!showAllContacts}>
        <AbsoluteContent bottom={16} left={242}>
          <IconButton
            size="large"
            variant="fill"
            color="accent"
            icon="PENCIL"
            onClick={toggleViews}
          />
        </AbsoluteContent>
      </RenderIf>
    </>
  );
};

export default Users;
