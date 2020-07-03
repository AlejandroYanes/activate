import React, { FunctionComponent, useState } from 'react';
import Colors from '../../../styles/colors';
import SvgIcon from '../../basse-components/SvgIcon';
import { Icons } from '../../basse-components/SvgIcon/Icons';
import MenuBlock from './MenuBlock';
import { SideMenu as StyledSideMenu, MenuList, ActionBlock, EmptyBlock } from './styled';

const items = ['A', 'B', 'C', 'D', 'E'];

const SideMenu: FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const menuBlocks = items.map((item, index) => (
    <MenuBlock selected={index === selectedIndex} label={item} onClick={() => setSelectedIndex(index)} />
  ));

  return (
    <StyledSideMenu>
      <MenuList>
        <ActionBlock>
          <SvgIcon icon={Icons.HOME} fillColor={Colors.WHITE} />
        </ActionBlock>
        {menuBlocks}
        <EmptyBlock />
      </MenuList>
    </StyledSideMenu>
  );
};

export default SideMenu;
