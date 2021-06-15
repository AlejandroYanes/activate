import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { AuthLayout } from 'components/experience/Layout';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import EventDetailsPage from 'components/pages/EventDetails';
import SearchPage from 'components/pages/Search';
import PublisherPage from 'components/pages/Publisher';
import UserPage from 'components/pages/User';
import TalksPage from 'components/pages/Talks';
import InterestsPage from 'components/pages/Interests';


const AuthRoutes: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuthData();

  if (!isLoggedIn) {
    const to = {
      pathname: '/sign',
      state: { from: pathname },
    };

    return (
      <Redirect to={to} />
    );
  }

  return (
    <AuthLayout>
      <Switch>
        <Route path="/app" component={FeedPage} exact />
        <Route path="/app/profile" component={ProfilePage} />
        <Route path="/app/discover" component={DiscoverPage} />
        <Route path="/app/event-details" component={EventDetailsPage} />
        <Route path="/app/search" component={SearchPage} />
        <Route path="/app/publisher/:publisherId" component={PublisherPage} />
        <Route path="/app/user" component={UserPage} />
        <Route path="/app/talks" component={TalksPage} />
        <Route path="/app/interests" component={InterestsPage} />
        <Redirect to="/app" />
      </Switch>
    </AuthLayout>
  );
};

export default AuthRoutes;

