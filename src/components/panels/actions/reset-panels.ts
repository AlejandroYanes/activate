import { notifyEventChannel } from 'event-center';

export default function resetPanels() {
  notifyEventChannel('RESET_PANEL_SECTIONS');
}
