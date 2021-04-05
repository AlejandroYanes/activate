import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AuxPanelSection } from './types';

export { AuxPanelSection };

interface PanelSectionsContextValue {
  sections: AuxPanelSection[];
  activeSection: AuxPanelSection;
  actions: {
    addSection: (section: AuxPanelSection) => void;
    removeSection: (section: AuxPanelSection) => void;
    setActiveSection: (section: AuxPanelSection) => void;
    resetPanelSections: () => void;
  };
}

interface PanelSectionsState {
  sections: AuxPanelSection[];
  activeSection: AuxPanelSection;
}

const PanelSectionsContext = createContext<PanelSectionsContextValue>(undefined);

const basicSections: AuxPanelSection[] = [
  AuxPanelSection.UPCOMING,
  AuxPanelSection.TALKS,
  AuxPanelSection.UPDATES,
];

const initialState = {
  sections: basicSections,
  activeSection: AuxPanelSection.UPCOMING,
};

const PanelSectionsProvider: FunctionComponent = (props) => {
  const { children } = props;
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

  const providerValue = useMemo<PanelSectionsContextValue>(
    () => ({
      ...state,
      actions: {
        addSection,
        removeSection,
        setActiveSection,
        resetPanelSections,
      },
    }),
    [state, resetPanelSections, addSection, removeSection, setActiveSection],
  );

  return (
    <PanelSectionsContext.Provider value={providerValue}>
      {children}
    </PanelSectionsContext.Provider>
  );
};

export const useActivePanelSections = () => {
  const { sections, activeSection } = useContext(PanelSectionsContext);
  return { sections, activeSection };
};
export const usePanelActions = () => useContext(PanelSectionsContext).actions;

export default PanelSectionsProvider;
