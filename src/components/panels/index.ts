import showPanel from './actions/show-panel';
import removePanel from './actions/remove-panel';
import setActivePanel from './actions/set-active-panel';
import resetPanels from './actions/reset-panels';

export {
  showPanel,
  removePanel,
  setActivePanel,
  resetPanels,
};

export enum AuxPanelSection {
  UPCOMING = 'UPCOMING',
  UPDATES = 'UPDATES',
  FILTER = 'FILTER',
  EVENT_DETAILS = 'EVENT_DETAILS',
  TALKS = 'TALKS',
}
