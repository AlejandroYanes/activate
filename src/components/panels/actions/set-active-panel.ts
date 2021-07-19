import { notifyEventChannel } from 'event-center';
import { AuxPanelSection } from '..';

export default function setActivePanel(panel: AuxPanelSection) {
  notifyEventChannel('SET_ACTIVE_PANEL_SECTION', panel);
}
