import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { usePanelActions } from 'components/providers/PanelSections';
import { Tabset, Tab } from 'components/base-components/Tabset';
import Button from 'components/base-components/Button';
import { PresentationCard } from 'components/experience/EventCard';
import { StyledFeed, Section, Title, Subheader, Content } from './styled';
import { events } from '../Discover/events';

enum Tabs {
  Populars = 'Populars',
  Recent = 'Recent',
  NearYou = 'Near You',
}

function eventFactory() {
  return events.map((event) => <PresentationCard key={event.id} {...event} />);
}

const FeedPage: FunctionComponent = () => {
  const { push } = useHistory();
  const { resetPanelSections } = usePanelActions();
  const [activeTab, setActiveTab] = useState(Tabs.Populars);
  const eventCards = useMemo(eventFactory, []);

  const goToDiscovery = useCallback(() => {
    push('discover');
  }, [push]);

  useEffect(resetPanelSections, []);

  return (
    <StyledFeed data-el="feed-page">
      <Section>
        <Title>
          Your upcoming events
        </Title>
        <Content>
          <PresentationCard {...events[0]} />
          <PresentationCard {...events[1]} />
        </Content>
      </Section>
      <Section mT>
        <Title>
          Our suggestions
        </Title>
        <Subheader>
          <Tabset activeTab={activeTab} onTabChange={setActiveTab}>
            <Tab name={Tabs.Populars} label={Tabs.Populars} />
            <Tab name={Tabs.Recent} label={Tabs.Recent} />
            <Tab name={Tabs.NearYou} label={Tabs.NearYou} />
          </Tabset>
          <Button onClick={goToDiscovery} label="See more" sm />
        </Subheader>
        <Content>
          {eventCards}
        </Content>
      </Section>
    </StyledFeed>
  );
};

export default FeedPage;
