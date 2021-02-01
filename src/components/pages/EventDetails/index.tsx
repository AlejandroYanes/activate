import React, { FunctionComponent, useEffect, useState } from 'react';
import eventImg from 'assets/images/virtual-tour.jpeg';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import Description from './Description';
import Comments from './Comnments';
import { Image, ImageContainer, StyledEventDetail, Title } from './styled/page';

const event = {
  title: 'Free Music Workshop - February 2020',
};

enum Tabs {
  DetailsSection = 'Details',
  CommentsSection = 'Comments',
}

const EventDetails: FunctionComponent = () => {
  const { title } = event;
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.DetailsSection);

  useEffect(() => {
    addSection(AuxPanelSection.EventDetails);
    setActiveSection(AuxPanelSection.EventDetails);

    return () => removeSection(AuxPanelSection.EventDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <StyledEventDetail>
        <Title>{title}</Title>
        <ImageContainer>
          <Image src={eventImg} alt="virtual tour" />
        </ImageContainer>
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mT mB>
          <Tab name={Tabs.DetailsSection} label="Details" icon={Icons.FORM} />
          <Tab name={Tabs.CommentsSection} label="Comments (169)" icon={Icons.COMMENTS} />
        </Tabset>
        <Switch by={activeTab}>
          <Case value={Tabs.DetailsSection} component={Description} />
          <Case value={Tabs.CommentsSection} component={Comments} />
        </Switch>
      </StyledEventDetail>
    </Page>
  );
};

export default EventDetails;
