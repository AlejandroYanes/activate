import React, { FunctionComponent, useMemo } from 'react';
import { Case, Switch } from 'components/base-components/Switch';
import { Tabset } from 'components/base-components/Tabset';
import { IconButton } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import UpdatesPanel from 'components/panels/Updates';
import EventDetailsPanel from 'components/panels/EventDetails';
import FilterPanel from 'components/panels/Filters';
import TalksPanel from 'components/panels/Talks';
import { AuxPanelSection } from 'components/panels';
import { resolveAvailableTabs } from './sections';
import { PanelBody, PanelHeader, StyledPanel, StyledSidePanel } from './styled';
import useSidePanelState from './state';

interface Props {
  showCloseIcon?: boolean;
  onClose?: () => void;
}

const Panel: FunctionComponent<Props> = (props) => {
  const { showCloseIcon, onClose } = props;
  const { sections, activeSection, setActiveSection } = useSidePanelState();
  const availableTabs = useMemo(() => resolveAvailableTabs(sections), [sections]);

  return (
    <StyledSidePanel>
      <StyledPanel data-el="aux-panel">
        <PanelHeader data-el="aux-panel-header">
          <Tabset
            activeTab={activeSection}
            onTabChange={setActiveSection}
            fullWidth
            bordered
          >
            {availableTabs}
          </Tabset>
          <RenderIf condition={showCloseIcon}>
            <IconButton onClick={onClose} icon="CLOSE" mL />
          </RenderIf>
        </PanelHeader>
        <PanelBody data-el="aux-panel-body">
          <Switch by={activeSection}>
            <Case value={AuxPanelSection.FILTER} component={FilterPanel} />
            <Case value={AuxPanelSection.UPCOMING} component={UpcomingEventsPanel} />
            <Case value={AuxPanelSection.EVENT_DETAILS} component={EventDetailsPanel} />
            <Case value={AuxPanelSection.UPDATES} component={UpdatesPanel} />
            <Case value={AuxPanelSection.TALKS} component={TalksPanel} />
          </Switch>
        </PanelBody>
      </StyledPanel>
    </StyledSidePanel>
  );
};

export default Panel;
