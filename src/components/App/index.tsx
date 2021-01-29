import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppProviders from 'components/providers';
import SideMenu from 'components/experience/SideMenu';
import SidePanel from 'components/experience/SidePanel';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import AboutPage from 'components/pages/About';
import EventDetails from 'components/pages/EventDetails';
import { AppBody, StyledApp } from './styled';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <AppProviders>
      <StyledApp>
        <AppBody>
          <Switch>
            <Route path="/" component={FeedPage} exact />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/discover" component={DiscoverPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/event-detail" component={EventDetails} />
            <Redirect to="/" />
          </Switch>
        </AppBody>
        <SideMenu />
        <SidePanel />
      </StyledApp>
    </AppProviders>
  </BrowserRouter>
);

export default App;
