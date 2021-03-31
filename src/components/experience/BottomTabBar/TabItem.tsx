import React, { FunctionComponent, useCallback } from 'react';
import { ZLevels } from 'styles/z-levels';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { TabItem as StyledTabItem, Mark } from './styled/tab-item';
import SelectedBubble from './SelectedBubble';

interface Props {
  icon: Icons;
  value: string;
  activeTab: string;
  onClick: (tab) => void;
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const iconWrapperStyles = { zIndex: ZLevels.componentLevel2 };

const TabItem: FunctionComponent<Props> = (props) => {
  const { icon, value, activeTab, onClick } = props;

  const handleClick = useCallback(() => onClick(value), [onClick]);

  return (
    <StyledTabItem role="button" onClick={handleClick} id={value}>
      <div style={iconWrapperStyles}>
        <SvgIcon icon={icon} />
      </div>
      <RenderIf condition={value === activeTab}>
        <Mark
          layoutId="bottom_tab_bar-mark"
          initial={false}
          transition={spring}
        >
          <SelectedBubble />
        </Mark>
      </RenderIf>
    </StyledTabItem>
  );
};

export default TabItem;
