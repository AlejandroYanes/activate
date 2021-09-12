import { FunctionComponent } from 'react';
import { EventModel } from 'models/event';
import { capitalizeFirstLetter } from 'helpers';
import { Menu, MenuItem, MenuLink } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import { Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';

interface Props {
  event: EventModel;
  going: boolean;
  inDetails?: boolean;
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

const EventMenu: FunctionComponent<Props> = (props) => {
  const { event: { id, name }, going, handleBookmark, inDetails } = props;

  return (
    <Menu trigger={MenuTrigger}>
      <FlexBox
        direction="column"
        justify="center"
        align="center"
        padding="0 20px"
        height={48}
      >
        <Title level={3} weight="light" align="center" ellipsis>
          {capitalizeFirstLetter(name)}
        </Title>
      </FlexBox>
      <RenderIf condition={!inDetails}>
        <MenuLink label="Open details" to={`/app/event/${id}`} />
      </RenderIf>
      <MenuItem label="Copy Link" onClick={emptyAction} />
      <MenuItem label="Share on social media" onClick={emptyAction} />
      <MenuItem
        label={going ? 'Unfollow' : 'Follow'}
        danger={going}
        onClick={handleBookmark}
      />
      <MenuItem label="Report this event" danger onClick={emptyAction} />
    </Menu>
  );
};

export default EventMenu;
