import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import eventsApi from 'api/events';
import { QueryKey } from 'components/providers/Query';
import { useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import { LinkButton } from 'components/base-components/Button';
import EventTile from 'components/experience/EventTile';
import { ManLooking } from 'components/base-components/Illustrations';
import { LoadingScreen, NoConnectionScreen } from 'components/experience/Screens';
import { Content } from './styled';


const LandingPage: FunctionComponent = () => {
  const layout = useAppLayout();
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

  return (
    <Content layout={layout}>
      <FlexBox width="100%" direction="column" align="stretch">
        <Title
          level={1}
          size={64}
          align="right"
          color="brand"
          weight="light"
        >
          Find any
        </Title>
        <Title
          level={1}
          size={64}
          align="right"
          color="brand"
          weight="light"
          margin="0 0 32px 0"
        >
          happening
        </Title>
        <ManLooking margin="0 0 32px 0" />
        <EventTile event={events[1]} />
        <EventTile event={events[4]} />
      </FlexBox>
      <FlexBox width="100%" direction="column" align="stretch">
        <Title level={1} size={64} color="brand" weight="bold">
          event,
        </Title>
        <Title level={1} size={64} color="brand" weight="bold">
          anywhere,
        </Title>
        <Title
          level={1}
          size={64}
          color="brand"
          weight="bold"
          margin="0 0 32px 0"
        >
          anytime.
        </Title>
        <LinkButton
          to="/sign"
          label="Get started"
          variant="fill"
          color="brand"
          padding="0 24px"
          margin="0 auto 32px 0"
        />
        <EventTile event={events[2]} />
        <EventTile event={events[5]} />
      </FlexBox>
      <FlexBox width="100%" direction="column" align="stretch">
        <EventTile event={events[0]} />
        <EventTile event={events[3]} />
        <EventTile event={events[6]} />
      </FlexBox>
    </Content>
  );
};

export default LandingPage;
