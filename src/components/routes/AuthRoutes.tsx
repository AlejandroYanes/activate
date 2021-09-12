/* eslint-disable react/jsx-key */
import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { Layout, useAppLayout } from 'components/providers/Layout';
import ProfilePage from 'components/pages/Profile';
import DiscoverPage from 'components/pages/Discover';
import EventDetailsPage from 'components/pages/EventDetails';
import SearchPage from 'components/pages/Search';
import PublisherPage from 'components/pages/Publisher';
import UserPage from 'components/pages/User';
import TalksPage from 'components/pages/Talks';
import InterestsPage from 'components/pages/Interests';

import PublisherModal from 'components/modals/Publisher';
import ProfileModal from 'components/modals/Profile';
import EventDetailsModal from 'components/modals/EventDetails';
import UserModal from 'components/modals/User';
import TalksModal from 'components/modals/Talks';
import InterestsModal from 'components/modals/Interests';
import SettingsModal from 'components/modals/Settings';
import EditProfileModal from 'components/modals/EditProfile';
import AppColorsModal from 'components/modals/AppColors';
import FiltersModal from 'components/modals/Filters';
import UpdatesModal from 'components/modals/Updates';
import ChangePasswordModal from 'components/modals/ChangePassword';
import InviteUsersModal from 'components/modals/Invite';
import UpdatesPage from 'components/pages/Updates';
import Slides from 'components/pages/Slides';

interface RouteDef {
  path: string;
  component: any;
}

const commonRoutes: RouteDef[] = [
  { path: '/app/upcoming', component: Slides },
  { path: '/app/search', component: SearchPage },
];

const routesWithPages: RouteDef[] = [
  { path: '/app/profile', component: ProfilePage },
  { path: '/app/event/:eventId', component: EventDetailsPage },
  { path: '/app/publisher/:publisherId', component: PublisherPage },
  { path: '/app/user/:userId', component: UserPage },
  { path: '/app/talks', component: TalksPage },
  { path: '/app/interests', component: InterestsPage },
  { path: '/app/updates', component: UpdatesPage },
];

const routesWithModals: RouteDef[] = [
  { path: '/app/discover/filters', component: FiltersModal },
  { path: '/app/event/invite', component: InviteUsersModal },
  { path: '/app/event/:eventId', component: EventDetailsModal },
  { path: '/app/publisher/:publisherId', component: PublisherModal },
  { path: '/app/user/:userId', component: UserModal },
  { path: '/app/talks/contacts', component: TalksModal },
  { path: '/app/talks/messages', component: TalksModal },
  { path: '/app/talks', component: TalksModal },
  { path: '/app/profile/password', component: ChangePasswordModal },
  { path: '/app/profile/edit', component: EditProfileModal },
  { path: '/app/profile', component: ProfileModal },
  { path: '/app/settings/interests', component: InterestsModal },
  { path: '/app/settings/colors', component: AppColorsModal },
  { path: '/app/settings', component: SettingsModal },
  { path: '/app/updates', component: UpdatesModal },
];

function mapRoutes(routes: RouteDef[]) {
  return routes.map(({ path, component }) => (
    <Route key={path} path={path} component={component} />
  ));
}

const routesMap = {
  [Layout.DESKTOP]: mapRoutes([...routesWithPages, ...commonRoutes]),
  [Layout.TABLET]: mapRoutes([...routesWithPages, ...commonRoutes]),
  [Layout.MOBILE]: mapRoutes([...routesWithModals, ...commonRoutes]),
};

const AuthRoutes: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuthData();
  const layout = useAppLayout();

  if (!isLoggedIn) {
    const to = {
      pathname: '/sign',
      state: { from: pathname },
    };

    return (
      <Redirect to={to} />
    );
  }

  const routesStack = routesMap[layout];

  return (
    <Switch>
      <Route path="/app" component={DiscoverPage} exact />
      {routesStack}
      <Redirect to="/app" />
    </Switch>
  );
};

export default AuthRoutes;

