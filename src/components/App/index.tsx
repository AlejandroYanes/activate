import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SvgBlur from 'components/base-components/SvgBlur';
import SideMenu from 'components/experience/SideMenu';
import AuxPanel from 'components/experience/AuxPanel';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import AboutPage from 'components/pages/About';
import { AppBody, StyledApp } from './styled';

import 'simplebar/dist/simplebar.min.css';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <StyledApp>
      <SideMenu />
      <AppBody>
        <Switch>
          <Route path="/" component={FeedPage} exact />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/about" component={AboutPage} />
          <Redirect to="/" />
        </Switch>
      </AppBody>
      <AuxPanel />
      <SvgBlur />
    </StyledApp>
  </BrowserRouter>
);

export default App;
