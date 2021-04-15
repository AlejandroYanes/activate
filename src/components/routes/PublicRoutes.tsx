import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { PublicLayout } from 'components/experience/Layout';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import EventDetailsPage from 'components/pages/EventDetails';
import SearchPage from 'components/pages/Search';
import PublisherPage from 'components/pages/Publisher';
import UserPage from 'components/pages/User';
import TalksPage from 'components/pages/Talks';


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
        <Route path="/public" component={FeedPage} exact />
        <Route path="/public/profile" component={ProfilePage} />
        <Route path="/public/discover" component={DiscoverPage} />
        <Route path="/public/event-details" component={EventDetailsPage} />
        <Route path="/public/search" component={SearchPage} />
        <Route path="/public/publisher" component={PublisherPage} />
        <Route path="/public/user" component={UserPage} />
        <Route path="/public/talks" component={TalksPage} />
        <Redirect to="/public" />
      </Switch>
    </PublicLayout>
  );
};

export default PublicRoutes;

