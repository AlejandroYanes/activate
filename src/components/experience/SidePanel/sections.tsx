import React from 'react';
import { AuxPanelSection } from 'components/providers/PanelSections';
import { Icons } from 'components/base-components/SvgIcon';
import { Tab } from 'components/base-components/Tabset';

const sections = [
  {
    icon: Icons.FORM,
    label: 'Details',
    value: AuxPanelSection.EventDetails,
  },
  {
    icon: Icons.FILTER,
    label: 'Search',
    value: AuxPanelSection.Search,
  },
  {
    icon: Icons.BOOKMARKS,
    label: 'Upcoming',
    value: AuxPanelSection.Upcoming,
  },
  {
    icon: Icons.BELL,
    label: 'Notifications',
    value: AuxPanelSection.Notifications,
  },
];

export function resolveAvailableTabs(activeSections: AuxPanelSection[]) {
  return sections
    .filter((section) => activeSections.some((s) => s === section.value))
    .map(({ icon, label, value }) => (
      <Tab key={value} name={value} icon={icon} label={label} />
    ));
}
