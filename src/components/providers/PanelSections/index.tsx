import React, { createContext, FunctionComponent, useCallback, useContext, useMemo, useState } from 'react';

export enum AuxPanelSections {
  Upcoming = 'Upcoming',
  Notifications = 'Notifications',
  Search = 'Search',
  EventDetails = 'EventDetails',
  PublisherDetails = 'PublisherDetails',
}

interface PanelSectionsValue {
  sections: AuxPanelSections[];
  actions: {
    setPageSections: (sections: AuxPanelSections[]) => void;
    resetPanelSections: () => void;
  };
}

const PanelSectionsContext = createContext<PanelSectionsValue>(undefined);

const basicSections = [
  AuxPanelSections.Upcoming,
  AuxPanelSections.Notifications,
];

const PanelSectionsProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [sections, setSections] = useState(basicSections);

  const setPageSections = useCallback(
    (nextSections: AuxPanelSections[]) => {
      setSections([...basicSections, ...nextSections]);
    },
    [],
  );

  const resetPanelSections = useCallback(() => setSections(basicSections), []);

  const providerValue = useMemo(() => ({
    sections,
    actions: {
      setPageSections,
      resetPanelSections,
    },
  }), [sections, resetPanelSections, setPageSections]);

  return (
    <PanelSectionsContext.Provider value={providerValue}>
      {children}
    </PanelSectionsContext.Provider>
  );
};

export const useActivePanelSections = () => useContext(PanelSectionsContext).sections;
export const usePanelActions = () => useContext(PanelSectionsContext).actions;

export default PanelSectionsProvider;
