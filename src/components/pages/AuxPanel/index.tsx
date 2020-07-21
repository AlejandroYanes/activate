import React, { FunctionComponent, useState } from 'react';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import { Switch, Case } from 'components/base-components/Switch';
import AvatarMenu from 'components/experience/AvatarMenu';
import NotificationsPanel from 'components/pages/Notifications';
import ProfilePanel from 'components/pages/Profile';
import SummaryPanel from 'components/pages/Summary';
import { Panel, PanelTop, PanelBody } from './styled';

enum Sections {
  Summary,
  Notifications,
  Settings,
  Profile,
}

const AuxPanel: FunctionComponent = () => {
  const [currentSection, setCurrentSection] = useState(Sections.Summary);

  return (
    <Panel>
      <PanelTop>
        <IconButton
          variant="base"
          icon={Icons.GRID}
          onClick={() => setCurrentSection(Sections.Summary)}
          mR
        />
        <IconButton
          variant="base"
          icon={Icons.BELL}
          toggle={currentSection === Sections.Notifications}
          onClick={() => setCurrentSection(Sections.Notifications)}
          mR
        />
        <IconButton
          variant="base"
          toggle={currentSection === Sections.Settings}
          onClick={() => setCurrentSection(Sections.Settings)}
          icon={Icons.SETTINGS}
          mR
        />
        <AvatarMenu onShowProfile={() => setCurrentSection(Sections.Profile)} />
      </PanelTop>
      <PanelBody>
        <Switch by={currentSection}>
          <Case value={Sections.Summary} component={SummaryPanel} />
          <Case value={Sections.Notifications} component={NotificationsPanel} />
          <Case value={Sections.Profile} component={ProfilePanel} />
        </Switch>
      </PanelBody>
    </Panel>
  );
};

export default AuxPanel;
