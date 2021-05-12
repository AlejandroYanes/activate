import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import Button from 'components/base-components/Button';
import EventCard from 'components/experience/EventCard';
import Illustration from './Illustration';
import { events } from '../Discover/events';
import { Content, IllustrationBox, LeftBlock, RightBlock } from './styled';

const emptyAction = () => undefined;

const blockVariants = {
  start: { transform: 'translateX(-20%)', opacity: 0 },
  enter: { transform: 'translateX(0%)', opacity: 1, transition: { delay: 0.2 } },
};

const LandingPage: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <Content layout={layout}>
      <LeftBlock variants={blockVariants} initial="start" animate="enter">
        <Title level={1} color="brand" padding="6px 0">
          Find any <b>event</b>
        </Title>
        <Title level={1} color="brand" padding="6px 0">
          happening <b>anywhere</b>,
        </Title>
        <Title level={1} color="brand" padding="6px 0">
          <b>anytime</b>.
        </Title>
        <IllustrationBox layout={layout}>
          <Link to="/sign">
            <Button
              onClick={emptyAction}
              label="Get Started"
              variant="fill"
              color="brand"
              mT
            />
          </Link>
          <Illustration />
        </IllustrationBox>
      </LeftBlock>
      <RightBlock>
        <EventCard {...events[0]} hideFooter />
        <EventCard {...events[1]} hideFooter />
        <EventCard {...events[2]} hideFooter />
      </RightBlock>
    </Content>
  );
};

export default LandingPage;
