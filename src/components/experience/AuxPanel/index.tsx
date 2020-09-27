import React, { FunctionComponent, useState } from 'react';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { Tab, Tabset } from 'components/base-components/Tabset';
import { Case, Switch } from 'components/base-components/Switch';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import NotificationsPanel from 'components/panels/Notifications';
import { Panel, PanelBody, PanelHeader } from './styled';

enum Sections {
  Upcoming = 'Upcoming',
  Notifications = 'Notifications',
}

const AuxPanel: FunctionComponent = () => {
  const [currentSection, setCurrentSection] = useState(Sections.Upcoming);

  return (
    <Panel>
      <PanelHeader data-el="aux-panel-header">
        <Tabset activeTab={currentSection} onTabChange={setCurrentSection} fullWidth>
          <Tab name={Sections.Upcoming} icon={Icons.BOOKMARKS} label="Your Events" />
          <Tab name={Sections.Notifications} icon={Icons.BELL} label="Notifications" />
        </Tabset>
      </PanelHeader>
      <PanelBody data-el="aux-panel-body">
        <Switch by={currentSection}>
          <Case value={Sections.Upcoming} component={UpcomingEventsPanel} />
          <Case value={Sections.Notifications} component={NotificationsPanel} />
        </Switch>
      </PanelBody>
    </Panel>
  );
};

export default AuxPanel;
