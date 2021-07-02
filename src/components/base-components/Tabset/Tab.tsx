import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { Label, Mark, StyledTab } from './styled';
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
  const {
    activeTab,
    onTabChange,
    fullWidth,
    disableFocus,
  } = useContext(tabsetContext);

  const handleClick = useCallback(() => {
    let action;

    if (onTabChange) {
      action = onTabChange;
    }

    if (onClick) {
      action = onClick
    }

    action(name);
  }, [onTabChange, name]);

  const isSelected = name === activeTab;
  const iconComponent = useMemo(() => {
    if (typeof icon === 'string') {
      return (
        <SvgIcon icon={icon as Icons} />
      );
    }

    return icon;
  }, [icon, disableFocus]);

  return (
    <StyledTab
      role="button"
      tabIndex={0}
      data-el="tab"
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
