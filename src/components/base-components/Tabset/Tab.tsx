import React, { FunctionComponent, ReactNode, useContext, useMemo, useState } from 'react';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon from 'components/base-components/SvgIcon';
import tabsetContext from './context';
import { Content, Label, Mark, StyledTab, Text } from './styled';
import Colors from 'styles/colors';

interface Props {
  name: string;
  icon?: Icons | ReactNode;
  label?: string;
}

const spring = {
  type: 'spring',
  stiffness: 600,
  damping: 20,
};

function getIconColor(isSelected, isHovered) {
  if (isSelected && isHovered) {
    return Colors.BRAND_DARK;
  }

  if (isSelected) {
    return Colors.BRAND;
  }

  if (isHovered) {
    return Colors.GRAY_DARK;
  }

  return Colors.GRAY;
}

const Tab: FunctionComponent<Props> = (props) => {
  const { name, label, icon } = props;
  const { activeTab, onTabChange, fullWidth } = useContext(tabsetContext);
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = name === activeTab;
  const iconComponent = useMemo(() => {
    if (typeof icon === 'string') {
      return (
        <SvgIcon
          icon={icon as Icons}
          strokeColor={getIconColor(isSelected, isHovered)}
        />
      );
    }
    return icon;
  }, [icon, isHovered, isSelected]);

  const handleClick = () => onTabChange(name);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <StyledTab
      fullWidth={fullWidth}
      selected={isSelected}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Content data-el="tab-content">
        <Text>
          <RenderIf condition={!!icon}>
            {iconComponent}
          </RenderIf>
          <RenderIf condition={!!label}>
            <Label spaced={!!icon}>{label}</Label>
          </RenderIf>
        </Text>
        <RenderIf condition={isSelected}>
          <Mark layoutId="tabMarker" initial={false} transition={spring} />
        </RenderIf>
      </Content>
    </StyledTab>
  );
};

Tab.defaultProps = {
  icon: null,
  label: '',
};

export default Tab;
