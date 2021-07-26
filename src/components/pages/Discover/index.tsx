import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import { AuxPanelSection, usePanelActions } from 'components/providers/PanelSections';
import Page from 'components/base-components/Page';
import RenderIf from 'components/base-components/RenderIf';
import EventCard from 'components/experience/EventCard';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import PageTitle from './PageTitle';

const errorScreen = (
  <NoConnectionScreen
    message="We couldn't load new events for you."
  />
);

const DiscoverPage: FunctionComponent = () => {
  const { addSection, removeSection, setActiveSection } = usePanelActions();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.DISCOVER_EVENTS, () => eventsApi.discover());

  const eventCards = useMemo(() => {
    if (response) {
      return response.data.map((event) => (
        <EventCard key={event.id} event={event} />
      ));
    }
    return null;
  }, [response]);

  useEffect(() => {
    addSection(AuxPanelSection.FILTER);
    setActiveSection(AuxPanelSection.FILTER);

    return () => removeSection(AuxPanelSection.FILTER);
  }, []);

  return (
    <Page>
      <PageTitle />
      <RenderIf condition={!error} fallback={errorScreen}>
        <RenderIf condition={!isLoading} fallback={<LoadingScreen />}>
          {eventCards}
        </RenderIf>
      </RenderIf>
    </Page>
  );
};

export default DiscoverPage;
