import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { AuxPanelSection, useActivePanelSections } from 'components/providers/PanelSections';
import { Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import NotificationsPanel from 'components/panels/Notifications';
import EventDetailsPanel from 'components/panels/EventDetails';
import FilterPanel from 'components/panels/Filter';
import { resolveAvailableTabs } from './sections';
import { Panel, PanelBody, PanelHeader, StyledSidePanel } from './styled';

const SidePanel: FunctionComponent = () => {
  const layout = useAppLayout();
  const { sections, activeSection } = useActivePanelSections();
  const availableTabs = useMemo(() => resolveAvailableTabs(sections), [sections]);
  const [activeTab, setActiveTab] = useState(activeSection);

  useEffect(() => {
    setActiveTab(activeSection);
  }, [activeSection]);

  if (layout === Layout.FULL) {
    return (
      <StyledSidePanel>
        <Panel>
          <PanelHeader data-el="aux-panel-header">
            <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth compact>
              {availableTabs}
            </Tabset>
          </PanelHeader>
          <PanelBody data-el="aux-panel-body">
            <Switch by={activeTab}>
              <Case value={AuxPanelSection.Filter} component={FilterPanel} />
              <Case value={AuxPanelSection.Upcoming} component={UpcomingEventsPanel} />
              <Case value={AuxPanelSection.EventDetails} component={EventDetailsPanel} />
              <Case value={AuxPanelSection.Notifications} component={NotificationsPanel} />
            </Switch>
          </PanelBody>
        </Panel>
      </StyledSidePanel>
    );
  }
  return null;
};

export default SidePanel;
