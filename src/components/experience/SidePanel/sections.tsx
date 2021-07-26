import React from 'react';
import { AuxPanelSection } from 'components/providers/PanelSections';
import { Tab } from 'components/base-components/Tabset';
import { Icons } from 'components/base-components/SvgIcon';

const sections: { icon: Icons, value: AuxPanelSection }[] = [
  {
    icon: 'FORM',
    value: AuxPanelSection.EVENT_DETAILS,
  },
  {
    icon: 'FILTER',
    value: AuxPanelSection.FILTER,
  },
  {
    icon: 'BOOKMARKS',
    value: AuxPanelSection.UPCOMING,
  },
  {
    icon: 'MESSAGE',
    value: AuxPanelSection.TALKS,
  },
  {
    icon: 'TIME_HISTORY',
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
