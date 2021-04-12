import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/pages/Landing';
import AuthRoutes from './AuthRoutes';
import PublicRoutes from './PublicRoutes';

const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/public" component={PublicRoutes} />
        <Route path="/app" component={AuthRoutes} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
