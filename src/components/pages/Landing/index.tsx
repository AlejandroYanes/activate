import React, { FunctionComponent, useMemo } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import { useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import Button from 'components/base-components/Button';
import Toggle from 'components/base-components/Toggle';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import EventCard from 'components/experience/EventCard';
import { PublicLayout } from 'components/experience/Layout';
import { events } from '../Discover/events';
import { Header, Content, LeftBlock, RightBlock } from './styled';

const LandingPage: FunctionComponent = () => {
  const {
    colors,
    useDarkStyle,
    toggleLightStyle,
  } = useAppTheme();
  const layout = useAppLayout();

  const sunIcon = useMemo(() => (
    <SvgIcon icon={Icons.SUN} color={colors.GRAY_DARK} size="small" />
  ), [colors]);
  const moonIcon = useMemo(() => (
    <SvgIcon icon={Icons.MOON} color={colors.ACCENT_HIGHLIGHT} size="small" />
  ), [colors]);

  return (
    <PublicLayout>
      <Header layout={layout}>
        <Title level={2}>Activate</Title>
        <Toggle
          nobNode={useDarkStyle ? moonIcon : sunIcon}
          value={useDarkStyle}
          onChange={toggleLightStyle}
        />
      </Header>
      <Content layout={layout}>
        <LeftBlock>
          <Title level={1} color="brand" padding="6px 0">Find any <b>event</b></Title>
          <Title
            level={1}
            color="brand"
            padding="6px 0"
          >
            happening <b>anywhere</b>,
          </Title>
          <Title level={1}  color="brand" padding="6px 0"><b>anytime</b>.</Title>
          <Button
            onClick={() => undefined}
            label="Get Started"
            variant="fill"
            color="brand"
            mT
          />
        </LeftBlock>
        <RightBlock>
          <EventCard {...events[0]} />
          <EventCard {...events[1]} />
          <EventCard {...events[2]} />
        </RightBlock>
      </Content>
    </PublicLayout>
  );
};

export default LandingPage;
