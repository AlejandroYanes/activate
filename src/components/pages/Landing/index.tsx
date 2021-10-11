import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import FlexBox from 'components/base-components/FlexBox';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import EventsGrid from 'components/experience/EventsGrid';
import LeftSideTitle from './LeftSideTitle';
import RightSideTitle from './RightSideTitle';

const LandingPage: FunctionComponent = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(QueryKey.FETCH_TOP_EVENTS, eventsApi.listTopEvents);

  if (isLoading) {
    return (
      <FlexBox width="100%" direction="column" align="center">
        <LoadingScreen padding="48px" />
      </FlexBox>
    );
  }

  if (!!error) {
    return (
      <FlexBox width="100%" direction="column" align="center">
        <NoConnectionScreen
          padding="48px"
          message="We could not load the events"
        />
      </FlexBox>
    );
  }

  const events = response.data;

  const items = [
    <LeftSideTitle key="left-side-title" />,
    <RightSideTitle key="right-side-title" />,
    ...events,
  ];

  return (
    <EventsGrid events={items} />
  );
};

export default LandingPage;
