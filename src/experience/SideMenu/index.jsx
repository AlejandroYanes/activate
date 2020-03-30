import React, { useState } from 'react';
import './styles.scss';
import MenuBlock from './MenuBlock';

const items = ['A', 'B', 'C', 'D', 'E'];

export default function SideMenu() {
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const menuBlock = items.map((item, index) => (
    <MenuBlock selected={index === selectedIndex} label={item} onClick={() => setSelectedIndex(index)} />
  ));

  return (
    <aside className="app-side-menu">
      <div className="app-side-menu__wrapper">
        <div className="app-side-menu__top-block">H</div>
        {menuBlock}
        <div className="app-side-menu__empty-block" />
      </div>
    </aside>
  );
}
