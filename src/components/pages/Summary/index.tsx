import React, { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import { Summary, SummaryItem } from 'components/base-components/Summary';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import UpcomingEvents from 'components/experience/UpcomingEvents';
import { Panel } from './styled';

const icon1 = <SvgIcon icon={Icons.BELL} strokeColor={Colors.GRAY} />;
const icon2 = <SvgIcon icon={Icons.SHARE_FILLED} fillColor={Colors.GRAY} />;
const icon3 = <SvgIcon icon={Icons.HEART_FILLED} fillColor={Colors.GRAY} />;

const SummaryPanel: FunctionComponent = () => (
  <Panel>
    <UpcomingEvents />
    <Summary title="Stats" mB>
      <SummaryItem leftNode={icon1} label="Notifications" rightNode="20" />
      <SummaryItem leftNode={icon2} label="Events shared" rightNode="10" />
      <SummaryItem leftNode={icon3} label="Likes" rightNode="10" />
    </Summary>
  </Panel>
);

export default SummaryPanel;
