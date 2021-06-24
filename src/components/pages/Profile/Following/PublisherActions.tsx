import { FunctionComponent } from 'react';
import { UserModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';

interface Props {
  user: UserModel;
}

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon="MORE_VERT"
    onClick={toggleMenu}
    color="background"
    {...rest}
  />
);

const emptyAction = () => undefined;

const PublisherActions: FunctionComponent<Props> = (props) => {
  const { user: { name } } = props;

  return (
    <Menu trigger={menuTrigger}>
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="bold" ellipsis>{name}</Text>
      </FlexBox>
      <MenuItem label="Send a message" onClick={emptyAction} />
      <MenuItem label="Mute notifications" onClick={emptyAction} />
      <MenuItem label="Stop seeing events" onClick={emptyAction} />
      <MenuItem label="Unfollow" danger onClick={emptyAction} />
    </Menu>
  );
};

export default PublisherActions;
