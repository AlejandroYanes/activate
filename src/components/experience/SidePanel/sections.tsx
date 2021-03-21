import React from 'react';
import { AuxPanelSection } from 'components/providers/PanelSections';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab } from 'components/base-components/Tabset';

const sections = [
  {
    icon: Icons.FORM,
    label: 'Details',
    value: AuxPanelSection.EVENT_DETAILS,
  },
  {
    icon: Icons.FILTER,
    label: 'Search',
    value: AuxPanelSection.FILTER,
  },
  {
    icon: Icons.BOOKMARKS,
    label: 'Upcoming',
    value: AuxPanelSection.UPCOMING,
  },
  {
    icon: Icons.MESSAGE,
    label: 'Talks',
    value: AuxPanelSection.TALKS,
  },
  {
    icon: Icons.TIME_HISTORY,
    label: 'Updates',
    value: AuxPanelSection.UPDATES,
  },
];

export function resolveAvailableTabs(activeSections: AuxPanelSection[]) {
  return sections
    .filter((section) => activeSections.some((s) => s === section.value))
    .map(({ icon, label, value }) => (
      <Tab key={value} name={value} icon={icon} label={label} />
    ));
}
