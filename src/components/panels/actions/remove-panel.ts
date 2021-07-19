import { notifyEventChannel } from 'event-center';
import { AuxPanelSection } from '..';

export default function removePanel(panel: AuxPanelSection) {
  notifyEventChannel('REMOVE_PANEL_SECTION', panel);
}
