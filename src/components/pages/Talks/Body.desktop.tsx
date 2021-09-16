import React, { FunctionComponent, useMemo, useState, } from 'react';
import { useQuery } from 'react-query';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';
import RenderIf from 'components/base-components/RenderIf';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import Messages from 'components/experience/Messages';
import SplashScreen from './SplashScreen';
import { List as UsersList } from './styled';

const DesktopBody: FunctionComponent = () => {
  const { isLoading, data: response, error } = useQuery(
    QueryKey.FETCH_MY_FRIENDS,
    usersApi.listMyFriends,
  );
  const [activeUser, setActiveUser] = useState(undefined);

  const actions = useMemo(() => (
    <IconButton
      onClick={() => undefined}
      icon="MORE_VERT"
      color="background"
      variant="flat"
    />
  ), []);

  return (
    <FlexBox align="stretch" height="100%">
      <UsersList
        loading={isLoading}
        errored={!!error}
        users={response?.data.results}
        onClick={setActiveUser}
      />
      <RenderIf condition={!!activeUser} fallback={<SplashScreen />}>
        <Messages user={activeUser} rightActions={actions} viewMode="page" />
      </RenderIf>
    </FlexBox>
  );
};

export default DesktopBody;
