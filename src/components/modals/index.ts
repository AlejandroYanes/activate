import UpdatesModal from './Updates';
import PublisherModal from './Publisher';
import FiltersModal from './Filters';
import InviteUsersModal from './Invite';
import EditProfileModal from './EditProfile';
import ChangePasswordModal from './ChangePassword';

export enum Modals {
  TALKS = '#talks',
  TALKS_CONTACTS = '#talks-contacts',
  TALKS_MESSAGES = '#talks-messages',
  UPDATES = '#updates',
  EVENT_DETAILS = '#event-details',
  PROFILE = '#profile',
  SETTINGS = '#settings',
  PUBLISHER = '#publisher',
  USER = '#user',
  FILTERS = '#filters',
  INVITE = '#invite',
  EDIT_PROFILE = '#edit-profile',
  APP_COLORS = '#settings-colors',
  INTERESTS = '#settings-interests',
  CHANGE_PASSWORD = '#settings-password',
}

export const DesktopModals = {
  [Modals.INVITE]: InviteUsersModal,
  [Modals.PUBLISHER]: PublisherModal,
  [Modals.EDIT_PROFILE]: EditProfileModal,
  [Modals.CHANGE_PASSWORD]: ChangePasswordModal,
};

export const TabletModals = {
  ...DesktopModals,
  [Modals.UPDATES]: UpdatesModal,
  [Modals.FILTERS]: FiltersModal,
};
