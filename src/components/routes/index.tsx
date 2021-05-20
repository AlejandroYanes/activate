import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LandingRoute from './LandingRoute';
import SignRoute from './SignRoute';
import StarterRoute from './StarterRoute';
import AuthRoutes from './AuthRoutes';

const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingRoute} />
        <Route path="/sign" component={SignRoute} />
        <Route path="/starter" component={StarterRoute} />
        <Route path="/app" component={AuthRoutes} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
