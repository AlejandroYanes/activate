import React, { FunctionComponent, useState } from 'react';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import AvatarMenu from 'components/experience/AvatarMenu';
import { Panel, PanelTop, PanelBody } from './styled';
import Switch from 'components/base-components/Switch';
import Case from 'components/base-components/Switch/Case';
import NotificationsPage from 'components/pages/Notifications';

enum Sections {
  DashBoard,
  Notifications,
  Settings,
}

const AuxPanel: FunctionComponent = () => {
  const [currentSection, setCurrentSection] = useState(Sections.DashBoard);

  return (
    <Panel>
      <PanelTop>
        <IconButton
          variant="base"
          onClick={() => setCurrentSection(Sections.Settings)}
          icon={Icons.SETTINGS}
          mR
        />
        <IconButton
          variant="base"
          onClick={() => setCurrentSection(Sections.Notifications)}
          icon={Icons.BELL}
          mR
        />
        <AvatarMenu />
      </PanelTop>
      <PanelBody>
        <Switch by={currentSection}>
          <Case value={Sections.Notifications} component={NotificationsPage} />
        </Switch>
      </PanelBody>
    </Panel>
  );
};

export default AuxPanel;
