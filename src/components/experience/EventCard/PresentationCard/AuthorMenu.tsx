import React, { FunctionComponent } from 'react';
import Avatar from 'components/base-components/Avatar';
import { Text } from 'components/base-components/Typography';
import { Menu, MenuItem } from 'components/base-components/Menu';
import RenderIf from 'components/base-components/RenderIf';
import { AuthorDetails, AuthorSection } from './styled/author-menu';

interface Props {
  name: string;
  userName: string;
  following: boolean;
}

const avatarMenuTrigger = <Avatar icon="user2" size="small" />;

const AuthorMenu: FunctionComponent<Props> = (props) => {
  const { name, userName, following } = props;
  return (
    <Menu trigger={avatarMenuTrigger} align="end">
      <AuthorSection>
        <Avatar icon="user2" size="large" />
        <AuthorDetails>
          <Text>{name}</Text>
          <Text size="small">@{userName}</Text>
        </AuthorDetails>
      </AuthorSection>
      <MenuItem label="Go to profile" onClick={() => undefined} />
      <RenderIf condition={!following}>
        <MenuItem label="Follow to see all events" onClick={() => undefined} />
      </RenderIf>
      <RenderIf condition={following}>
        <MenuItem label="Stop following" onClick={() => undefined} />
      </RenderIf>
    </Menu>
  );
};

export default AuthorMenu;
