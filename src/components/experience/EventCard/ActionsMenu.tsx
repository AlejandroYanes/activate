import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import { Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';

interface Props {
  event: string;
  going: boolean;
  handleBookmark: () => void;
}

const emptyAction = () => undefined;

const MenuTrigger = ({ toggleMenu }) => (
  <IconButton
    icon="MORE_VERT"
    color="background"
    size="large"
    onClick={toggleMenu}
  />
);

const ActionsMenu: FunctionComponent<Props> = (props) => {
  const { event, going, handleBookmark } = props;
  const { push } = useHistory();

  const openDetails = () => {
    push('/app/event-details');
  };

  return (
    <Menu trigger={MenuTrigger}>
      <FlexBox
        direction="column"
        justify="center"
        align="center"
        padding="0 20px"
        height={48}
      >
        <Title level={3} weight="light" align="center" ellipsis>{event}</Title>
      </FlexBox>
      <MenuItem label="Open details" onClick={openDetails} />
      <MenuItem label="Copy Link" onClick={emptyAction} />
      <MenuItem
        label={going ? 'Unfollow' : 'Follow'}
        danger={going}
        onClick={handleBookmark}
      />
      <MenuItem label="Report this event" danger onClick={emptyAction} />
    </Menu>
  );
};

export default ActionsMenu;
