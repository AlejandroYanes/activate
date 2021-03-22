import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import faker from 'faker';
import { useHistory } from 'react-router-dom';
import eventImg from 'assets/images/virtual-tour.jpeg';
import { formatAmount } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import { Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Page from 'components/base-components/Page';
import FlexBox from 'components/base-components/FlexBox';
import AvatarGroup from 'components/base-components/AvatarGroup';
import Description from './Description';
import Comments from './Comnments';
import {
  Image,
  ImageContainer,
  StyledEventDetail,
} from './styled/page';

interface Props {
  asModal?: boolean;
}

enum Tabs {
  DetailsSection = 'Details',
  CommentsSection = 'Comments',
}

const event = {
  title: 'Free Music Workshop - February 2020',
  attendees: faker.random.number({ min: 100, max: 50000 }),
};

const avatars = ['user1', 'user2', 'user6'];

const EventDetailsPage: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { goBack } = useHistory();
  const { addSection, removeSection, setActiveSection } = usePanelActions();

  const { asModal } = props;
  const [activeTab, setActiveTab] = useState(Tabs.DetailsSection);
  const [isBooked, setIsBooked] = useState(false);
  const { title, attendees } = event;

  const handleBookActionClick = useCallback(() => {
    setIsBooked((previousState) => !previousState);
  }, []);

  useEffect(() => {
    addSection(AuxPanelSection.EVENT_DETAILS);
    setActiveSection(AuxPanelSection.EVENT_DETAILS);

    return () => removeSection(AuxPanelSection.EVENT_DETAILS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page asModal={asModal}>
      <StyledEventDetail asModal={asModal}>
        <FlexBox align="flex-start" padding="0 0 16px 0">
          <IconButton
            variant="flat"
            buttonColor="font"
            onClick={goBack}
            icon={Icons.ARROW_LEFT}
            margin="4px 0 0 0"
          />
          <Title level={2} padding="0 0 0 6px">{title}</Title>
        </FlexBox>
        <ImageContainer>
          <Image src={eventImg} alt="virtual tour" />
        </ImageContainer>
        <FlexBox align="center" margin="8px 0">
          <AvatarGroup
            icons={avatars}
            label={formatAmount(attendees)}
            size="small"
          />
          <IconButton
            size="large"
            buttonColor="info"
            variant="flat"
            icon={Icons.SEND}
            color={Colors.INFO}
            onClick={() => undefined}
            margin="0 0 0 auto"
          />
          <IconButton
            size="large"
            variant="flat"
            buttonColor="success"
            icon={isBooked ? Icons.BOOKMARK_FILLED : Icons.ADD_BOOKMARK}
            color={Colors.ACCENT}
            secondaryColor={isBooked ? Colors.ACCENT : 'transparent'}
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
      </StyledEventDetail>
    </Page>
  );
};

export default EventDetailsPage;
