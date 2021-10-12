import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { PrivateLayout } from 'components/Layout';
import { useAuthData } from 'components/providers/Auth';
import { Layout, useAppLayout } from 'components/base-components/Configuration';

const ProfilePage = React.lazy(() => import('components/pages/Profile'));
const DiscoverPage = React.lazy(() => import('components/pages/Discover'));
const EventDetailsPage = React.lazy(() => import('components/pages/EventDetails'));
const SearchPage = React.lazy(() => import('components/pages/Search'));
const PublisherPage = React.lazy(() => import('components/pages/Publisher'));
const UserPage = React.lazy(() => import('components/pages/User'));
const TalksPage = React.lazy(() => import('components/pages/Talks'));
const UpcomingPage = React.lazy(() => import('components/pages/Upcoming'));
const SettingsPage = React.lazy(() => import('components/pages/Settings'));

const PublisherModal = React.lazy(() => import('components/modals/Publisher'));
const ProfileModal = React.lazy(() => import('components/modals/Profile'));
const EventDetailsModal = React.lazy(() => import('components/modals/EventDetails'));
const UserModal = React.lazy(() => import('components/modals/User'));
const TalksModal = React.lazy(() => import('components/modals/Talks'));
const InterestsModal = React.lazy(() => import('components/modals/Interests'));
const SettingsModal = React.lazy(() => import('components/modals/Settings'));
const EditProfileModal = React.lazy(() => import('components/modals/EditProfile'));
const AppColorsModal = React.lazy(() => import('components/modals/AppColors'));
const FiltersModal = React.lazy(() => import('components/modals/Filters'));
const UpdatesModal = React.lazy(() => import('components/modals/Updates'));
const InviteUsersModal = React.lazy(() => import('components/modals/Invite'));
const ChangePasswordModal = React.lazy(
  () => import('components/modals/ChangePassword')
);

interface RouteDef {
  path: string;
  component: any;
}

const commonRoutes: RouteDef[] = [
  { path: '/app/upcoming', component: UpcomingPage },
  { path: '/app/search', component: SearchPage },
];

const routesWithPages: RouteDef[] = [
  { path: '/app/profile', component: ProfilePage },
  { path: '/app/settings', component: SettingsPage },
  { path: '/app/event/:eventId', component: EventDetailsPage },
  { path: '/app/publisher/:publisherId', component: PublisherPage },
  { path: '/app/user/:userId', component: UserPage },
  { path: '/app/talks', component: TalksPage },
];

const routesWithModals: RouteDef[] = [
  { path: '/app/filters', component: FiltersModal },
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

const loading = <div>Loading...</div>

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
    <PrivateLayout>
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/app" component={DiscoverPage} exact />
          {routesStack}
          <Redirect to="/app" />
        </Switch>
      </Suspense>
    </PrivateLayout>
  );
};

export default AuthRoutes;

