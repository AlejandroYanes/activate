import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppProviders from 'components/providers';
import SvgBlur from 'components/base-components/SvgBlur';
import SideMenu from 'components/experience/SideMenu';
import SidePanel from 'components/experience/SidePanel';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import AboutPage from 'components/pages/About';
import PublishersPage from 'components/pages/Publishers';
import { AppBody, StyledApp } from './styled';

import 'simplebar/dist/simplebar.min.css';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <AppProviders>
      <StyledApp>
        <SideMenu />
        <AppBody>
          <Switch>
            <Route path="/" component={FeedPage} exact />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/discover" component={DiscoverPage} />
            <Route path="/publishers" component={PublishersPage} />
            <Route path="/about" component={AboutPage} />
            <Redirect to="/" />
          </Switch>
        </AppBody>
        <SidePanel />
        <SvgBlur />
      </StyledApp>
    </AppProviders>
  </BrowserRouter>
);

export default App;
