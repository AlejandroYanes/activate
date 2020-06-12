import React, { FunctionComponent, useState } from 'react';
import './styles.scss';
import MenuBlock from './MenuBlock';
import SvgIcon from '../../basse-components/SvgIcon';
import { Colors } from '../../basse-components/SvgIcon/colors';
import { Icons } from '../../basse-components/SvgIcon/Icons';

const items = ['A', 'B', 'C', 'D', 'E'];

const SideMenu: FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const menuBlocks = items.map((item, index) => (
    <MenuBlock selected={index === selectedIndex} label={item} onClick={() => setSelectedIndex(index)} />
  ));

  return (
    <aside className="app-side-menu">
      <ul className="app-side-menu__wrapper">
        <li className="app-side-menu__action-block">
          <SvgIcon icon={Icons.HOME} fillColor={Colors.WHITE} />
        </li>
        {menuBlocks}
        <li className="app-side-menu__empty-block" />
      </ul>
    </aside>
  );
};

export default SideMenu;
