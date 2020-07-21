import React, { FunctionComponent, ReactNode } from 'react';
import { Item, LeftSide, Label, RightSide } from './styled';

interface Props {
  leftNode: ReactNode;
  label: string;
  rightNode: ReactNode;
}

const SummaryItem: FunctionComponent<Props> = (props) => {
  const { leftNode, label, rightNode } = props;

  return (
    <Item>
      <LeftSide>{leftNode}</LeftSide>
      <Label>{label}</Label>
      <RightSide>{rightNode}</RightSide>
    </Item>
  );
};

export default SummaryItem;
