import React, { FunctionComponent, useState } from 'react';
import Colors from 'styles/colors';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import { SideMenu as StyledSideMenu, MenuList, ActionBlock, EmptyBlock } from './styled';
import MenuBlock from './MenuBlock';

const items = ['A', 'B', 'C', 'D', 'E'];

const SideMenu: FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const menuBlocks = items.map((item, index) => (
    <MenuBlock
      selected={index === selectedIndex}
      label={item}
      onClick={() => setSelectedIndex(index)}
    />
  ));

  return (
    <StyledSideMenu>
      <MenuList>
        {/*<ActionBlock>*/}
        {/*  <SvgIcon icon={Icons.HOME} fillColor={Colors.WHITE} />*/}
        {/*</ActionBlock>*/}
        <EmptyBlock />
        <MenuBlock
          label={<SvgIcon icon={Icons.HOME} fillColor={selectedIndex === -1 ? Colors.BRAND : Colors.WHITE} />}
          onClick={() => setSelectedIndex(-1)}
          selected={selectedIndex === -1}
        />
        {menuBlocks}
        <EmptyBlock />
      </MenuList>
    </StyledSideMenu>
  );
};

export default SideMenu;
