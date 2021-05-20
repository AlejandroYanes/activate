import React, { FunctionComponent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import eventImg from 'assets/images/virtual-tour.jpeg';
import { useAppColors } from 'components/providers/Theme';
import Modal from 'components/base-components/Modal';
import FlexBox from 'components/base-components/FlexBox';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import EventImage from 'components/experience/EventImage';
import Description from '../../pages/EventDetails/Description';
import Comments from '../../pages/EventDetails/Comnments';

const event = {
  title: 'Free Music Workshop - February 2020',
  author: {
    userName: `@${faker.internet.userName()}`,
    name: faker.company.companyName(),
  },
};

enum Tabs {
  DetailsSection = 'Details',
  CommentsSection = 'Comments',
}


const EventDetailsModal: FunctionComponent = () => {
  const colors = useAppColors();
  const { goBack } = useHistory();

  const [activeTab, setActiveTab] = useState(Tabs.DetailsSection);
  const [isBooked, setIsBooked] = useState(false);
  const { title, author } = event;

  const handleBookActionClick = useCallback(() => {
    setIsBooked((previousState) => !previousState);
  }, []);

  const header = (
    <FlexBox align="center" ellipsis>
      <IconButton onClick={goBack} icon={Icons.ARROW_LEFT} />
      <Title level={3} padding="0 6px 0 0" ellipsis>{title}</Title>
    </FlexBox>
  );

  return (
    <Modal onClose={goBack} title={header} size="mobile" visible>
      <FlexBox direction="column" align="stretch" padding="0 6px 32px 6px">
        <Title level={2} padding="8px 8px 16px">{title}</Title>
        <EventImage src={eventImg} alt="virtual tour" />
        <FlexBox align="center" margin="12px 0">
          <FlexBox align="flex-start">
            <Avatar src="user2" />
            <FlexBox direction="column" padding="0 0 0 6px">
              <Text size="small" color="secondary">{author.userName}</Text>
              <Text padding="6px 0">{author.name}</Text>
            </FlexBox>
          </FlexBox>
          <IconButton
            size="large"
            buttonColor="info"
            variant="flat"
            icon={Icons.FORWARD}
            color={colors.INFO}
            onClick={() => undefined}
            margin="0 0 0 auto"
          />
          <IconButton
            size="large"
            variant="flat"
            buttonColor="accent"
            icon={isBooked ? Icons.BOOKMARK_FILLED : Icons.ADD_BOOKMARK}
            color={colors.ACCENT}
            secondaryColor={isBooked ? colors.ACCENT : 'transparent'}
            onClick={handleBookActionClick}
          />
        </FlexBox>
        <Tabset
          activeTab={activeTab}
          onTabChange={setActiveTab}
          mT
          mB
        >
          <Tab name={Tabs.DetailsSection} label="Details" icon={Icons.FORM} />
          <Tab name={Tabs.CommentsSection} label="Comments" icon={Icons.COMMENTS} />
        </Tabset>
        <Switch by={activeTab}>
          <Case value={Tabs.DetailsSection} component={Description} />
          <Case value={Tabs.CommentsSection} component={Comments} />
        </Switch>
      </FlexBox>
    </Modal>
  );
};

export default EventDetailsModal;

