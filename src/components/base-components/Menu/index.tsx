import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react';
import RenderIf from '../RenderIf';
import './styles.scss';

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
    <div className="menu-wrapper" ref={menuRef}>
      <MenuTrigger isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} {...otherProps} />
      <RenderIf condition={isOpen}>
        <div className="menu-container">
          <ul className="menu-list" style={menuListStyles}>
            {children}
          </ul>
        </div>
      </RenderIf>
    </div>
  );
};

export default Menu;
