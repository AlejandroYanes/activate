import { useCallback, useState } from 'react';
import { AuxPanelSection } from 'components/panels';
import { useEventCenterUpdate } from '../../../../event-center';

interface PanelSectionsState {
  sections: AuxPanelSection[];
  activeSection: AuxPanelSection;
}

const basicSections: AuxPanelSection[] = [
  AuxPanelSection.UPCOMING,
  AuxPanelSection.TALKS,
  AuxPanelSection.UPDATES,
];

const initialState = {
  sections: basicSections,
  activeSection: AuxPanelSection.UPCOMING,
};

export default function useSidePanelState() {
  const [state, setState] = useState<PanelSectionsState>(initialState);

  const addSection = useCallback((nextSection: AuxPanelSection) => {
    setState((oldState) => ({
      ...oldState,
      sections: [...oldState.sections, nextSection],
    }));
  }, []);

  const removeSection = useCallback((section: AuxPanelSection) => {
    setState((oldState) => {
      const { sections: oldSections, activeSection: oldActive } = oldState;
      const nextSections = oldSections.filter((s) => s !== section);
      const isActiveSection = section === oldActive;

      return {
        sections: nextSections,
        activeSection: isActiveSection ? nextSections[0] : oldActive,
      };
    });
  }, []);

  const setActiveSection = useCallback((section: AuxPanelSection) => {
    setState((oldState) => ({
      ...oldState,
      activeSection: section,
    }));
  }, []);

  const resetPanelSections = useCallback(() => setState(initialState), []);

  useEventCenterUpdate('SHOW_PANEL_SECTION', addSection);
  useEventCenterUpdate('REMOVE_PANEL_SECTION', removeSection);
  useEventCenterUpdate('SET_ACTIVE_PANEL_SECTION', setActiveSection);
  useEventCenterUpdate('RESET_PANEL_SECTIONS', resetPanelSections);

  return { ...state, setActiveSection };
}
