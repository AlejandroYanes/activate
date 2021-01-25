import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export enum AuxPanelSection {
  Upcoming = 'Upcoming',
  Notifications = 'Notifications',
  Search = 'Search',
  EventDetails = 'EventDetails',
}

interface PanelSectionsValue {
  sections: AuxPanelSection[];
  activeSection: AuxPanelSection;
  actions: {
    addSection: (section: AuxPanelSection) => void;
    removeSection: (section: AuxPanelSection) => void;
    setActiveSection: (section: AuxPanelSection) => void;
    resetPanelSections: () => void;
  };
}

const PanelSectionsContext = createContext<PanelSectionsValue>(undefined);

const basicSections: AuxPanelSection[] = [
  // AuxPanelSection.EventDetails,
  AuxPanelSection.Upcoming,
  AuxPanelSection.Notifications,
];

const PanelSectionsProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [sections, setSections] = useState<AuxPanelSection[]>(basicSections);
  const [activeSection, setActiveSection] = useState<AuxPanelSection>(AuxPanelSection.Upcoming);

  const addSection = useCallback((nextSection: AuxPanelSection) => {
    setSections([...sections, nextSection]);
  }, [sections]);

  const removeSection = useCallback((section: AuxPanelSection) => {
    setSections(sections.filter((s) => s !== section));
  }, [sections]);

  const resetPanelSections = useCallback(() => setSections(basicSections), []);

  const providerValue = useMemo<PanelSectionsValue>(
    () => ({
      sections,
      activeSection,
      actions: {
        addSection,
        removeSection,
        setActiveSection,
        resetPanelSections,
      },
    }),
    [sections, resetPanelSections, addSection, removeSection, activeSection],
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
