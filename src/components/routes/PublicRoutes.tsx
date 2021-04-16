import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { PublicLayout } from 'components/experience/Layout';
import SignPage from 'components/pages/Sign';

const PublicRoutes: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuthData();

  if (isLoggedIn) {
    const to = {
      pathname: '/app',
      state: { from: pathname },
    };

    return (
      <Redirect to={to} />
    );
  }

  return (
    <PublicLayout>
      <Switch>
        <Route path="/public/sign" component={SignPage} />
        <Redirect to="/" />
      </Switch>
    </PublicLayout>
  );
};

export default PublicRoutes;

