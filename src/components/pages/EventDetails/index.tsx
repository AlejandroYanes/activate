import React, { FunctionComponent, useEffect, useState } from 'react';
import eventImg from 'assets/images/virtual-tour.jpeg';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import { Icons } from 'components/base-components/SvgIcon';
import Page from 'components/base-components/Page';
import Description from './Description';
import { Image, ImageContainer, StyledEventDetail, Title } from './styled';

const event = {
  title: 'Free Music Workshop - February 2020',
};

enum Tabs {
  Details = 'Details',
  Comments = 'Comments',
}

const EventDetails: FunctionComponent = () => {
  const { title } = event;
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.Details);

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
          <Tab name={Tabs.Details} label="Details" icon={Icons.FORM} />
          <Tab name={Tabs.Comments} label="Comments (169)" icon={Icons.COMMENTS} />
        </Tabset>
        <Switch by={activeTab}>
          <Case value={Tabs.Details} component={Description} />
        </Switch>
      </StyledEventDetail>
    </Page>
  );
};

export default EventDetails;
