import TalksModal from 'components/modals/Talks';

export enum Modals {
  TALKS = '#talks',
  TALKS_CONTACTS = '#talks-contacts',
  TALKS_MESSAGES = '#talks-messages',
}

export interface ModalEntry {
  name: Modals;
  props?: { [x: string]: any };
}

export const ModalMap = {
  [Modals.TALKS]: TalksModal,
  [Modals.TALKS_CONTACTS]: TalksModal,
  [Modals.TALKS_MESSAGES]: TalksModal,
};
