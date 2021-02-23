import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { AuxPanelSection, useActivePanelSections } from 'components/providers/PanelSections';
import { useAppLayout } from 'components/providers/Layout';
import { Case, Switch } from 'components/base-components/Switch';
import { Tabset } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';
import UpcomingEventsPanel from 'components/panels/UpcomingEvents';
import NotificationsPanel from 'components/panels/Notifications';
import EventDetailsPanel from 'components/panels/EventDetails';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import FilterPanel from 'components/panels/Filter';
import TalksPanel from 'components/panels/Talks';
import { resolveAvailableTabs } from './sections';
import { Panel as StyledPanel, PanelBody, PanelHeader } from './styled';

interface Props {
  showCloseIcon?: boolean;
  onClose?: () => void;
}

const Panel: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { sections, activeSection } = useActivePanelSections();

  const { showCloseIcon, onClose } = props;

  const [activeTab, setActiveTab] = useState(AuxPanelSection.NOTIFICATIONS);
  const availableTabs = useMemo(() => resolveAvailableTabs(sections), [sections]);

  useEffect(() => {
    setActiveTab(activeSection);
  }, [activeSection]);

  return (
    <StyledPanel layout={layout} data-el="aux-panel">
      <PanelHeader data-el="aux-panel-header">
        <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth compact>
          {availableTabs}
        </Tabset>
        <RenderIf condition={showCloseIcon}>
          <IconButton onClick={onClose} icon={Icons.CLOSE} mL />
        </RenderIf>
      </PanelHeader>
      <PanelBody data-el="aux-panel-body">
        <Switch by={activeTab}>
          <Case value={AuxPanelSection.FILTER} component={FilterPanel} />
          <Case value={AuxPanelSection.UPCOMING} component={UpcomingEventsPanel} />
          <Case value={AuxPanelSection.EVENT_DETAILS} component={EventDetailsPanel} />
          <Case value={AuxPanelSection.NOTIFICATIONS} component={NotificationsPanel} />
          <Case value={AuxPanelSection.TALKS} component={TalksPanel} onClose={onClose} />
        </Switch>
      </PanelBody>
    </StyledPanel>
  );
};

export default Panel;
