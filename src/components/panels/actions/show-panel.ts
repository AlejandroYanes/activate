import { notifyEventChannel } from 'event-center';
import { AuxPanelSection } from '..';

export default function showPanel(panel: AuxPanelSection) {
  notifyEventChannel('SHOW_PANEL_SECTION', panel);
}
