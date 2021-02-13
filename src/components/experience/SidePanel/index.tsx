import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { AuxPanelSection, useActivePanelSections } from 'components/providers/PanelSections';
import { Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import NotificationsPanel from 'components/panels/Notifications';
import EventDetailsPanel from 'components/panels/EventDetails';
import FilterPanel from 'components/panels/Filter';
import TalksPanel from 'components/panels/Talks';
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
              <Case value={AuxPanelSection.FILTER} component={FilterPanel} />
              <Case value={AuxPanelSection.UPCOMING} component={UpcomingEventsPanel} />
              <Case value={AuxPanelSection.EVENT_DETAILS} component={EventDetailsPanel} />
              <Case value={AuxPanelSection.NOTIFICATIONS} component={NotificationsPanel} />
              <Case value={AuxPanelSection.TALKS} component={TalksPanel} />
            </Switch>
          </PanelBody>
        </Panel>
      </StyledSidePanel>
    );
  }
  return null;
};

export default SidePanel;
