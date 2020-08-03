import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Block, Blurred, Label } from './styled';

interface MenuBlockProps {
  label: ReactNode | ((isSelected: boolean) => ReactNode);
  path?: string;
  currentPath?: string;
  onClick?: (event) => void;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { label, path, currentPath, onClick } = props;
  const isSelected = path === currentPath;

  const labelComponent = typeof label === 'function'
    ? label(isSelected)
    : label;

  return (
    <Link to={path} onClick={onClick}>
      <Block selected={isSelected}>
        <Label>{labelComponent}</Label>
        <Blurred>
          <span />
        </Blurred>
      </Block>
    </Link>
  );
};

export default MenuBlock;
