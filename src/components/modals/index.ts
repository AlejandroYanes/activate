import TalksModal from './Talks';
import UpdatesModal from './Updates';
import EventDetailsModal from './EventDetails';
import ProfileModal from './Profile';

export enum Modals {
  TALKS = '#talks',
  TALKS_CONTACTS = '#talks-contacts',
  TALKS_MESSAGES = '#talks-messages',
  UPDATES = '#updates',
  EVENT_DETAILS = '#event-details',
  PROFILE = '#profile',
}

export const ModalMap = {
  [Modals.TALKS]: TalksModal,
  [Modals.TALKS_CONTACTS]: TalksModal,
  [Modals.TALKS_MESSAGES]: TalksModal,
  [Modals.UPDATES]: UpdatesModal,
  [Modals.EVENT_DETAILS]: EventDetailsModal,
  [Modals.PROFILE]: ProfileModal,
};
