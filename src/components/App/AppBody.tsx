import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppLayout } from 'components/providers/Layout';
import SideMenu from 'components/experience/SideMenu';
import SidePanel from 'components/experience/SidePanel';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import EventDetailsPage from 'components/pages/EventDetails';
import SearchPage from 'components/pages/Search';
import PublisherPage from 'components/pages/Publisher';
import UserPage from 'components/pages/User';
import TalksPage from 'components/pages/Talks';
import { Body, StyledApp } from './styled';

const AppBody: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout}>
      <SideMenu />
      <Body layout={layout}>
        <Switch>
          <Route path="/upcoming" component={FeedPage} exact />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/event-detail" component={EventDetailsPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/publisher" component={PublisherPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/talks" component={TalksPage} />
          <Redirect to="/upcoming" />
        </Switch>
      </Body>
      <SidePanel />
    </StyledApp>
  );
};

export default AppBody;
