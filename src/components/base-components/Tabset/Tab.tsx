import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { useHoverState } from 'hooks/UI';
import { ColorScheme } from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import tabsetContext from './context';
import { Mark, StyledTab, Text, Label } from './styled';

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

function getIconColor(
  disableFocus: boolean,
  isSelected: boolean,
  isHovered: boolean,
  useDarkStyle: boolean,
  colors: ColorScheme,
) {
  if (isSelected && isHovered && !disableFocus) {
    return useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;
  }

  if (isSelected) {
    return colors.BRAND;
  }

  if (isHovered && !disableFocus) {
    return useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;
  }

  return colors.GRAY;
}

const Tab: FunctionComponent<Props> = (props) => {
  const { colors, useDarkStyle } = useAppTheme();
  const { name, label, icon } = props;
  const {
    activeTab,
    onTabChange,
    fullWidth,
    compact,
    disableFocus,
  } = useContext(tabsetContext);

  const tabReference = useRef(undefined);
  const isHovered = useHoverState(tabReference);

  const handleClick = useCallback(() => onTabChange(name), [onTabChange, name]);

  const isSelected = name === activeTab;
  const iconComponent = useMemo(() => {
    if (typeof icon === 'string') {
      return (
        <SvgIcon
          icon={icon as Icons}
          color={getIconColor(disableFocus, isSelected, isHovered, useDarkStyle, colors)}
        />
      );
    }
    return icon;
  }, [icon, disableFocus, isHovered, isSelected, colors, useDarkStyle]);

  return (
    <StyledTab
      role="button"
      tabIndex={0}
      data-el="tab"
      ref={tabReference}
      fullWidth={fullWidth}
      compact={compact}
      selected={isSelected}
      disableFocus={disableFocus}
      // animateEntrance={animateEntrance}
      onClick={handleClick}
    >
      <Text data-el="tab-text">
        <RenderIf condition={!!icon}>
          {iconComponent}
        </RenderIf>
        <RenderIf condition={!!label}>
          <Label compact={compact} isSelected={isSelected} spaced={!!icon}>
            {label}
          </Label>
        </RenderIf>
      </Text>
      <RenderIf condition={isSelected}>
        <Mark
          layoutId="tabMarker"
          initial={false}
          transition={markAnimationControls}
        />
      </RenderIf>
    </StyledTab>
  );
};

Tab.defaultProps = {
  icon: null,
  label: '',
};

export default Tab;
