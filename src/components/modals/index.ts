import UpdatesModal from './Updates';
import PublisherModal from './Publisher';
import FiltersModal from './Filters';
import InviteUsersModal from './Invite';
import EditProfileModal from './EditProfile';
import ChangePasswordModal from './ChangePassword';

export enum Modals {
  UPDATES = '#updates',
  PUBLISHER = '#publisher',
  USER = '#user',
  FILTERS = '#filters',
  INVITE = '#invite',
  EDIT_PROFILE = '#edit-profile',
  CHANGE_PASSWORD = '#settings-password',
}

export const modalsMap = {
  [Modals.INVITE]: InviteUsersModal,
  [Modals.PUBLISHER]: PublisherModal,
  [Modals.EDIT_PROFILE]: EditProfileModal,
  [Modals.CHANGE_PASSWORD]: ChangePasswordModal,
  [Modals.FILTERS]: FiltersModal,
  [Modals.UPDATES]: UpdatesModal,
};
