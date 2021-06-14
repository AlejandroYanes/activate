import TalksModal from './Talks';
import UpdatesModal from './Updates';
import EventDetailsModal from './EventDetails';
import ProfileModal from './Profile';
import SettingsModal from './Settings';
import PublisherModal from './Publisher';
import UserModal from './User';
import FiltersModal from './Filters';
import InviteUsersModal from './Invite';
import EditProfileModal from './EditProfile';
import AppColorsModal from './AppColors';
import InterestsModal from './Interests';
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

export const MobileModals = {
  ...TabletModals,
  [Modals.TALKS]: TalksModal,
  [Modals.TALKS_CONTACTS]: TalksModal,
  [Modals.TALKS_MESSAGES]: TalksModal,
  [Modals.EVENT_DETAILS]: EventDetailsModal,
  [Modals.PROFILE]: ProfileModal,
  [Modals.SETTINGS]: SettingsModal,
  [Modals.USER]: UserModal,
  [Modals.APP_COLORS]: AppColorsModal,
  [Modals.INTERESTS]: InterestsModal,
};
