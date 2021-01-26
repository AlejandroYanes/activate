import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { AuxPanelSection, useActivePanelSections } from 'components/providers/PanelSections';
import { Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import NotificationsPanel from 'components/panels/Notifications';
import SearchPanel from 'components/panels/Search';
import { Panel, PanelBody, PanelHeader } from './styled';
import { resolveAvailableTabs } from './sections';
import EventDetailsPanel from '../../panels/EventDetails';

const SidePanel: FunctionComponent = () => {
  const { sections, activeSection } = useActivePanelSections();
  const availableTabs = useMemo(() => resolveAvailableTabs(sections), [sections]);
  const [activeTab, setActiveTab] = useState(activeSection);

  useEffect(() => {
    setActiveTab(activeSection);
  }, [activeSection]);

  return (
    <Panel>
      <PanelHeader data-el="aux-panel-header">
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth compact>
          {availableTabs}
        </Tabset>
      </PanelHeader>
      <PanelBody data-el="aux-panel-body">
        <Switch by={activeTab}>
          <Case value={AuxPanelSection.Search} component={SearchPanel} />
          <Case value={AuxPanelSection.Upcoming} component={UpcomingEventsPanel} />
          <Case value={AuxPanelSection.EventDetails} component={EventDetailsPanel} />
          <Case value={AuxPanelSection.Notifications} component={NotificationsPanel} />
        </Switch>
      </PanelBody>
    </Panel>
  );
};

export default SidePanel;
