import React, { FunctionComponent } from 'react';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import { Menu, MenuItem } from 'components/base-components/Menu';
import RenderIf from 'components/base-components/RenderIf';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import { AuthorDetails, AuthorSection } from './styled/author-menu';

interface Props {
  name: string;
  userName: string;
  following: boolean;
}

const avatarMenuTrigger = ({ toggleMenu }) => (
  <IconButton icon={Icons.MORE_VERT} onClick={toggleMenu} />
);

const AuthorMenu: FunctionComponent<Props> = (props) => {
  const { name, userName, following } = props;
  return (
    <Menu trigger={avatarMenuTrigger} align="end">
      <AuthorSection>
        <Avatar icon="user2" size="medium" />
        <AuthorDetails>
          <Text size="small">@{userName}</Text>
          <Title level={3} color="brand" bold>{name}</Title>
        </AuthorDetails>
      </AuthorSection>
      <MenuItem label="Go to profile" onClick={() => undefined} />
      <RenderIf condition={!following}>
        <MenuItem label="Follow to see all events" onClick={() => undefined} />
      </RenderIf>
      <RenderIf condition={following}>
        <MenuItem label="Stop following" onClick={() => undefined} />
      </RenderIf>
      <MenuItem label="Direct Message" onClick={() => undefined} />
    </Menu>
  );
};

export default AuthorMenu;
