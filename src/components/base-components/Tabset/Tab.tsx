import React, { FunctionComponent, ReactNode, useContext, useMemo, useRef } from 'react';
import { useHoverState } from 'hooks/UI';
import { ColorScheme } from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import tabsetContext from './context';
import { Content, Label, Mark, StyledTab, Text } from './styled';

interface Props {
  name: string;
  icon?: Icons | ReactNode;
  label?: string;
}

const markAnimationControls = {
  type: 'spring',
  stiffness: 600,
  damping: 20,
};

// const variants = {
//   collapsed: { scaleX: 0 },
//   expanded: { scaleX: 1, transition: { delay: 2 } },
// };

function getIconColor(isSelected: boolean, isHovered: boolean, colors: ColorScheme) {
  if (isSelected && isHovered) {
    return colors.BRAND_DARK;
  }

  if (isSelected) {
    return colors.BRAND;
  }

  if (isHovered) {
    return colors.BRAND_DARK;
  }

  return colors.GRAY;
}

const Tab: FunctionComponent<Props> = (props) => {
  const { colors } = useAppTheme();
  const { name, label, icon } = props;
  const {
    activeTab,
    onTabChange,
    fullWidth,
    compact,
    // animateEntrance,
  } = useContext(tabsetContext);
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
          color={getIconColor(isSelected, isHovered, colors)}
        />
      );
    }
    return icon;
  }, [icon, isHovered, isSelected, colors]);

  const handleClick = () => onTabChange(name);

  return (
    <StyledTab
      ref={tabReference}
      fullWidth={fullWidth}
      compact={compact}
      selected={isSelected}
      onClick={handleClick}
      // initial={animateEntrance ? 'collapsed' : 'expanded'}
      // animate="expanded"
      // variants={variants}
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
          <Mark
            layoutId="tabMarker"
            initial={false}
            transition={markAnimationControls}
          />
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
