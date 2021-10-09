import React, { FunctionComponent, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const LandingRoute = React.lazy(() => import('./LandingRoute'));
const SignRoute = React.lazy(() => import('./SignRoute'));
const StarterRoute = React.lazy(() => import('./StarterRoute'));
const AuthRoutes = React.lazy(() => import('./AuthRoutes'));
const SocialSignRoute = React.lazy(() => import('./SocialSignInRoute'));

const loading = <div>Loading...</div>;

const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/" exact component={LandingRoute} />
          <Route path="/sign" component={SignRoute} />
          <Route path="/social_sign/:provider" component={SocialSignRoute} />
          <Route path="/starter" component={StarterRoute} />
          <Route path="/app" component={AuthRoutes} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
