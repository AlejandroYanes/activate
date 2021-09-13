import React, { FunctionComponent } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppLayout from 'components/Layout';
import LandingRoute from './LandingRoute';
import SignRoute from './SignRoute';
import StarterRoute from './StarterRoute';
import AuthRoutes from './AuthRoutes';
import SocialSignRoute from './SocialSignInRoute';

const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route path="/" exact component={LandingRoute} />
          <Route path="/sign" component={SignRoute} />
          <Route path="/social_sign/:provider" component={SocialSignRoute} />
          <Route path="/starter" component={StarterRoute} />
          <Route path="/app" component={AuthRoutes} />
          <Redirect to="/" />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
};

export default Routes;
