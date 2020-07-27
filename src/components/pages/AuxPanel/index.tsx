/* eslint-disable arrow-body-style */
import React, { FunctionComponent, useState } from 'react';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import IconButton from 'components/base-components/IconButton';
import AvatarMenu from 'components/experience/AvatarMenu';
import UpcomingEvents from 'components/experience/UpcomingEvents';
import { Panel, PanelHeader } from './styled';

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
      <PanelHeader>
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
        <AvatarMenu onShowProfile={() => setCurrentSection(Sections.Profile)} />
      </PanelHeader>
      <UpcomingEvents />
    </Panel>
  );
};

export default AuxPanel;
