import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import eventImg from 'assets/images/virtual-tour.jpeg';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import Description from './Description';
import Comments from './Comnments';
import {
  BackButton,
  EventTitle,
  Header,
  Image,
  ImageContainer,
  StyledEventDetail,
  SubHeader,
} from './styled/page';

const event = {
  title: 'Free Music Workshop - February 2020',
};

enum Tabs {
  DetailsSection = 'Details',
  CommentsSection = 'Comments',
}

const EventDetailsPage: FunctionComponent = () => {
  const layout = useAppLayout();
  const Colors = useAppColors();
  const { goBack } = useHistory();
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.DetailsSection);
  const [isBooked, setIsBooked] = useState(false);
  const { title } = event;

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
    <Page>
      <StyledEventDetail>
        <Header>
          <BackButton
            variant="flat"
            buttonColor="font"
            onClick={goBack}
            icon={Icons.ARROW_LEFT}
          />
          <EventTitle level={2}>{title}</EventTitle>
        </Header>
        <ImageContainer>
          <Image src={eventImg} alt="virtual tour" />
        </ImageContainer>
        <SubHeader>
          <Tabset
            activeTab={activeTab}
            onTabChange={setActiveTab}
            compact={layout === Layout.SMALL}
            fullWidth
          >
            <Tab name={Tabs.DetailsSection} label="Details" icon={Icons.FORM} />
            <Tab name={Tabs.CommentsSection} label="Comments (169)" icon={Icons.COMMENTS} />
          </Tabset>
          <IconButton
            mR
            mL
            size="large"
            buttonColor="info"
            variant="flat"
            icon={Icons.SEND}
            color={Colors.INFO}
            onClick={() => undefined}
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
        </SubHeader>
        <Switch by={activeTab}>
          <Case value={Tabs.DetailsSection} component={Description} />
          <Case value={Tabs.CommentsSection} component={Comments} />
        </Switch>
      </StyledEventDetail>
    </Page>
  );
};

export default EventDetailsPage;
