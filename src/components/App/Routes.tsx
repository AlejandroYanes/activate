import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FeedPage from 'components/pages/Feed';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import EventDetailsPage from 'components/pages/EventDetails';
import SearchPage from 'components/pages/Search';
import PublisherPage from 'components/pages/Publisher';
import UserPage from 'components/pages/User';
import TalksPage from 'components/pages/Talks';

export default function Routes() {
  return (
    <Switch>
      <Route path="/upcoming" component={FeedPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/discover" component={DiscoverPage} />
      <Route path="/event-detail" component={EventDetailsPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/publisher" component={PublisherPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/talks" component={TalksPage} />
      <Redirect to="/upcoming" />
    </Switch>
  );
}
