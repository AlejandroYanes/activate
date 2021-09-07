import { FunctionComponent } from 'react';
import { useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import { LinkButton } from 'components/base-components/Button';
import EventCard from 'components/experience/EventCard';
import Illustration from './Illustration';
import { events } from '../Discover/events';
import { Content, IllustrationBox, LeftBlock, RightBlock } from './styled';
import FlexBox from '../../base-components/FlexBox';

const blockVariants = {
  start: { transform: 'translateX(-20%)', opacity: 0 },
  enter: { transform: 'translateX(0%)', opacity: 1, transition: { delay: 0.2 } },
};

const LandingPage: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <Content layout={layout}>
      <LeftBlock variants={blockVariants} initial="start" animate="enter">
        <FlexBox>
          <Title level={1} weight="light" color="brand">
            Find any
          </Title>
          <Title level={1} weight="bold" color="brand" margin="0 0 0 6px">
            event
          </Title>
        </FlexBox>
        <FlexBox>
          <Title level={1} weight="light" color="brand">
            happening
          </Title>
          <Title level={1} weight="bold" color="brand" margin="0 0 0 6px">
            anywhere,
          </Title>
        </FlexBox>
        <Title level={1} weight="bold" color="brand">
          anytime.
        </Title>
        <IllustrationBox layout={layout}>
          <LinkButton
            to="/sign"
            label="Get Started"
            variant="fill"
            color="brand"
            padding="0 16px"
            margin="16px 0 0 0"
          />
          <Illustration />
        </IllustrationBox>
      </LeftBlock>
      <RightBlock>
        <EventCard event={events[3] as any} readonly />
        <EventCard event={events[0] as any} readonly />
        <EventCard event={events[1] as any} readonly />
      </RightBlock>
    </Content>
  );
};

export default LandingPage;
