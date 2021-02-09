import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppLayout } from 'components/providers/Layout';
import SideMenu from 'components/experience/SideMenu';
import SidePanel from 'components/experience/SidePanel';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import AboutPage from 'components/pages/About';
import EventDetailsPage from 'components/pages/EventDetails';
import SearchPage from 'components/pages/Search';
import PublisherPage from 'components/pages/Publisher';
import UserPage from 'components/pages/User';
import { Body, StyledApp } from './styled';

const AppBody: FunctionComponent = () => {
  const layout = useAppLayout();

  return (
    <StyledApp layout={layout}>
      <SideMenu />
      <Body layout={layout}>
        <Switch>
          <Route path="/" component={FeedPage} exact />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/event-detail" component={EventDetailsPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/publisher" component={PublisherPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/about" component={AboutPage} />
          <Redirect to="/" />
        </Switch>
      </Body>
      <SidePanel />
    </StyledApp>
  );
};

export default AppBody;
