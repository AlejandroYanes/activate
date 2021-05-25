import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { useFocusState, useHoverState } from 'hooks/UI';
import { useAppTheme } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import Icon from './Icon';
import { Mark, StyledTab, Label } from './styled';
import tabsetContext from './context';

interface Props {
  name: string;
  icon?: Icons | ReactNode;
  label?: string;
  onClick?: (activeTab: string) => void;
}

const springAnimation = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const Tab: FunctionComponent<Props> = (props) => {
  const { name, label, icon, onClick } = props;
  const { colors, useDarkStyle } = useAppTheme();
  const {
    activeTab,
    onTabChange,
    fullWidth,
    disableFocus,
  } = useContext(tabsetContext);

  const tabReference = useRef(undefined);
  const isHovered = useHoverState(tabReference);
  const isFocused = useFocusState(tabReference);

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(name);
    } else {
      onTabChange(name);
    }
  }, [onTabChange, name]);

  const isSelected = name === activeTab;
  const iconComponent = useMemo(() => {
    if (typeof icon === 'string') {
      return (
        <Icon
          icon={icon as Icons}
          disableFocus={disableFocus}
          isHovered={isHovered || isFocused}
          isSelected={isSelected}
          useDarkStyle={useDarkStyle}
          colors={colors}
        />
      );
    }

    return icon;
  }, [icon, disableFocus, isHovered, isFocused, isSelected, colors, useDarkStyle]);

  return (
    <StyledTab
      role="button"
      tabIndex={0}
      data-el="tab"
      ref={tabReference}
      fullWidth={fullWidth}
      selected={isSelected}
      disableFocus={disableFocus}
      onClick={handleClick}
    >
      <RenderIf condition={!!icon}>
        {iconComponent}
      </RenderIf>
      <RenderIf condition={!!label}>
        <Label isSelected={isSelected} spaced={!!icon}>
          {label}
        </Label>
      </RenderIf>
      <RenderIf condition={isSelected}>
        <Mark
          layoutId="tabMarker"
          initial={false}
          transition={springAnimation}
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
