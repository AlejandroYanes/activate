import React, { FunctionComponent, ReactNode, useContext, useMemo, useRef } from 'react';
import { useHoverState } from 'hooks/UI';
import Colors from 'styles/colors';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon from 'components/base-components/SvgIcon';
import tabsetContext from './context';
import { Content, Label, Mark, StyledTab, Text } from './styled';

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
  const { activeTab, onTabChange, fullWidth, compact } = useContext(tabsetContext);
  const tabReference = useRef(undefined);
  const isHovered = useHoverState(tabReference);
  const isSelected = name === activeTab;
  const shouldShowLabel = (
    !!label &&
    (
      (compact && isSelected) ||
      !compact
    )
  );

  const iconComponent = useMemo(() => {
    if (typeof icon === 'string') {
      return (
        <SvgIcon
          icon={icon as Icons}
          color={getIconColor(isSelected, isHovered)}
        />
      );
    }
    return icon;
  }, [icon, isHovered, isSelected]);

  const handleClick = () => onTabChange(name);

  return (
    <StyledTab
      ref={tabReference}
      fullWidth={fullWidth}
      compact={compact}
      selected={isSelected}
      onClick={handleClick}
    >
      <Content
        data-el="tab-content"
        compact={compact}
        selected={isSelected}
      >
        <Text compact={compact}>
          <RenderIf condition={!!icon}>
            {iconComponent}
          </RenderIf>
          <RenderIf condition={shouldShowLabel}>
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
