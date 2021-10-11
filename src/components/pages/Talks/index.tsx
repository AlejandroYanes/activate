import React, { FunctionComponent, useMemo, useState, } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { IconButton } from 'components/base-components/Button';
import Messages from 'components/experience/Messages';
import SplashScreen from './SplashScreen';
import { Container, Panel } from './styled';
import Users from './Users';

const TalksPage: FunctionComponent = () => {
  const [activeUser, setActiveUser] = useState(undefined);

  const chatMenu = useMemo(() => (
    <IconButton
      onClick={() => undefined}
      icon="MORE_VERT"
      color="background"
      variant="flat"
    />
  ), []);

  return (
    <Container data-el="message-container">
      <Panel data-el="message-panel">
        <Users onUserClick={setActiveUser} />
        <RenderIf condition={!!activeUser} fallback={<SplashScreen />}>
          <Messages
            viewMode="page"
            user={activeUser}
            rightActions={chatMenu}
          />
        </RenderIf>
      </Panel>
    </Container>
  );
};

export default TalksPage;
