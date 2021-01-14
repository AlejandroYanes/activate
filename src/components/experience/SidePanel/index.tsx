import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import NotificationsPanel from 'components/panels/Notifications';
import SearchPanel from 'components/panels/Search';
import { AuxPanelSections, useActivePanelSections } from 'components/providers/PanelSections';
import { Panel, PanelBody, PanelHeader } from './styled';

const sectionsMap = {
  [AuxPanelSections.Upcoming]: {
    order: 1,
    icon: Icons.BOOKMARKS,
    label: 'Your Events',
    value: AuxPanelSections.Upcoming,
  },
  [AuxPanelSections.Notifications]: {
    order: 3,
    icon: Icons.BELL,
    label: 'Notifications',
    value: AuxPanelSections.Notifications,
  },
  [AuxPanelSections.Search]: {
    order: 2,
    icon: Icons.SEARCH,
    label: 'Search',
    value: AuxPanelSections.Search,
  },
};

function resolveAvailableTabs(activeSections: AuxPanelSections[]) {
  return activeSections
    .map((section) => sectionsMap[section])
    .sort((sectionA, sectionB) => sectionA.order - sectionB.order)
    .map(({ icon, label, value }) => (
      <Tab key={value} name={value} icon={icon} label={label} />
    ));
}

const SidePanel: FunctionComponent = () => {
  const sections = useActivePanelSections();
  const availableTabs = useMemo(() => resolveAvailableTabs(sections), [sections]);
  const [activeTab, setActiveTab] = useState(AuxPanelSections.Upcoming);

  useEffect(() => {
    if (sections.some((section) => section !== activeTab)) {
      setActiveTab(sections[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  return (
    <Panel>
      <PanelHeader data-el="aux-panel-header">
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth compact>
          {availableTabs}
        </Tabset>
      </PanelHeader>
      <PanelBody data-el="aux-panel-body">
        <Switch by={activeTab}>
          <Case value={AuxPanelSections.Upcoming} component={UpcomingEventsPanel} />
          <Case value={AuxPanelSections.Notifications} component={NotificationsPanel} />
          <Case value={AuxPanelSections.Search} component={SearchPanel} />
        </Switch>
      </PanelBody>
    </Panel>
  );
};

export default SidePanel;
