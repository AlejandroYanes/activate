import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { MenuWrapper, TriggerContainer, MenuContainer, MenuList } from './styled/menu';
import { MenuProvider } from './context';

interface TriggerProps {
  isOpen: boolean;
  toggleMenu: () => void;
  [x: string]: any;
}

interface Props {
  trigger: ReactNode | ((props: TriggerProps) => JSX.Element);
  align?: 'start' | 'end';
  [x: string]: any;
}

const Menu: FunctionComponent<Props> = (props) => {
  const { trigger, align, children, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuReference = useRef(undefined);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const triggerElement = useMemo(() => {
    if (typeof trigger === 'function') {
      const MenuTrigger = trigger;
      return (
        <MenuTrigger isOpen={isOpen} toggleMenu={toggleMenu} {...otherProps} />
      );
    }

    return (
      <TriggerContainer onClick={toggleMenu}>
        {trigger}
      </TriggerContainer>
    );
  }, [trigger, toggleMenu]);
  const menuListStyles = useMemo(
    () => ({ [align === 'end' ? 'right' : 'left']: 0 }),
    [align],
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuReference.current && !menuReference.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MenuWrapper ref={menuReference} data-el="menu-wrapper">
      {triggerElement}
      <RenderIf condition={isOpen}>
        <MenuContainer>
          <MenuProvider closeMenu={toggleMenu}>
            <MenuList style={menuListStyles} data-el="menu-list">
              {children}
            </MenuList>
          </MenuProvider>
        </MenuContainer>
      </RenderIf>
    </MenuWrapper>
  );
};

export default Menu;
