/* eslint-disable react/jsx-key */
import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuthData } from 'components/providers/Auth';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { AuthLayout } from 'components/experience/Layout';

import HomePage from 'components/pages/Home';
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

const commonRoutes = [
  <Route path="/app/discover" component={DiscoverPage} />,
  <Route path="/app/search" component={SearchPage} />,
];

const routesWithPages = [
  <Route path="/app/profile" component={ProfilePage} />,
  <Route path="/app/event/details" component={EventDetailsPage} />,
  <Route path="/app/publisher/:publisherId" component={PublisherPage} />,
  <Route path="/app/user/:userId" component={UserPage} />,
  <Route path="/app/talks" component={TalksPage} />,
  <Route path="/app/interests" component={InterestsPage} />,
];

const routesWithModals = [
  <Route path="/app/discover/filters" component={FiltersModal} />,
  <Route path="/app/event/details" component={EventDetailsModal} />,
  <Route path="/app/event/invite" component={InviteUsersModal} />,
  <Route path="/app/publisher/:publisherId" component={PublisherModal} />,
  <Route path="/app/user/:userId" component={UserModal} />,
  <Route path="/app/talks/contacts" component={TalksModal} />,
  <Route path="/app/talks/messages" component={TalksModal} />,
  <Route path="/app/talks" component={TalksModal} />,
  <Route path="/app/profile/password" component={ChangePasswordModal} />,
  <Route path="/app/profile/edit" component={EditProfileModal} />,
  <Route path="/app/profile" component={ProfileModal} />,
  <Route path="/app/settings/interests" component={InterestsModal} />,
  <Route path="/app/settings/colors" component={AppColorsModal} />,
  <Route path="/app/settings" component={SettingsModal} />,
  <Route path="/app/updates" component={UpdatesModal} />,
];

const routesMap = {
  [Layout.DESKTOP]: [...routesWithPages, ...commonRoutes],
  [Layout.TABLET]: [...routesWithPages, ...commonRoutes],
  [Layout.MOBILE]: [...routesWithModals, ...commonRoutes],
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
    <AuthLayout>
      <Switch>
        <Route path="/app" component={HomePage} exact />
        {routesStack}
        <Redirect to="/app" />
      </Switch>
    </AuthLayout>
  );
};

export default AuthRoutes;

