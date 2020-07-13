import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react';
import RenderIf from '../RenderIf';
import { MenuWrapper, MenuContainer, MenuList } from './styled';

interface Props {
  trigger: (onClick) => JSX.Element;
  align?: 'start' | 'end';
  [x: string]: any;
}

const Menu: FunctionComponent<Props> = (props) => {
  const { trigger: MenuTrigger, align, children, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(undefined);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuListStyles = useMemo(() => ({
    [align === 'end' ? 'right' : 'left']: 0,
  }), [align]);

  return (
    <MenuWrapper ref={menuRef}>
      <MenuTrigger isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} {...otherProps} />
      <RenderIf condition={isOpen}>
        <MenuContainer>
          <MenuList style={menuListStyles}>
            {children}
          </MenuList>
        </MenuContainer>
      </RenderIf>
    </MenuWrapper>
  );
};

export default Menu;
