import React, { FunctionComponent, ReactNode } from 'react';
import { Block, Label, Blurred } from './styled';

export interface MenuBlockProps {
  selected: boolean;
  label: ReactNode;
  onClick: (event) => void;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { selected, label, onClick } = props;

  return (
    <Block onClick={onClick} selected={selected}>
      <Label>{label}</Label>
      <Blurred>
        <span />
      </Blurred>
    </Block>
  );
};

MenuBlock.defaultProps = { selected: false };

export default MenuBlock;
