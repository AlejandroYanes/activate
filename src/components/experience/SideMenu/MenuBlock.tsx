import React, { FunctionComponent } from 'react';
import {
  MenuBlock as StyledMenuBlock,
  MenuBlockTop,
  MenuBlockContent,
  MenuBlockBottom,
} from './styled';

export interface MenuBlockProps {
  selected: boolean;
  label: string;
  onClick: (event) => void;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { selected, label, onClick } = props;

  return (
    <StyledMenuBlock onClick={onClick}>
      <MenuBlockTop selected={selected}>
        <div />
      </MenuBlockTop>
      <MenuBlockContent selected={selected}>
        <span>{label}</span>
      </MenuBlockContent>
      <MenuBlockBottom selected={selected}>
        <div />
      </MenuBlockBottom>
    </StyledMenuBlock>
  );
};

MenuBlock.defaultProps = {
  selected: false,
};

export default MenuBlock;
