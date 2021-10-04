import UpdatesModal from './Updates';
import FiltersModal from './Filters';
import InviteUsersModal from './Invite';

export enum Modals {
  UPDATES = '#updates',
  FILTERS = '#filters',
  INVITE = '#invite',
}

export const modalsMap = {
  [Modals.INVITE]: InviteUsersModal,
  [Modals.FILTERS]: FiltersModal,
  [Modals.UPDATES]: UpdatesModal,
};
