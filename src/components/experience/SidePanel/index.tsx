import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import {
  AuxPanelSection,
  useActivePanelSections,
} from 'components/providers/PanelSections';
import { Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import FilterPanel from 'components/panels/Filters';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import EventDetailsPanel from 'components/panels/EventDetails';
import UpdatesPanel from 'components/panels/Updates';
import TalksPanel from 'components/panels/Talks';
import { resolveAvailableTabs } from './sections';
import { PanelBody, PanelHeader, StyledPanel, StyledSidePanel } from './styled';

const SidePanel: FunctionComponent = () => {
  const { sections, activeSection } = useActivePanelSections();

  const [activeTab, setActiveTab] = useState(AuxPanelSection.UPDATES);
  const availableTabs = useMemo(() => resolveAvailableTabs(sections), [sections]);

  useEffect(() => {
    setActiveTab(activeSection);
  }, [activeSection]);

  return (
    <StyledSidePanel>
      <StyledPanel data-el="aux-panel">
        <PanelHeader data-el="aux-panel-header">
          <Tabset
            activeTab={activeTab}
            onTabChange={setActiveTab}
            fullWidth
            bordered
          >
            {availableTabs}
          </Tabset>
        </PanelHeader>
        <PanelBody data-el="aux-panel-body">
          <Switch by={activeTab}>
            <Case
              value={AuxPanelSection.FILTER}
              component={FilterPanel}
            />
            <Case
              value={AuxPanelSection.UPCOMING}
              component={UpcomingEventsPanel}
            />
            <Case
              value={AuxPanelSection.EVENT_DETAILS}
              component={EventDetailsPanel}
            />
            <Case
              value={AuxPanelSection.UPDATES}
              component={UpdatesPanel}
            />
            <Case
              value={AuxPanelSection.TALKS}
              component={TalksPanel}
            />
          </Switch>
        </PanelBody>
      </StyledPanel>
    </StyledSidePanel>
  );
};

export default SidePanel;
