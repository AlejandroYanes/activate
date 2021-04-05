import React from 'react';
import { AuxPanelSection } from 'components/providers/PanelSections';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab } from 'components/base-components/Tabset';

const sections = [
  {
    icon: Icons.FORM,
    value: AuxPanelSection.EVENT_DETAILS,
  },
  {
    icon: Icons.FILTER,
    value: AuxPanelSection.FILTER,
  },
  {
    icon: Icons.BOOKMARKS,
    value: AuxPanelSection.UPCOMING,
  },
  {
    icon: Icons.MESSAGE,
    value: AuxPanelSection.TALKS,
  },
  {
    icon: Icons.TIME_HISTORY,
    value: AuxPanelSection.UPDATES,
  },
];

export function resolveAvailableTabs(activeSections: AuxPanelSection[]) {
  return sections
    .filter((section) => activeSections.some((s) => s === section.value))
    .map(({ icon, value }) => (
      <Tab key={value} name={value} icon={icon} />
    ));
}
