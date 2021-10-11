import React from 'react';
const UpdatesModal = React.lazy(() => import('./Updates'));
const FiltersModal = React.lazy(() => import('./Filters'));
const InviteUsersModal = React.lazy(() => import('./Invite'));

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
