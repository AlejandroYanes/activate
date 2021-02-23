import React, { FunctionComponent } from 'react';
import { formatAmount } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import { Attr, Info as StyledInfo } from './styled';

interface Props {
  name: string;
  userName: string;
  leftStatLabel: string;
  leftStatValue: number;
  rightStatLabel: string;
  rightStatValue: number;
}

const Info: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { leftStatLabel, leftStatValue, userName, name, rightStatLabel, rightStatValue } = props;

  if (layout === Layout.SMALL) {
    return (
      <>
        <StyledInfo centered>
          <Attr>
            <Text>{userName}</Text>
            <Title level={2} align="center" color="brand">{name}</Title>
          </Attr>
        </StyledInfo>
        <StyledInfo around mT>
          <Attr>
            <Text>{leftStatLabel}</Text>
            <Title level={2} color="accent">{formatAmount(leftStatValue)}</Title>
          </Attr>
          <Attr>
            <Text>{rightStatLabel}</Text>
            <Title level={2} color="accent">{formatAmount(rightStatValue)}</Title>
          </Attr>
        </StyledInfo>
      </>
    );
  }

  return (
    <StyledInfo>
      <Attr>
        <Text>{leftStatLabel}</Text>
        <Title level={2} color="accent">{formatAmount(leftStatValue)}</Title>
      </Attr>
      <Attr>
        <Text>{userName}</Text>
        <Title level={2} align="center" color="brand">{name}</Title>
      </Attr>
      <Attr>
        <Text>{rightStatLabel}</Text>
        <Title level={2} color="accent">{formatAmount(rightStatValue)}</Title>
      </Attr>
    </StyledInfo>
  );
};

export default Info;
